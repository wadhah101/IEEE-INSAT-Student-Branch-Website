import * as React from 'react';
import { Helmet } from 'react-helmet';

const BasePage: React.FunctionComponent<React.HTMLAttributes<any>> = ({
  children,
  ...props
}) => (
  <div {...props}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>INSAT Student Branch</title>
      <meta name="description" content="Nested component" />
      <html lang="en" />
    </Helmet>

    {children}
  </div>
);

export default BasePage;
