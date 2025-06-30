import React from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  format?: "banner" | "square" | "portrait" | "rounded";
  className?: string;
}

const formatStyles: Record<string, string> = {
  banner: "aspect-[3/1] w-full object-cover object-center rounded-t",
  square: "aspect-square w-full object-cover object-center rounded",
  portrait: "aspect-[3/4] w-full object-cover object-center rounded",
  rounded: "aspect-square w-full object-cover object-center rounded-full",
};

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  format = "banner",
  className = "",
  ...props
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`${formatStyles[format]} ${className} bg-gray-800`}
      {...props}
    />
  );
};
