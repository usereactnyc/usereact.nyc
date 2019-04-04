import React from 'react';

const Section = ({ section, nextSection, children }) => (
  <section id={`${section}`}>
    {children}
    {'' && nextSection && (
      <div>
        <a href={`#${nextSection}`}>next</a>
      </div>
    )}
  </section>
);
export default Section;
