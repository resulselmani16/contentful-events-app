import { BLOCKS } from "@contentful/rich-text-types";
import React from "react";
import { Typography } from "../Typography/Typography";
import { RichTextRendererProps } from "./types";
import { Image } from "../Image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const RichTextRenderer = ({ document, links }: RichTextRendererProps) => {
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (
        node: unknown,
        children: React.ReactNode
      ): React.ReactNode => {
        return <Typography as="h1">{children}</Typography>;
      },
      [BLOCKS.HEADING_2]: (
        node: unknown,
        children: React.ReactNode
      ): React.ReactNode => {
        return <Typography as="h2">{children}</Typography>;
      },
      [BLOCKS.PARAGRAPH]: (
        node: unknown,
        children: React.ReactNode
      ): React.ReactNode => {
        return <Typography as="p">{children}</Typography>;
      },
      [BLOCKS.LIST_ITEM]: (content: unknown): React.ReactNode => {
        const c = content as { content?: unknown[] };
        const first = c.content && (c.content[0] as { content?: unknown[] });
        const value =
          first &&
          Array.isArray(first.content) &&
          first.content[0] &&
          (first.content[0] as { value?: string }).value
            ? (first.content[0] as { value?: string }).value
            : null;
        return <li className="list-disc m-4 text-lg md:text-xl">{value}</li>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: unknown): React.ReactNode => {
        const n = node as { data?: { target?: { sys?: { id?: string } } } };
        const id = n.data?.target?.sys?.id ?? 0;
        const result = links?.assets.block.find((asset) => asset.sys.id === id);

        return result && <Image src={result?.url} alt={result?.title} />;
      },
    },
  };
  if (!document) return <></>;
  return (
    <div className="mx-auto text-left">
      {documentToReactComponents(document, options)}
    </div>
  );
};

export default RichTextRenderer;
