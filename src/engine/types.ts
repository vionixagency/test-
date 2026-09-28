export type SceneName =
  | "home"
  | "services"
  | "seo"
  | "paid"
  | "web"
  | "ai"
  | "content"
  | "quiet";

export type EngineApi = {
  setScene: (scene: SceneName) => void;
  setPaused: (paused: boolean) => void;
  attachGlobe: (el: HTMLElement | null) => void;
  attachRocket: (el: HTMLElement | null) => void;
  attachFunnel: (el: HTMLElement | null) => void;
  attachChaos: (el: HTMLElement | null) => void;
  destroy: () => void;
};

export const PAUSE_KEY = "vionix-pause-animations";

export function prefersReduced(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function finePointer(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;
}

export function isMobile(): boolean {
  return typeof window !== "undefined" && window.innerWidth < 760;
}
