import * as React from "react";
import { withLayout, LayoutProps } from "../components/Layout";
import CodeOfC from "./home/CodeOfC";
import Header from "./home/Header";
import WhatIs from "./home/WhatIs";

const IndexPage = (props: LayoutProps) => (
  <div>
    <Header />
    <WhatIs />
    <CodeOfC />
  </div>
);

export default withLayout(IndexPage);
