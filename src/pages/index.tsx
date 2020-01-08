import * as React from "react";
import { withLayout, LayoutProps } from "../components/Layout";
import CallForProposals from "./home/CallForProposals";
import CodeOfConduct from "./home/CodeOfConduct";
import Header from "./home/Header";
import Organizers from "./home/Organizers";
import SocialRules from "./home/SocialRules";
import Resources from "./home/Resources";
import WhatIs from "./home/WhatIs";
import Slack from "./home/Slack";
import Minors from "./home/Minors";
import SEO from "../components/SEO";

const IndexPage = (props: LayoutProps) => (
  <>
    <SEO />
    <Header />
    <WhatIs />
    <CallForProposals />
    <CodeOfConduct />
    <Slack />
    <Resources />
    <Minors />
    <SocialRules />
    <Organizers />
  </>
);

export default withLayout(IndexPage);
