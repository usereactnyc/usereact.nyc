import * as React from "react";
import socialMeetup from "../assets/social-meetup.svg";
import socialTwitter from "../assets/social-twitter.svg";

interface SocialInterface {
  meetup: SocialObject;
  twitter: SocialObject;
}

interface SocialObject {
  css: string;
  icon: string;
  title: string;
  url: string;
  verb: string;
}

const socialObject: SocialInterface = {
  meetup: {
    css: "follow-btn-meetup",
    icon: socialMeetup,
    title: "useReactNYC",
    url: "https://www.meetup.com/useReactNYC",
    verb: "Join"
  },
  twitter: {
    css: "follow-btn-twitter",
    icon: socialTwitter,
    title: "@useReactNYC",
    url: "https://twitter.com/useReactnyc",
    verb: "Follow"
  }
};
const FollowButton = (props: { social: "twitter" | "meetup" }) => {
  const { social } = props;
  const { css, icon, title, url, verb } = socialObject[social];
  return (
    <a href={url} rel="noopener noreferrer" target="_blank">
      <button className={`follow-button ${css}`}>
        <img src={icon} />{" "}
        <span>
          {verb}
          {title}
        </span>
      </button>
    </a>
  );
};

export default FollowButton;
