import * as React from 'react';
import { Helmet } from 'react-helmet';

const BasePage: React.FunctionComponent<React.HTMLAttributes<any>> = ({
  children,
  ...props
}) => (
  <main {...props}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>INSAT Student Branch</title>
      <meta name="description" content="Nested component" />
      <html lang="en" />
    </Helmet>

    {children}
  </main>
);

export default BasePage;
