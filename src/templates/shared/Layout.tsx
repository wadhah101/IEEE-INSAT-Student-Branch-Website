import AppHeader from '@/components/App/Header';
import * as React from 'react';
import { Helmet } from 'react-helmet';

const Layout: React.FunctionComponent<React.HTMLAttributes<any>> = ({
  children,
  ...props
}) => (
  <div>
    <AppHeader />
    <main {...props}>
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

export default Layout;
