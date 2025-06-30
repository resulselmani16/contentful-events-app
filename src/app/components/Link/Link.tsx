import React from "react";
import NextLink from "next/link";
import { LinkVariant, LinkProps } from "./types";

const baseStyles = "transition-colors";
const variantStyles: Record<LinkVariant, string> = {
  default: "text-white hover:underline",
  button:
    "inline-block px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700",
  underline: "text-blue-600 underline hover:text-blue-800",
};

export const Link: React.FC<LinkProps> = ({
  href,
  variant = "default",
  className = "",
  openInNewTab = false,
  children,
  ...props
}) => {
  const rel = openInNewTab ? "noopener noreferrer" : undefined;
  const target = openInNewTab ? "_blank" : undefined;
  const classes = `${baseStyles} ${variantStyles[variant]} ${className} cursor-pointer`;

  if (openInNewTab) {
    return (
      <a href={href} className={classes} rel={rel} target={target} {...props}>
        {children}
      </a>
    );
  }
  return (
    <NextLink href={href} className={classes} {...props}>
      {children}
    </NextLink>
  );
};
