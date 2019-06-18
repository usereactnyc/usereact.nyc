import * as React from "react";
import SideBySide from "../../components/SideBySide";
import nycTaxiStreet from "../../assets/image-street@2x.jpg";
import Section from "../../components/Section";
import TextGroup from "../../components/TextGroup";

export default () => {
  return (
    <Section>
      <SideBySide
        left={() => (
          <TextGroup>
            <h2>Resources</h2>
            <h4>CONTACT ORGANIZERS</h4>
            <p>Email : </p>
            <p>Phone : </p>
            <h4>LOCAL RESOURCES</h4>
            <p>Local Law Enforcement: EMERGENCY 911</p>
          </TextGroup>
        )}
        right={() => <img src={nycTaxiStreet} />}
      />
    </Section>
  );
};
