import { useWindowSize } from "react-hooks-window-size";

export enum SizeClass {
  Small = "Small",
  Medium = "Medium",
  Large = "Large"
}

const SMALL_SIZE = 768;
const MEDIUM_SIZE = 1024;

export function useLargeSize() {
  // Gatsby doesn't support the window server side.
  try {
    const size = useWindowSize();
    return size.width > MEDIUM_SIZE;
  } catch (e) {
    return true;
  }
}
