import { useEffect, useRef, useState, type ReactNode } from "react";
import { createEngine, PAUSE_KEY, prefersReduced } from "@/engine";
import type { EngineApi, SceneName } from "@/engine/types";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

let engine: EngineApi | null = null;

export function getEngine() {
  return engine;
}

export function SiteShell({
  scene,
  children,
}: {
  scene: SceneName;
  children: ReactNode;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setPaused(localStorage.getItem(PAUSE_KEY) === "1" || prefersReduced());
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    engine = createEngine(canvas, scene);
    return () => {
      engine?.destroy();
      engine = null;
    };
    // engine created once; scene updates below
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    engine?.setScene(scene);
  }, [scene]);

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    if (prefersReduced()) {
      reveals.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    reveals.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });

  function togglePause() {
    const next = !paused;
    setPaused(next);
    engine?.setPaused(next);
  }

  return (
    <div className="site-shell shimmer" data-scene={scene}>
      <div className="progress-line" aria-hidden="true" />
      <canvas ref={canvasRef} className="vx-living-canvas" aria-hidden="true" />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
      <button
        className="motion-control"
        type="button"
        aria-pressed={paused}
        aria-label={paused ? "Resume animations" : "Pause animations"}
        title={paused ? "Resume animations" : "Pause animations"}
        onClick={togglePause}
      >
        {paused ? "Play" : "Pause"}
      </button>
    </div>
  );
}
