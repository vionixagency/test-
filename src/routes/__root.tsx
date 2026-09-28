import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { AppErrorComponent } from "@/lib/error-component";
import appCss from "../styles.css?url";

const APP_NAME = "Vionix";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "theme-color", content: "#060A1E" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  errorComponent: AppErrorComponent,
  notFoundComponent: NotFound,
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});

function NotFound() {
  return (
    <main className="section" style={{ paddingTop: 140 }}>
      <div className="vx-wrap center">
        <span className="eyebrow">404</span>
        <h1 className="display">
          This page <span className="grad-text">moved.</span>
        </h1>
        <p className="lead center">The page you requested does not exist. Head back to Vionix and choose the next useful path.</p>
        <div className="hero-actions center-actions" style={{ justifyContent: "center", marginTop: 22 }}>
          <a className="btn btn-primary" href="/">
            Go home
          </a>
          <a className="btn btn-secondary" href="/services">
            Explore services
          </a>
        </div>
      </div>
    </main>
  );
}
