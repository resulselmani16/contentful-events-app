import React from "react";

export type LinkVariant = "default" | "button" | "underline";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: LinkVariant;
  className?: string;
  openInNewTab?: boolean;
  children: React.ReactNode;
}
