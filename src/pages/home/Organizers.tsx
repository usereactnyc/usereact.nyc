import * as React from "react";
import donovan2 from "../../assets/donovan@2x.png";
import harry2 from "../../assets/harry@2x.png";
import jenn2 from "../../assets/jenn@2x.png";
import matthew2 from "../../assets/matthew@2x.png";
import Section from "../../components/Section";
import TextGroup from "../../components/TextGroup";

export default () => {
  return (
    <Section>
      <TextGroup>
        <h2>The Organizers</h2>
      </TextGroup>
      <ul className="organizers-ul">
        <li>
          <img src={donovan2} /> <p>Donovan</p>
        </li>
        <li>
          <img src={harry2} /> <p>Harry</p>
        </li>
        <li>
          <img src={jenn2} /> <p>Jennifer</p>
        </li>
        <li>
          <img src={matthew2} /> <p>Matthew</p>
        </li>
      </ul>
    </Section>
  );
};
