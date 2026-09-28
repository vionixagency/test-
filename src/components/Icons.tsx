import type { ReactNode } from "react";
export function ArrowIcon() {
  return (
    <svg className="arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const paths: Record<string, ReactNode> = {
  facebook: <path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h2.6L16 11h-3V9c0-.6.4-1 1-1Z" fill="currentColor" />,
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.7" fill="none" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.7" fill="none" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
    </>
  ),
  threads: (
    <path
      d="M9.2 12.2c.2-3.6 2.2-5.4 5-5.2 2.6.2 3.8 1.8 3.8 4.4 0 3.8-2.2 6.8-6 6.8-3.2 0-5.2-1.8-5.2-4.4 0-1.6 1-2.8 2.6-2.8 1.4 0 2.2.8 2.2 2 0 2.4-1.8 3.4-3.4 2.6"
      stroke="currentColor"
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
    />
  ),
  tiktok: (
    <path
      d="M14 6c.6 2.2 2.2 3.6 4.4 3.8v2.4c-1.5 0-2.9-.5-4.4-1.4v5.4A4.8 4.8 0 1 1 9.4 11.6v2.5a2.4 2.4 0 1 0 2.2 2.4V6H14Z"
      fill="currentColor"
    />
  ),
  x: <path d="M5 5h3.2l4 5.4L16.8 5H19l-5.6 7.2L19 19h-3.2l-4.2-5.6L7.2 19H5l5.8-7.4L5 5Z" fill="currentColor" />,
  youtube: (
    <>
      <rect x="3" y="7" width="18" height="10" rx="3" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M11 10.2 15 12l-4 1.8v-3.6Z" fill="currentColor" />
    </>
  ),
  linkedin: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2.4" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M8 10.2V17M8 7.6h.01M11.4 17v-3.8c0-1.2.8-2 2-2s2 .8 2 2V17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  whatsapp: (
    <path
      d="M6.2 17.6 5 20.2l2.8-.7A8.4 8.4 0 1 0 6.2 17.6Zm8.7-2.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4 0-.6.2l-.6.7c-.2.2-.4.2-.6.1-1.6-.7-2.8-2.2-3.1-2.6-.2-.3 0-.4.1-.6l.5-.6c.2-.2.2-.4.1-.6l-.7-1.6c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.6.1-.8.4-.8 1 .2 2.6 1.2 3.7 1.2 1.3 2.8 2.4 4.6 2.8.6.1 1.1 0 1.5-.2.5-.3.8-1.2.6-1.4Z"
      fill="currentColor"
    />
  ),
};

export function SocialIcon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[name] ?? paths.x}
    </svg>
  );
}

export function ChartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 19V9m7 10V5m7 14v-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
export function WindowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3 8h18M7 6h.01M10 6h.01" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
export function ChipIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 7h10v10H7z" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M9.5 2.8v2.7M14.5 2.8v2.7M9.5 18.5v2.7M14.5 18.5v2.7M2.8 9.5h2.7M2.8 14.5h2.7M18.5 9.5h2.7M18.5 14.5h2.7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
