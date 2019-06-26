import * as React from "react";
import SideBySide from "../../components/SideBySide";
import imageOculus from "../../assets/image-oculus@2x.png";
import Section from "../../components/Section";
import TextGroup from "../../components/TextGroup";

export default () => {
  return (
    <Section id="social-rules" className="collapse-top">
      <SideBySide
        left={() => <img src={imageOculus} alt="The Oculus Downtown" />}
        right={() => (
          <TextGroup>
            <h2>Social Rules</h2>
            <p>
              We would also like to borrow the Social Rules from the{" "}
              <a
                href="https://www.recurse.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Recurse Center:
              </a>
            </p>
            <ul className="social-rules-ul">
              <li>No well actually's</li>
              <li>No feigned surprise</li>
              <li>No backseat driving</li>
              <li>No subtle-isms</li>
            </ul>
            <p>
              For a full description of each social rule, please see RC’s{" "}
              <a
                href="https://www.recurse.com/manual#sub-sec-social-rules"
                rel="noopener noreferrer"
                target="_blank"
              >
                Social Rules page
              </a>
              .
            </p>
            <p>
              Like RC, these rules are not a hard contract. They are designed to
              encourage a fun, welcoming, meetup where everyone can enjoy
              themselves.
            </p>
          </TextGroup>
        )}
      />
    </Section>
  );
};
