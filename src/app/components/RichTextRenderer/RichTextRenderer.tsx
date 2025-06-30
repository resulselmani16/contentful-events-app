import { BLOCKS } from "@contentful/rich-text-types";
import React from "react";
import { Typography } from "../Typography/Typography";
import { RichTextRendererProps } from "./types";
import { Image } from "../Image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const RichTextRenderer = ({ document, links }: RichTextRendererProps) => {
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node: any, children: any): React.ReactNode => {
        return <Typography as="h1">{children}</Typography>;
      },
      [BLOCKS.HEADING_2]: (node: any, children: any): React.ReactNode => {
        return <Typography as="h2">{children}</Typography>;
      },
      [BLOCKS.PARAGRAPH]: (node: any, children: any): React.ReactNode => {
        return <Typography as="p">{children}</Typography>;
      },
      [BLOCKS.LIST_ITEM]: (content: any): React.ReactNode => {
        return (
          <li className="list-disc m-4 text-lg md:text-xl">
            {content.content[0].content[0].value}
          </li>
        );
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: any): React.ReactNode => {
        const id = node.data?.target?.sys?.id ?? 0;
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
