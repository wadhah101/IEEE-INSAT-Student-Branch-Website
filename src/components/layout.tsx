import AppHeader from '@/components/App/Header';
import * as React from 'react';
import { Helmet } from 'react-helmet';

const description = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus recusandae non nisi facilis explicabo sequi facere assumenda cumque nulla eveniet tempora expedita, inventore eum sint ipsam voluptatem ut odio fugit?`;

interface LayoutProps {
  uri: string;
  path: string;
  location: {
    pathname: string;
    search: string;
    hash: string;
  };
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div>
      <AppHeader />
      <main>
        <Helmet>
          <meta charSet="utf-8" />
          <title>INSAT Student Branch</title>
          <meta name="description" content={description} />
          <html lang="en" />
        </Helmet>
        {children}
      </main>
    </div>
  );
};

export default Layout;
