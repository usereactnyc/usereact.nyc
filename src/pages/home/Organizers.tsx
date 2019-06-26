import * as React from "react";
import { once, shuffle } from "lodash";
import donavon from "../../assets/donavon@2x.png";
import harry from "../../assets/harry@2x.png";
import jenn from "../../assets/jenn@2x.png";
import matthew from "../../assets/matthew@2x.png";
import Section from "../../components/Section";
import TextGroup from "../../components/TextGroup";

type Organizer = {
  twitter: string;
  image: string;
  name: string;
};
const Organizers: Organizer[] = [
  {
    image: donavon,
    name: "Donavon West",
    twitter: "donavon"
  },
  {
    image: harry,
    name: "Harry Wolff",
    twitter: "hswolff"
  },
  {
    image: jenn,
    name: "Jenn Creighton",
    twitter: "gurlcode"
  },
  {
    image: matthew,
    name: "Matthew Gerstman",
    twitter: "MatthewGerstman"
  }
];

const getOrganizers = once(() => {
  return shuffle(Organizers);
});

function useOrganizers() {
  const [organizers] = React.useState(getOrganizers());
  return organizers;
}

export default () => {
  const organizers = useOrganizers();
  return (
    <Section id="organizers" className="organizers last-section">
      <TextGroup>
        <h2 className="centered-text">The Organizers</h2>
      </TextGroup>
      <ul className="organizers-ul">
        {organizers.map((organizer) => (
          <Organizer {...organizer} key={organizer.image} />
        ))}
      </ul>
    </Section>
  );
};

function Organizer({ name, image, twitter }: Organizer) {
  return (
    <li>
      <a
        href={`https://twitter.com/${twitter}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div>
          <img src={image} alt={`Photo of ${name}`} />
          <p>{name}</p>
        </div>
      </a>
    </li>
  );
}
