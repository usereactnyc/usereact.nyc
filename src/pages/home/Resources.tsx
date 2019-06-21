import * as React from "react";
import SideBySide from "../../components/SideBySide";
import nycTaxiStreet from "../../assets/image-street@2x.jpg";
import Section from "../../components/Section";
import TextGroup from "../../components/TextGroup";

export default () => {
  return (
    <Section>
      <div className="resources-container-desktop">
        <SideBySide
          left={() => (
            <TextGroup>
              <h2>Resources</h2>
              <h3>CONTACT ORGANIZERS</h3>
              <p>
                Email :{" "}
                <a href="mailto:organizers@usereact.nyc">
                  organizers@usereact.nyc
                </a>
              </p>
              <p>
                Phone : <span className="span-text-link">914-297-8806</span>
              </p>
              <h3>LOCAL RESOURCES</h3>
              <p>
                Local Law Enforcement :{" "}
                <span className="span-text-link">emergency 911</span>
              </p>
              <p>
                Local Law Enforcement :{" "}
                <span className="span-text-link">non-emergency 311</span>
              </p>
              <p>
                Local sexual assault hotline :{" "}
                <span className="span-text-link">800-621-HOPE(4673)</span> or
                dial <span className="span-text-link">311</span>
              </p>
              <p>
                Local medical :{" "}
                <span className="span-text-link">emergency 911</span>
              </p>
              <p>
                Local medical :{" "}
                <span className="span-text-link">non-emergency 311</span>
              </p>
            </TextGroup>
          )}
          right={() => <img src={nycTaxiStreet} />}
        />
      </div>
      <div className="resources-container-mobile">
        <SideBySide
          right={() => (
            <TextGroup>
              <h2>Resources</h2>
              <h3>CONTACT ORGANIZERS</h3>
              <p>
                Email :{" "}
                <a href="mailto:organizers@usereact.nyc">
                  organizers@usereact.nyc
                </a>
              </p>
              <p>
                Phone : <span className="span-text-link">914-297-8806</span>
              </p>
              <h3>LOCAL RESOURCES</h3>
              <p>
                Local Law Enforcement:{" "}
                <span className="span-text-link">emergency 911</span>
              </p>
              <p>
                Local Law Enforcement:{" "}
                <span className="span-text-link">non-emergency 311</span>
              </p>
              <p>
                Local sexual assault hotline:{" "}
                <span className="span-text-link">800-621-HOPE(4673)</span> or
                dial <span className="span-text-link">311</span>
              </p>
              <p>
                Local medical:{" "}
                <span className="span-text-link">emergency 911</span>
              </p>
              <p>
                Local medical:{" "}
                <span className="span-text-link">non-emergency 311</span>
              </p>
            </TextGroup>
          )}
          left={() => <img src={nycTaxiStreet} />}
        />
      </div>
    </Section>
  );
};
