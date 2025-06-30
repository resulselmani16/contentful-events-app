import React from "react";

export type TextType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: TextType;
  className?: string;
  children: React.ReactNode;
}
