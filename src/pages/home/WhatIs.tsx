import * as React from "react";
import SideBySide from "../../components/SideBySide";
import statueOfLiberty from "../../assets/image-statue-of-liberty@2x.jpg";
import Section from "../../components/Section";
import TextGroup from "../../components/TextGroup";

export default () => {
  return (
    <Section>
      <SideBySide
        left={() => <img src={statueOfLiberty} />}
        right={() => (
          <TextGroup>
            <h2>What is useReactNYC?</h2>
            <p>
              Well… you are! useReact.NYC is about the React community right
              here in New York City. It's not about any one company or a core
              group of individuals. We were founded on the principle that
              everyone deserves to be treated with respect. We all deserve a
              safe, judgement free place to congregate—online, and in person.
            </p>
            <p>
              Please see our <a href="#code_of_conduct">code of conduct </a> for
              complete details.
            </p>
          </TextGroup>
        )}
      />
    </Section>
  );
};
