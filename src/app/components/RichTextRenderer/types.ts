import { Options } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
export type RichTextRendererProps = {
  document: Document;
  options?: Options;
  links?: {
    assets: {
      block: Array<AssetLink>;
    };
  };
};

type AssetLink = {
  title: string;
  url: string;
  sys: {
    id: string;
  };
};
