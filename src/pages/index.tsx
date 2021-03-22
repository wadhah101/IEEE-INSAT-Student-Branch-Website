import React from 'react';
import { graphql, PageProps } from 'gatsby';
import HomeBanner from '@/components/Pages/Home/HomeBanner';
import ChapterGrid from '@/components/Pages/Home/ChapterGrid';
import HomeDescriptionVideo from '@/components/Pages/Home/MainDescription/HomeDescriptionVideo';
import MainDescriptionStatistics from '@/components/Pages/Home/MainDescription/MainDescriptionStatistics';
import MainDescriptionWriting from '@/components/Pages/Home/MainDescription/MainDescriptionWriting';
import HomeActivities, {
  Meh,
} from '@/components/Pages/Home/HomeActivities/HomeActivities';
import faker from 'faker';
import HomeTestamonials from '@/components/Pages/Home/HomeTestamonials/HomeTestamonials';

const HomePage: React.FC<PageProps<GatsbyTypes.Query>> = ({ data }) => {
  const placeholders = data.allFile.edges;

  const activitiesData: Meh[] = new Array(6).fill(null).map((_, ind) => ({
    title: `${faker.name.firstName()} ${faker.name.lastName()}`,
    tags: [faker.music.genre(), faker.music.genre()],
    file: placeholders[ind],
    area: String.fromCharCode(97 + ind),
  }));

  const chapters = data.allContentfulChapter.edges.map((e) => e.node);
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
      {/* activities */}
      {/* awards  */}
      {/* temoiagnage */}
      {/* contact us */}
      <div className="py-10 c-container md:py-24 ">
        <HomeActivities data={activitiesData} />
        <div className="mt-16">
          <HomeTestamonials />
        </div>
      </div>

      <div className="h-screen" />
    </div>
  );
};

export const query = graphql`
  query MyQuery {
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
