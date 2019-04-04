import React from 'react';
import Person from '../components/Person';

const founders = [
  {
    name: 'Donavon West',
    twitter: 'donavon',
    imageUrl:
      'https://pbs.twimg.com/profile_images/1040248648033083392/vw9pa7pf_400x400.jpg',
  },
  {
    name: 'Matthew Gerstman',
    twitter: 'MatthewGerstman',
    imageUrl:
      'https://pbs.twimg.com/profile_images/1089974601994493952/KnSqLrVE_400x400.jpg',
  },
  {
    name: 'Jenn Creighton',
    twitter: 'gurlcode',
    imageUrl:
      'https://pbs.twimg.com/profile_images/551829293534154752/Y_YsnG3G_400x400.jpeg',
  },
  {
    name: 'Harry Wolff',
    twitter: 'hswolff',
    imageUrl:
      'https://pbs.twimg.com/profile_images/802683824840839168/0QIZhM09_400x400.jpg',
  },
];

const Founders = () => (
  <div>
    <h2>No really. Who are the organizers?</h2>
    <ul>{founders.map(Person)}</ul>
  </div>
);

export default Founders;
