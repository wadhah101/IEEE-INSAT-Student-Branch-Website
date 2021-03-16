import React from 'react';
import { graphql, PageProps } from 'gatsby';
import HomeBanner from '@/components/Pages/Home/HomeBanner';
import HomeMainDescription from '@/components/Pages/Home/MainDescription';
import ChapterGrid from '@/components/Pages/Home/ChapterGrid';

const HomePage: React.FC<PageProps<GatsbyTypes.Query>> = ({ data }) => {
  const chapters = data.allContentfulChapter.edges.map((e) => e.node);
  return (
    <div>
      <HomeBanner />
      <div className="py-12 md:py-24 c-container">
        <HomeMainDescription />
      </div>
      <ChapterGrid chapters={chapters} />
      {/* TODO add 3 activities showcase full page width with description */}
      <div className="h-screen" />
    </div>
  );
};

export const query = graphql`
  query MyQuery {
    # allContentfulActivity {
    #   edges {
    #     node {
    #       id
    #       pictures {
    #         id
    #         localFile {
    #           childImageSharp {
    #             gatsbyImageData(
    #               width: 800
    #               placeholder: BLURRED
    #               formats: [AUTO, WEBP]
    #             )
    #           }
    #         }
    #       }
    #     }
    #   }
    # }
    allContentfulChapter {
      edges {
        node {
          title
          id
          linkedin
          site
          logos {
            id
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 800
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
          description {
            id
            description
          }
          acronym
          facebook
        }
      }
    }
  }
`;

export default HomePage;
