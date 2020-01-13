import * as React from "react";
import TextGroup from "../../components/TextGroup";

export default () => {
  return (
    <React.Fragment>
      <section className="minors-container" id="minors">
        <h2>A note for our younger attendees</h2>
        <TextGroup>
          <p>
            If you're under the age of 18, you're welcome at our events. However,
            we require that you have a chaperone 21 or older. If that person is
            not your parent/guardian, please have your parent/guardian email us
            at{" "}
            <a href="mailto:organizers@usereact.nyc">organizers@usereact.nyc</a>{" "}
            in advance with their name.
          </p>
        </TextGroup>
      </section>
    </React.Fragment>
  );
};
