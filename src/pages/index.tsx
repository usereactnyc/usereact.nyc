import * as React from "react";
import { withLayout, LayoutProps } from "../components/Layout";
import CallForProposals from "./home/CallForProposals";
import CodeOfC from "./home/CodeOfC";
import Header from "./home/Header";
import Organizers from "./home/Organizers";
import SocialRules from "./home/SocialRules";
import Resources from "./home/Resources";
import WhatIs from "./home/WhatIs";
import Slack from "./home/Slack";
import SEO from "../components/SEO";

const IndexPage = (props: LayoutProps) => (
  <div>
    <SEO />
    <Header />
    <WhatIs />
    <CallForProposals />
    <CodeOfC />
    <Slack />
    <Resources />
    <SocialRules />
    <Organizers />
  </div>
);

export default withLayout(IndexPage);
