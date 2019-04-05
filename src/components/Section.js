import React from 'react';

const Section = ({ className, children, nextSection, section }) => (
  <section id={`${section}`} className={className}>
    {children}
    {'' && nextSection && (
      <div>
        <a href={`#${nextSection}`}>next</a>
      </div>
    )}
  </section>
);
export default Section;
