import React from 'react';
import Section from './components/Section';
import ExplodingAtoms from './components/ExplodingAtoms';
import Welcome from './sections/Welcome';
import About from './sections/About';
import CodeOfConduct from './sections/CodeOfConduct';
import Founders from './sections/Founders';
import SocialRules from './sections/SocialRules';
import Slack from './sections/Slack';

import './App.scss';

const sections = [
  [Welcome, 'welcome'],
  [About, 'about'],
  [Slack, 'slack'],
  [CodeOfConduct, 'coc'],
  [SocialRules, 'social-rules'],
  [Founders, 'founders'],
];
const App = () => (
  <>
    <ExplodingAtoms />
    <div className="app">
      {sections.map(([Component, hash], i) => (
        <Section
          key={hash}
          section={hash}
          nextSection={(sections[i + 1] || [])[1]}
        >
          <Component />
        </Section>
      ))}
    </div>
  </>
);

export default App;
