import { useWindowSize } from "react-hooks-window-size";

export enum SizeClass {
  Small = "Small",
  Large = "Large"
}

const SMALL_SIZE = 768;

export function useSizeClass() {
  const size = useWindowSize();
  return size.width < SMALL_SIZE ? SizeClass.Small : SizeClass.Large;
}
