import * as React from "react";
import socialMeetup from "../assets/social-meetup.svg";
import socialTwitter from "../assets/social-twitter.svg";
import socialOpenCollective from "../assets/social-opencollective.svg";

export default () => {
  return (
    <footer className="footer-container">
      <div>
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
        <a
          href="https://opencollective.com/usereact"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={socialOpenCollective} />
        </a>
      </div>
      <p className="footer-copyright">&copy; 2019 useReactNYC</p>
    </footer>
  );
};
