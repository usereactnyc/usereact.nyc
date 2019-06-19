import * as React from "react";

interface SideBySideProps {
  left: () => React.ReactNode;
  right: () => React.ReactNode;
}

export default ({ left, right }: SideBySideProps) => {
  return (
    <div className="side-by-side">
      <div>{left()}</div>
      <div>{right()}</div>
    </div>
  );
};
