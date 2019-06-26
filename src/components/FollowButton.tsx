import * as React from "react";
import classNames from "classnames";
import socialMeetup from "../assets/social-meetup-silo.svg";
import socialTwitter from "../assets/social-twitter-silo.svg";
import socialOpenCollective from "../assets/social-opencollective.svg";

interface SocialInterface {
  meetup: SocialObject;
  openCollective: SocialObject;
  twitter: SocialObject;
}

interface SocialObject {
  className: string;
  icon: string;
  socialName: string;
  text: string;
  url: string;
}

const socialObject: SocialInterface = {
  meetup: {
    className: "follow-btn-meetup",
    icon: socialMeetup,
    socialName: "Meetup",
    text: "Join useReactNYC",
    url: "https://www.meetup.com/useReactNYC"
  },
  openCollective: {
    className: "follow-btn-opencollective",
    icon: socialOpenCollective,
    socialName: "Open Collective",
    text: "Donate to useReact",
    url: "https://opencollective.com/usereact"
  },
  twitter: {
    className: "follow-btn-twitter",
    icon: socialTwitter,
    socialName: "Twitter",
    text: "Follow @useReactNYC",
    url: "https://twitter.com/useReactnyc"
  }
};
const FollowButton = (props: { social: keyof SocialInterface }) => {
  const { social } = props;
  const { className, icon, socialName, text, url } = socialObject[social];
  return (
    <a
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      className={classNames("follow-btn", className)}
    >
      <img src={icon} className="follow-btn-image" alt={`${socialName} logo`} />
      <span>{text}</span>
    </a>
  );
};

export default FollowButton;
