declare module "contentful-html-rich-text-converter" {
  import { EntryFields } from "contentful";
	import { Asset } from "contentful-management";
	
  export function parseHtml(html: string, getAssetId?: (url: string) => string): EntryFields.RichText;
  
  export function parseAssets(html: string, getAssetId?: (url: string) => string): [string, Asset][];

  export function parseIFrames(html: string): unknown[];
}
