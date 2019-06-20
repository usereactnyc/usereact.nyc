import * as React from "react";
import Divider from "../../components/Divider";
import Section from "../../components/Section";
import TextGroup from "../../components/TextGroup";

export default () => {
  return (
    <React.Fragment>
      <Section>
        <TextGroup>
          <h2 className="centered-text" id="code_of_conduct">
            Code of Conduct
          </h2>
          <p>
            useReactNYC is dedicated to providing a harassment-free meetup
            experience for everyone. We do not tolerate harassment of meetup
            participants in any form. Meetup participants violating these rules
            may be sanctioned or expelled from the meetup at the discretion of
            the meetup organizers.
          </p>
          <p>
            If this is a paid event they may be expelled without a refund at the
            discretion of the meetup organizers. Harassment includes offensive
            verbal comments related to gender, gender identity and expression,
            sexual orientation, disability, physical appearance, body size,
            race, religion, sexual images in public spaces, deliberate
            intimidation, stalking, following, harassing photography or
            recording, sustained disruption of talks or other events,
            inappropriate physical contact, and unwelcome sexual attention.
            Participants asked to stop any harassing behavior are expected to
            comply immediately.
          </p>
          <p>
            Exhibitors and speakers at any useReactNYC event are also subject to
            the anti-harassment policy. In particular, exhibitors/speakers
            should not use sexualized images, activities, or other material.
            Staff (including volunteers) should not use sexualized
            clothing/uniforms/costumes, or otherwise create a sexualized
            environment.
          </p>
          <p>
            If a participant engages in harassing behavior, the meetup
            organizers may take any action they deem appropriate, including
            warning the offender or expulsion from the event with no refund (if
            applicable). In the event of serious infractions of the code of
            conduct, useReactNYC staff may share incident details and offenders’
            names with third parties including but not limited to: venue staff,
            local law enforcement, and staff of other meetups/conferences. If
            you are being harassed, notice that someone else is being harassed,
            or have any other concerns, please contact a member of meetup staff
            immediately.
          </p>
          <p>
            useReactNYC reserves the right to prohibit videotaping or
            photography for any meetup participant. Meetup staff will be happy
            to help participants contact venue security or local law
            enforcement, provide escorts, or otherwise assist those experiencing
            harassment to feel safe for the duration of events. We value your
            attendance.
          </p>
          <p>
            We expect participants to follow these rules at all conference
            venues and conference-related social events.
          </p>
        </TextGroup>
      </Section>
      <Divider />
    </React.Fragment>
  );
};
