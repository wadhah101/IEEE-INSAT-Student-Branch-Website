import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '@/templates/shared/Layout';

const NotFoundPage: React.FC<PageProps> = () => (
  <Layout>
    <p>Sorry, page not found!</p>
  </Layout>
);

export default NotFoundPage;
