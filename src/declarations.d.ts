// package.json
declare module "*/package.json" {
  export const version: string;
  export const author: string;
}

declare module "assets/*" {
  const content: any;
  export default content;
}

declare module "*.jpg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.ico" {
  const content: any;
  export default content;
}

declare const graphql: (query: TemplateStringsArray) => void;
