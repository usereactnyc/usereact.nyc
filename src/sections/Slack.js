import React from 'react';

export default function Slack() {
  return (
    <form
      className="slack-form"
      method="post"
      action="/.netlify/functions/request-slack-invite"
    >
      <h1>Enter your email to join Our Slack!</h1>
      <input placeholder="email" name="email" type="email" />
      <button type="submit">Submit</button>
    </form>
  );
}
