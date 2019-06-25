import * as React from "react";
import classNames from "classnames";

const Section: React.FunctionComponent<{ className?: string; id: string }> = ({
  id,
  className,
  children
}) => {
  return (
    <section className={classNames("section", className)} id={id}>
      {children}
    </section>
  );
};

export default Section;
