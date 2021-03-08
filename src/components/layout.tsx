import AppHeader from '@/components/App/Header';
import * as React from 'react';
import { Helmet } from 'react-helmet';

interface LayoutProps {
  uri: string;
  path: string;
  location: {
    pathname: string;
    search: string;
    hash: string;
  };
}

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  ...props
}) => {
  return (
    <div>
      <AppHeader />
      <main>
        <Helmet>
          <meta charSet="utf-8" />
          <title>INSAT Student Branch</title>
          <meta name="description" content="Nested component" />
          <html lang="en" />
          <link
            rel="icon"
            type="image/png"
            href="../../../assets/logos/sb/favicon.png"
          />
        </Helmet>

        {children}
      </main>
    </div>
  );
};

export default Layout;
