import * as React from "react";
import logo from "../../assets/logo.svg";

export default () => (
  <section className="hero" id="header">
    <header className="hero-text">
      <img alt="useReactNYC logo" src={logo} />
      <h1>Welcome to useReactNYC</h1>
      <p className="subhead">
        The home of New York City’s Newest and Most Exciting React Community
        Meetup
      </p>
    </header>
  </section>
);
