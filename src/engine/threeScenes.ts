import type { SceneName } from "./types";

type ThreeMod = typeof import("three");

type GlobeHandle = {
  update: (dt: number, t: number) => void;
  resize: () => void;
  dispose: () => void;
  visible: boolean;
};

type RocketHandle = GlobeHandle;

const NODES = [
  { name: "Europe", lat: 48.1, lon: 11.5 },
  { name: "Australia", lat: -25.3, lon: 133.8 },
  { name: "UAE", lat: 24.5, lon: 54.4 },
  { name: "Qatar", lat: 25.3, lon: 51.2 },
  { name: "Bangladesh", lat: 23.7, lon: 90.4 },
];

function latLonToVec(THREE: ThreeMod, lat: number, lon: number, r: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  );
}

function isLand(lat: number, lon: number) {
  if (lat > 15 && lat < 72 && lon > -168 && lon < -52) return !(lat < 28 && lon > -85 && lon < -70);
  if (lat > -56 && lat < 13 && lon > -82 && lon < -34) return !(lat > 0 && lon < -70 && lon > -80 && lat < 8);
  if (lat > 36 && lat < 72 && lon > -10 && lon < 42) return true;
  if (lat > -35 && lat < 37 && lon > -18 && lon < 51) return !(lat > 10 && lon < 0);
  if (lat > 8 && lat < 75 && lon > 26 && lon < 190) {
    if (lat < 22 && lon > 95 && lon < 105) return Math.sin(lat * 3) > -0.2;
    return !(lat < 15 && lon > 120 && lon < 150);
  }
  if (lat > -44 && lat < -10 && lon > 113 && lon < 154) return true;
  if (lat > -47 && lat < -34 && lon > 166 && lon < 179) return true;
  return false;
}

function webglOk() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

export function webglAvailable() {
  return webglOk();
}

export async function mountGlobe(el: HTMLElement): Promise<GlobeHandle | null> {
  if (!webglOk()) return null;
  const THREE = await import("three");
  const w0 = el.clientWidth || 320;
  const h0 = el.clientHeight || 320;
  const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(w0, h0);
  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";
  renderer.domElement.style.display = "block";
  el.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, w0 / Math.max(h0, 1), 0.1, 40);
  camera.position.set(0, 0.2, 4.2);

  const group = new THREE.Group();
  scene.add(group);

  const dots: { mesh: InstanceType<ThreeMod["Points"]> }[] = [];
  const landPos: number[] = [];
  const landCol: number[] = [];
  const oceanPos: number[] = [];
  const R = 1.35;
  const N = 2200;
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = golden * i;
    const x = Math.cos(theta) * radius;
    const z = Math.sin(theta) * radius;
    const lat = Math.asin(y) * (180 / Math.PI);
    const lon = Math.atan2(z, x) * (180 / Math.PI);
    if (isLand(lat, lon)) {
      landPos.push(x * R, y * R, z * R);
      landCol.push(0.13, 0.89, 1);
    } else if (i % 3 === 0) {
      oceanPos.push(x * R * 0.99, y * R * 0.99, z * R * 0.99);
    }
  }
  const mkPoints = (pos: number[], color: number, size: number) => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    const m = new THREE.PointsMaterial({
      color,
      size,
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
    });
    const p = new THREE.Points(g, m);
    group.add(p);
    dots.push({ mesh: p });
  };
  mkPoints(landPos, 0x22e4ff, 0.028);
  mkPoints(oceanPos, 0x2f6bff, 0.016);

  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(R * 1.04, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0x2f6bff, transparent: true, opacity: 0.07, side: THREE.BackSide }),
  );
  group.add(glow);

  const ringGeo = new THREE.RingGeometry(R * 1.25, R * 1.27, 80);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0x7b3fe4, transparent: true, opacity: 0.45, side: THREE.DoubleSide });
  const ring1 = new THREE.Mesh(ringGeo, ringMat);
  ring1.rotation.x = Math.PI / 2.4;
  const ring2 = new THREE.Mesh(ringGeo, ringMat.clone());
  ring2.rotation.x = Math.PI / 1.7;
  ring2.rotation.z = 0.6;
  group.add(ring1, ring2);

  const nodeMeshes: { mesh: InstanceType<ThreeMod["Mesh"]>; name: string }[] = [];
  const nodeMat = new THREE.MeshBasicMaterial({ color: 0xffb547 });
  NODES.forEach((n) => {
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 12), nodeMat.clone());
    mesh.position.copy(latLonToVec(THREE, n.lat, n.lon, R * 1.02));
    mesh.userData.name = n.name;
    group.add(mesh);
    nodeMeshes.push({ mesh, name: n.name });
  });

  const arcGroup = new THREE.Group();
  group.add(arcGroup);
  const pairs = [
    [0, 4],
    [0, 2],
    [2, 3],
    [4, 1],
    [0, 1],
  ];
  const arcs: { line: InstanceType<ThreeMod["Line"]>; t: number; speed: number }[] = [];
  pairs.forEach(([a, b], i) => {
    const p0 = latLonToVec(THREE, NODES[a].lat, NODES[a].lon, R * 1.02);
    const p1 = latLonToVec(THREE, NODES[b].lat, NODES[b].lon, R * 1.02);
    const mid = p0.clone().add(p1).multiplyScalar(0.5).normalize().multiplyScalar(R * 1.45);
    const curve = new THREE.QuadraticBezierCurve3(p0, mid, p1);
    const pts = curve.getPoints(40);
    const g = new THREE.BufferGeometry().setFromPoints(pts);
    const line = new THREE.Line(
      g,
      new THREE.LineBasicMaterial({ color: 0x22e4ff, transparent: true, opacity: 0.35 }),
    );
    arcGroup.add(line);
    const pulse = new THREE.Mesh(
      new THREE.SphereGeometry(0.03, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0x4ff3e0 }),
    );
    arcGroup.add(pulse);
    arcs.push({ line: pulse as unknown as InstanceType<ThreeMod["Line"]>, t: i * 0.2, speed: 0.18 + i * 0.02 });
    (pulse as InstanceType<ThreeMod["Mesh"]> & { curve?: ThreeMod["QuadraticBezierCurve3"] }).userData.curve = curve;
  });

  const tooltip = document.createElement("div");
  tooltip.style.cssText =
    "position:absolute;left:0;top:0;transform:translate(-50%,-120%);padding:6px 10px;border-radius:8px;background:#060A1E;border:1px solid rgba(34,228,255,.4);color:#EAF4FF;font:700 12px Manrope,sans-serif;pointer-events:none;opacity:0;transition:opacity .15s;";
  el.style.position = "relative";
  el.appendChild(tooltip);

  const ray = new THREE.Raycaster();
  const pointer = new THREE.Vector2(-2, -2);
  let dragging = false;
  let lastX = 0;
  let lastY = 0;
  let rotY = 0.4;
  let rotX = 0.25;
  let targetRotY = rotY;
  let targetRotX = rotX;
  let dist = 4.2;

  const onDown = (e: PointerEvent) => {
    dragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
    el.setPointerCapture(e.pointerId);
  };
  const onMove = (e: PointerEvent) => {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    if (!dragging) return;
    targetRotY += (e.clientX - lastX) * 0.005;
    targetRotX += (e.clientY - lastY) * 0.004;
    targetRotX = Math.max(-0.9, Math.min(0.9, targetRotX));
    lastX = e.clientX;
    lastY = e.clientY;
  };
  const onUp = () => {
    dragging = false;
  };
  const onWheel = (e: WheelEvent) => {
    e.preventDefault();
    dist = Math.max(2.6, Math.min(6.2, dist + e.deltaY * 0.002));
  };
  el.addEventListener("pointerdown", onDown);
  el.addEventListener("pointermove", onMove);
  el.addEventListener("pointerup", onUp);
  el.addEventListener("pointerleave", onUp);
  el.addEventListener("wheel", onWheel, { passive: false });

  let visible = true;
  const io = new IntersectionObserver(
    (entries) => {
      visible = entries.some((en) => en.isIntersecting);
    },
    { threshold: 0.05 },
  );
  io.observe(el);

  return {
    get visible() {
      return visible;
    },
    set visible(v) {
      visible = v;
    },
    update(dt: number, t: number) {
      if (!visible) return;
      rotY += (targetRotY - rotY) * 0.12;
      rotX += (targetRotX - rotX) * 0.12;
      if (!dragging) targetRotY += dt * 0.12;
      group.rotation.y = rotY;
      group.rotation.x = rotX;
      ring1.rotation.z = t * 0.15;
      ring2.rotation.z = -t * 0.1;
      camera.position.z += (dist - camera.position.z) * 0.12;
      nodeMeshes.forEach((n, i) => {
        const s = 1 + Math.sin(t * 2 + i) * 0.12;
        n.mesh.scale.setScalar(s);
      });
      arcGroup.children.forEach((ch) => {
        if (ch.userData.curve) {
          const curve = ch.userData.curve as InstanceType<ThreeMod["QuadraticBezierCurve3"]>;
          const speed = 0.2;
          const u = (t * speed + (ch.id % 7) * 0.13) % 1;
          const p = curve.getPoint(u);
          ch.position.copy(p);
        }
      });
      ray.setFromCamera(pointer, camera);
      const hits = ray.intersectObjects(nodeMeshes.map((n) => n.mesh));
      if (hits.length) {
        const name = (hits[0].object.userData.name as string) || "";
        tooltip.textContent = name;
        tooltip.style.opacity = "1";
        const rect = el.getBoundingClientRect();
        tooltip.style.left = `${((pointer.x + 1) / 2) * rect.width}px`;
        tooltip.style.top = `${((1 - pointer.y) / 2) * rect.height}px`;
        (hits[0].object as InstanceType<ThreeMod["Mesh"]>).scale.setScalar(1.8);
      } else {
        tooltip.style.opacity = "0";
      }
      renderer.render(scene, camera);
    },
    resize() {
      const w = el.clientWidth || 320;
      const h = el.clientHeight || 320;
      camera.aspect = w / Math.max(h, 1);
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(w, h, false);
    },
    dispose() {
      io.disconnect();
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointerleave", onUp);
      el.removeEventListener("wheel", onWheel);
      tooltip.remove();
      renderer.dispose();
      renderer.domElement.remove();
      scene.traverse((obj) => {
        const mesh = obj as InstanceType<ThreeMod["Mesh"]>;
        mesh.geometry?.dispose?.();
        const mat = mesh.material as { dispose?: () => void } | undefined;
        mat?.dispose?.();
      });
    },
  };
}

export async function mountRocket(el: HTMLElement): Promise<RocketHandle | null> {
  if (!webglOk()) return null;
  const THREE = await import("three");
  const w0 = el.clientWidth || 320;
  const h0 = el.clientHeight || 240;
  const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(w0, h0);
  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";
  renderer.domElement.style.display = "block";
  el.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, w0 / Math.max(h0, 1), 0.1, 40);
  camera.position.set(3.2, 1.6, 6.4);
  camera.lookAt(0, 0.6, 0);

  const light = new THREE.DirectionalLight(0xaad4ff, 1.4);
  light.position.set(4, 6, 8);
  scene.add(light, new THREE.AmbientLight(0x2244aa, 0.6));

  const rocket = new THREE.Group();
  const body = new THREE.Mesh(
    new THREE.CylinderGeometry(0.18, 0.22, 1.1, 10),
    new THREE.MeshStandardMaterial({ color: 0x9db2da, metalness: 0.4, roughness: 0.35 }),
  );
  const nose = new THREE.Mesh(
    new THREE.ConeGeometry(0.18, 0.42, 10),
    new THREE.MeshStandardMaterial({ color: 0x22e4ff, metalness: 0.3, roughness: 0.4 }),
  );
  nose.position.y = 0.74;
  const finMat = new THREE.MeshStandardMaterial({ color: 0x7b3fe4 });
  for (let i = 0; i < 3; i++) {
    const fin = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.32, 4), finMat);
    const a = (i / 3) * Math.PI * 2;
    fin.position.set(Math.cos(a) * 0.22, -0.45, Math.sin(a) * 0.22);
    fin.rotation.z = Math.PI;
    rocket.add(fin);
  }
  rocket.add(body, nose);
  rocket.position.set(-1.4, -0.8, 0);
  scene.add(rocket);

  const flames: InstanceType<ThreeMod["Mesh"]>[] = [];
  const flameGeo = new THREE.ConeGeometry(0.08, 0.28, 6);
  flameGeo.rotateX(Math.PI);
  for (let i = 0; i < 18; i++) {
    const f = new THREE.Mesh(
      flameGeo,
      new THREE.MeshBasicMaterial({
        color: i % 2 ? 0xffb547 : 0xff8a3d,
        transparent: true,
        opacity: 0.7,
      }),
    );
    f.position.set((Math.random() - 0.5) * 0.12, -0.7, (Math.random() - 0.5) * 0.12);
    rocket.add(f);
    flames.push(f);
  }

  const bars: InstanceType<ThreeMod["Mesh"]>[] = [];
  const values = [0.4, 0.7, 0.55, 1.0, 1.35, 1.8];
  values.forEach((v, i) => {
    const g = new THREE.BoxGeometry(0.28, 1, 0.28);
    g.translate(0, 0.5, 0);
    const m = new THREE.Mesh(
      g,
      new THREE.MeshStandardMaterial({
        color: i === values.length - 1 ? 0x22e4ff : 0x2f6bff,
        emissive: 0x112266,
        metalness: 0.2,
        roughness: 0.4,
      }),
    );
    m.position.set(0.2 + i * 0.42, -1.1, 0);
    m.scale.y = 0.05;
    m.userData.target = v;
    scene.add(m);
    bars.push(m);
  });

  const burst = new THREE.PointLight(0x22e4ff, 0, 6);
  burst.position.set(2.4, 1.2, 0);
  scene.add(burst);

  let visible = true;
  let progress = 0;
  const io = new IntersectionObserver(
    (entries) => {
      visible = entries.some((en) => en.isIntersecting);
    },
    { threshold: 0.12 },
  );
  io.observe(el);

  const onScroll = () => {
    const rect = el.getBoundingClientRect();
    const mid = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
    progress = Math.max(0, Math.min(1, mid));
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  return {
    get visible() {
      return visible;
    },
    set visible(v) {
      visible = v;
    },
    update(_dt: number, t: number) {
      if (!visible) return;
      const y = -0.9 + progress * 2.1;
      rocket.position.y += (y - rocket.position.y) * 0.08;
      rocket.rotation.y = t * 0.4;
      rocket.rotation.z = Math.sin(t * 2) * 0.04;
      flames.forEach((f, i) => {
        f.scale.y = 0.7 + Math.sin(t * 18 + i) * 0.45;
        f.material && ((f.material as InstanceType<ThreeMod["MeshBasicMaterial"]>).opacity = 0.35 + progress * 0.5);
      });
      bars.forEach((b, i) => {
        const target = (b.userData.target as number) * Math.min(1, Math.max(0, progress * 1.4 - i * 0.08));
        b.scale.y += (Math.max(0.04, target) - b.scale.y) * 0.08;
      });
      burst.intensity = progress > 0.85 ? 2.2 + Math.sin(t * 10) * 0.6 : progress * 0.4;
      renderer.render(scene, camera);
    },
    resize() {
      const w = el.clientWidth || 320;
      const h = el.clientHeight || 240;
      camera.aspect = w / Math.max(h, 1);
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(w, h, false);
    },
    dispose() {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}

export function GlobeFallback() {
  return null;
}

void (0 as unknown as SceneName);
