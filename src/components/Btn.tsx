import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowIcon } from "./Icons";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  small?: boolean;
  className?: string;
};

export function Btn({ href, children, variant = "primary", small, className = "" }: Props) {
  const cls = `btn btn-${variant}${small ? " btn-small" : ""} ${className}`.trim();
  const inner = (
    <>
      {children}
      {variant === "primary" ? <ArrowIcon /> : null}
    </>
  );
  if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http")) {
    return (
      <a className={cls} href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <Link className={cls} to={href as "/"}>
      {inner}
    </Link>
  );
}
