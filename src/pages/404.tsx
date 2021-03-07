import React from 'react';
import { PageProps } from 'gatsby';
import BasePage from '@/templates/shared/BasePage';

const NotFoundPage: React.FC<PageProps> = () => (
  <BasePage>
    <p>Sorry, page not found!</p>
  </BasePage>
);

export default NotFoundPage;
