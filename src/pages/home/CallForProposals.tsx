import * as React from "react";
import SideBySide from "../../components/SideBySide";
import statueOfLiberty from "../../assets/image-statue-of-liberty@2x.jpg";
import Section from "../../components/Section";
import TextGroup from "../../components/TextGroup";

export default () => {
  return (
    <section className="cfp-container">
      <h2>Call for Proposals</h2>
      <p>
        Interested in speaking? Fill out this Google form and we'll get in
        touch.
      </p>
      <a
        href="https://www.google.com/forms/about/"
        rel="noopener noreferrer"
        target="_blank"
        className="cfp-submit-link"
      >
        Submit a proposal
      </a>
    </section>
  );
};
