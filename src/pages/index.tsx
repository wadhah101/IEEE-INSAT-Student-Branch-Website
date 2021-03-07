import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import BasePage from '@/templates/shared/BasePage';

const Home: React.FC<PageProps<GatsbyTypes.Query>> = ({ data }) => {
  const blogs = data.allContentfulBlog.edges.map((e) => e.node);
  return (
    <BasePage>
      <p>A TypeScript starter for Gatsby. Great for advanced users.</p>
      <div>
        {blogs.map((e) => (
          <GatsbyImage
            id={e.id}
            image={getImage(e.featuredPicture.localFile as any)}
            alt={e.title}
          />
        ))}
      </div>
    </BasePage>
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

export default Home;
