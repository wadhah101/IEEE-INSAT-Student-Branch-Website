import React from 'react';
import { graphql, PageProps } from 'gatsby';
import HomeBanner from '@/components/Pages/Home/HomeBanner';
import HomeMainDescription from '@/components/Pages/Home/MainDescription';

const HomePage: React.FC<PageProps<GatsbyTypes.Query>> = () => {
  return (
    <div>
      <HomeBanner />
      <div className="py-12 md:py-24 c-container">
        <HomeMainDescription />
      </div>
      <div className="h-screen" />
    </div>
  );
};

export const query = graphql`
  {
    allContentfulBlog {
      edges {
        node {
          id
          title
          featuredPicture {
            localFile {
              absolutePath
              childImageSharp {
                gatsbyImageData(
                  width: 200
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
          description {
            raw
          }
        }
      }
    }
  }
`;

export default HomePage;
