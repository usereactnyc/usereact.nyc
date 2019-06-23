import * as React from "react";
import { useSizeClass, SizeClass } from "../helpers/screen-size";

interface SideBySideProps {
  left: () => React.ReactNode;
  right: () => React.ReactNode;
  reverseOnMobile?: boolean;
}

export default ({ left, right, reverseOnMobile }: SideBySideProps) => {
  const sizeClass = useSizeClass();
  const shouldReverse = reverseOnMobile && sizeClass === SizeClass.Small;

  return (
    <div className="side-by-side">
      <div className="side-by-side-item">
        {!shouldReverse ? left() : right()}
      </div>
      <div className="side-by-side-item">
        {!shouldReverse ? right() : left()}
      </div>
    </div>
  );
};
