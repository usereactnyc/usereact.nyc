import * as React from "react";

export default () => {
  return (
    <section className="cfp-container" id="cfp">
      <h2>Call for Proposals</h2>
      <p>
        Interested in speaking? Fill out this Google form and we'll get in
        touch.
      </p>
      <a
        href="https://docs.google.com/forms/d/1hCYGZYr3Ozaym-JQF0suIFRVuumexEHyp3PsaiSPpYU/viewform?ts=5ca66f97"
        rel="noopener noreferrer"
        target="_blank"
        className="cfp-submit-link"
      >
        Submit a proposal
      </a>
    </section>
  );
};
