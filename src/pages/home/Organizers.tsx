import * as React from "react";
import donavon2 from "../../assets/donavon@2x.png";
import harry2 from "../../assets/harry@2x.png";
import jenn2 from "../../assets/jenn@2x.png";
import matthew2 from "../../assets/matthew@2x.png";
import Section from "../../components/Section";
import TextGroup from "../../components/TextGroup";

export default () => {
  return (
    <Section id="organizers" className="organizers last-section">
      <TextGroup>
        <h2 className="centered-text">The Organizers</h2>
      </TextGroup>
      <ul className="organizers-ul">
        <li>
          <a
            href="https://twitter.com/donavon"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div>
              <img src={donavon2} />
              <p>Donavon West</p>
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/hswolff"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div>
              <img src={harry2} /> <p>Harry Wolff</p>
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/gurlcode"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div>
              <img src={jenn2} /> <p>Jenn Creighton</p>
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/MatthewGerstman"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div>
              <img src={matthew2} /> <p>Matthew Gerstman</p>
            </div>
          </a>
        </li>
      </ul>
    </Section>
  );
};
