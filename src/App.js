import React from 'react';
import Section from './components/Section';
import ExplodingAtoms from './components/ExplodingAtoms';
import Welcome from './sections/Welcome';
import About from './sections/About';
import CodeOfConduct from './sections/CodeOfConduct';
import Founders from './sections/Founders';
import SocialRules from './sections/SocialRules';
import CFP from './sections/CFP';
import './App.scss';

const sections = [
  [Welcome, 'welcome'],
  [About, 'about'],
  [CFP, 'cfp'],
  [CodeOfConduct, 'coc'],
  [SocialRules, 'social-rules'],
  [Founders, 'founders'],
];

const App = () => (
  <>
    <ExplodingAtoms />
    <div className="fixed">
      <div className="app">
        {sections.map(([Component, hash], i) => (
          <Section section={hash} nextSection={(sections[i + 1] || [])[1]}>
            <Component />
          </Section>
        ))}
      </div>
    </div>
  </>
);

export default App;
