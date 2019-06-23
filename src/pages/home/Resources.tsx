import * as React from "react";
import SideBySide from "../../components/SideBySide";
import nycTaxiStreet from "../../assets/image-street@2x.jpg";
import Section from "../../components/Section";
import TextGroup from "../../components/TextGroup";

export default () => {
  return (
    <Section id="resources">
      <SideBySide
        reverseOnMobile={true}
        left={() => (
          <TextGroup>
            <h2>Resources</h2>
            <h3>CONTACT ORGANIZERS</h3>
            <p>
              Email:{" "}
              <a href="mailto:organizers@usereact.nyc">
                organizers@usereact.nyc
              </a>
            </p>
            <p>
              Phone: <a href="tel:914-297-8806">914-297-8806</a>
            </p>
            <h3>LOCAL RESOURCES</h3>
            <p>
              Local Law Enforcement: <a href="tel:911">emergency 911</a>
            </p>
            <p>
              Local Law Enforcement: <a href="tel:311">non-emergency 311</a>
            </p>
            <p>
              Local sexual assault hotline:{" "}
              <a href="tel:800-621-4673">800-621-4673</a> or dial{" "}
              <a href="tel:311">311</a>
            </p>
            <p>
              Local medical emergency: <a href="tel:911">911</a>
            </p>
            <p>
              Local medical: <a href="tel: 311">non-emergency 311</a>
            </p>
          </TextGroup>
        )}
        right={() => <img src={nycTaxiStreet} />}
      />
    </Section>
  );
};
