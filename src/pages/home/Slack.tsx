import * as React from "react";

export default function Slack() {
  return (
    <form
      className="slack-form"
      method="post"
      action="/.netlify/functions/request-slack-invite"
    >
      <h2>Enter your email to join our Slack!</h2>
      <input
        aria-label="enter email"
        placeholder="email"
        name="email"
        type="email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
