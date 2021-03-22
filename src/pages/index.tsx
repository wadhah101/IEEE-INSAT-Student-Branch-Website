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

// hardcoded order
// TODO add this to model
const eventsSlugs = [
  `spax`,
  `pes-general-meeting`,
  `ias-annual-meeting`,
  `tunisia-entrepreneurship-summit`,
  `star-program`,
  `summer-school`,
];

const HomePage: React.FC<PageProps<GatsbyTypes.Query>> = ({ data }) => {
  const a = eventsSlugs
    .map((e) =>
      data.allContentfulActivity.edges
        .map((e1) => e1.node)
        .find((e1) => e1.slug === e),
    )
    .map((e, ind) => ({ ...e, area: String.fromCharCode(97 + ind) }));

  const chapters = data.allContentfulChapter.edges.map((e) => e.node);

  const testa = data.allContentfulTestamonial.edges.map((e) => e.node);
  return (
    <div>
      <HomeBanner />
      <div className="py-12 md:py-24 c-container">
        <div className="mx-auto md:w-3/4 ">
          <MainDescriptionWriting />
          <div className="mt-10 md:mt-14">
            <MainDescriptionStatistics />
          </div>
        </div>
        <div className="mt-10 md:mt-16">
          <HomeDescriptionVideo videoHref="" />
        </div>
      </div>
      <ChapterGrid chapters={chapters} />

      <div className="py-10 c-container md:py-24 ">
        <HomeActivities data={a} />
        <div className="mt-20">
          <HomeTestamonials data={[...testa, ...testa, ...testa]} />
        </div>
      </div>
      {/* awards  */}
      {/* contact us */}
      <div style={{ width: `30vh` }} />
    </div>
  );
};

export const query = graphql`
  query MyQuery {
    allContentfulTestamonial {
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

    allContentfulActivity(filter: { inHomePage: { eq: true } }) {
      edges {
        node {
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
    }

    allFile(filter: { sourceInstanceName: { eq: "placeholders" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              width: 1200
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
    allContentfulChapter {
      edges {
        node {
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
  }
`;

export default HomePage;
