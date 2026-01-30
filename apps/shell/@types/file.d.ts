/**
 * 적용하려면
 * tsconfig.json
 * inlcudes: [] 항목에 넣어줘야한다.
 */

declare module "*.png" {
  const src: string;

  export default src;
}

declare module "*.jpeg" {
  const src: string;

  export default src;
}

declare module "*.ico" {
  const src: string;

  export default src;
}

declare module "*.webp" {
  const src: string;

  export default src;
}

declare module "*.svg" {
  import type { FunctionComponent, SVGProps } from "react";

  export const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}
