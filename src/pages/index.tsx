import * as React from "react";
import { withLayout, LayoutProps } from "../components/Layout";
import CallForProposals from "./home/CallForProposals";
import CodeOfC from "./home/CodeOfC";
import Header from "./home/Header";
import Organizers from "./home/Organizers";
import SocialRules from "./home/SocialRules";
import Resources from "./home/Resources";
import WhatIs from "./home/WhatIs";

const IndexPage = (props: LayoutProps) => (
  <div>
    <Header />
    <WhatIs />
    <CallForProposals />
    <CodeOfC />
    <Resources />
    <SocialRules />
    <Organizers />
  </div>
);

export default withLayout(IndexPage);
