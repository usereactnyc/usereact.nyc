import * as React from "react";
import { useLargeSize } from "../helpers/screen-size";

interface SideBySideProps {
  left: () => React.ReactNode;
  right: () => React.ReactNode;
  reverseOnMobile?: boolean;
}

export default ({ left, right, reverseOnMobile }: SideBySideProps) => {
  const isLarge = useLargeSize();
  const shouldReverse = reverseOnMobile && !isLarge;

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
