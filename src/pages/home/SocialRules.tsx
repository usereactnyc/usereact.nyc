import * as React from "react";
import SideBySide from "../../components/SideBySide";
import imageOculus from "../../assets/image-oculus@2x.png";
import Section from "../../components/Section";
import TextGroup from "../../components/TextGroup";

export default () => {
  return (
    <Section>
      <SideBySide
        left={() => <img src={imageOculus} />}
        right={() => (
          <TextGroup>
            <h2>Social Rules</h2>
            <ul>
              <li>no well actually's</li>
              <li>no well actually's</li>
            </ul>
            <p>For full descripiptions please see .</p>
          </TextGroup>
        )}
      />
    </Section>
  );
};
