import React from 'react';
import CFP from './CFP';

const About = () => (
  <>
    <h2>What is useReact.NYC?</h2>
    <p>
      Well… you are! useReact.NYC is about the React community right here in New
      York City. It's not about any one company or a core group of individuals.
      We were founded on the principle that everyone deserves to be treated with
      respect. We all deserve a safe, judgement free place to congregate—online,
      and in person.
    </p>
    <p>
      Please see our <a href="#coc">Code of Conduct</a> for complete details.
    </p>

    <h3>You can find us here</h3>
    <ul>
      <li>
        Follow us on Twitter{' '}
        <a href="https://twitter.com/useReactNYC">@useReactNYC</a>
      </li>
      <li>
        Join us on <a href="https://www.meetup.com/useReactNYC/">Meetup.com</a>
      </li>
    </ul>
    <CFP />
  </>
);

export default About;
