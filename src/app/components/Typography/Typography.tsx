import React from "react";
import { TextType, TextProps } from "./types";

const typeStyles: Record<TextType, string> = {
  h1: "text-4xl font-bold mb-4",
  h2: "text-3xl font-semibold mb-3",
  h3: "text-2xl font-semibold mb-2",
  h4: "text-xl font-medium mb-2",
  h5: "text-lg font-medium mb-1",
  h6: "text-base font-medium mb-1",
  p: "text-base mb-2",
  span: "text-base",
};

export const Typography: React.FC<TextProps> = ({
  as = "span",
  className = "",
  children,
  ...props
}) => {
  const Component = as;
  return (
    <Component className={`${typeStyles[as]} ${className}`} {...props}>
      {children}
    </Component>
  );
};
