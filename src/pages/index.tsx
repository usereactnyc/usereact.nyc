import * as React from "react";
import { withLayout, LayoutProps } from "../components/Layout";
import CodeOfC from "./home/CodeOfC";
import Header from "./home/Header";
import SocialRules from "./home/SocialRules";
import Resources from "./home/Resources";
import WhatIs from "./home/WhatIs";

const IndexPage = (props: LayoutProps) => (
  <div>
    <Header />
    <WhatIs />
    <CodeOfC />
    <Resources />
    <SocialRules />
  </div>
);

export default withLayout(IndexPage);
