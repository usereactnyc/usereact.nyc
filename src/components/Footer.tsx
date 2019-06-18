import * as React from "react";
import socialMeetup from "../assets/social-meetup.svg";
import socialTwitter from "../assets/social-twitter.svg";

export default () => {
  return (
    <div className="footer-container">
      <a
        href="https://twitter.com/useReactnyc"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={socialTwitter} />
      </a>
      <a
        href="https://www.meetup.com/useReactNYC/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={socialMeetup} />
      </a>
    </div>
  );
};
