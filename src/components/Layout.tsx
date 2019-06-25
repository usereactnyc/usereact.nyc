import * as React from "react";
import Footer from "./Footer";
import "../css/responsive.css";
import "../css/styles.css";

export interface LayoutProps {
  location: {
    pathname: string;
  };
  children: any;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      {/* Render children pages */}
      <div className="primary-container">{props.children}</div>

      <Footer />
    </>
  );
};

export default Layout;

export const withLayout = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) =>
  class WithLayout extends React.Component<P & LayoutProps> {
    render() {
      return (
        <Layout location={this.props.location}>
          <WrappedComponent {...this.props} />
        </Layout>
      );
    }
  };
