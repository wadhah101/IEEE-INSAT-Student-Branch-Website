/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { graphql, PageProps } from 'gatsby';
import HomeBanner from '@/components/Pages/Home/HomeBanner';
import ChapterGrid from '@/components/Pages/Home/ChapterGrid';
import HomeDescriptionVideo from '@/components/Pages/Home/MainDescription/HomeDescriptionVideo';
import MainDescriptionStatistics from '@/components/Pages/Home/MainDescription/MainDescriptionStatistics';
import MainDescriptionWriting from '@/components/Pages/Home/MainDescription/MainDescriptionWriting';
import HomeActivities from '@/components/Pages/Home/HomeActivities/HomeActivities';
import HomeTestamonials from '@/components/Pages/Home/HomeTestamonials/HomeTestamonials';
import Homeblogs from '@/components/Pages/Home/HomeBlogs/Homeblogs';

const HomePage: React.FC<PageProps<GatsbyTypes.Query>> = ({ data }) => {
  const a = data.contentfulHomeActivity.data.map((e, ind) => ({
    ...e,
    area: String.fromCharCode(97 + ind),
  }));

  const chapters = data.contentfulHomeChapters.data.map((e) => e);

  const testa = data.allContentfulTestamonial.edges.map((e) => e.node);
  return (
    <div>
      <HomeBanner />
      <div className="py-12 c-container md:py-24 ">
        <div className="mx-auto md:mb-16 md:w-3/4 ">
          <MainDescriptionWriting />
        </div>
        <div className="mx-auto mb-16 ">
          <MainDescriptionStatistics />
        </div>

        <div className="">
          <HomeDescriptionVideo videoHref="" />
        </div>
      </div>

      <ChapterGrid chapters={chapters} />

      <div className="py-10 c-container md:py-24 ">
        <HomeActivities data={a} />
        <div className="mt-10 md:mt-16 ">
          <HomeTestamonials data={testa} />
        </div>
      </div>
      {/* awards  */}

      <div className="py-24 bg-sb-gray-100 ">
        <div className="c-container">
          <Homeblogs blogs={[]} />
        </div>
      </div>

      {/* check our blog */}
      {/* contact us */}
      <div style={{ width: `30vh` }} />
    </div>
  );
};

export const query = graphql`
  query MyQuery {
    allContentfulTestamonial(sort: { order: ASC, fields: order }) {
      edges {
        node {
          id
          owner
          description {
            description
          }
          ownerPosition
          ownerImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  height: 100
                  width: 100
                  placeholder: DOMINANT_COLOR
                  formats: [WEBP, AUTO]
                )
              }
            }
          }
        }
      }
    }

    contentfulHomeActivity(slug: { eq: "main" }) {
      id
      data {
        id
        tags
        title
        slug
        featuredPicture {
          localFile {
            childImageSharp {
              gatsbyImageData(
                height: 1000
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP]
                webpOptions: { quality: 95 }
              )
            }
          }
        }
      }
    }
    # allFile(filter: { sourceInstanceName: { eq: "placeholders" } }) {
    #   edges {
    #     node {
    #       childImageSharp {
    #         gatsbyImageData(
    #           width: 1200
    #           placeholder: DOMINANT_COLOR
    #           formats: [AUTO, WEBP]
    #         )
    #       }
    #     }
    #   }
    # }
    contentfulHomeChapters(slug: { eq: "main" }) {
      id
      data {
        id
        title
        id
        linkedin
        site
        accent
        nature
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
`;

export default HomePage;
