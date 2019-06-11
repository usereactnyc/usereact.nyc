import * as React from "react";
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
      <div style={{ paddingBottom: 60 }}>{props.children}</div>

      {/* Footer */}
      <footer />
    </>
  );
};

export default Layout;

export const withLayout = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
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
