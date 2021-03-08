import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '@/templates/shared/Layout';
import HomeBanner from '@/components/Pages/Home/HomeBanner';

const HomePage: React.FC<PageProps<GatsbyTypes.Query>> = () => {
  return (
    <Layout>
      <HomeBanner />
      <div className="px-10 py-10">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea asperiores
        quibusdam qui, accusantium voluptates recusandae doloribus culpa aperiam
        magnam esse, repellat totam dicta ducimus quod doloremque eius beatae
        hic itaque, enim in. Minima quas unde molestias optio dignissimos
        temporibus nisi error pariatur cumque, dolore maiores eos sed animi fuga
        accusamus a corporis deleniti, distinctio ut illum beatae cupiditate
        atque debitis. Quaerat corporis quod facere minima accusamus iste
        asperiores sed animi alias aperiam ipsa nihil enim in excepturi est
        dolorum voluptas, explicabo, ipsum consequatur assumenda! Quidem nostrum
        aut quisquam ducimus temporibus, amet unde commodi itaque qui
        perferendis omnis, dolores animi similique cupiditate, labore aliquam
        optio quam impedit. Aut accusamus maiores perferendis, similique
        praesentium officia eius. Repudiandae fuga placeat pariatur quibusdam,
        dolor eius quas dolorem nesciunt perferendis ipsa nihil voluptatem
        impedit, cupiditate veritatis soluta! Quos et eligendi deserunt sapiente
        illum aliquid expedita sed quo accusamus molestias obcaecati maxime
        cupiditate ullam in adipisci nam, quam quas incidunt? Nemo enim eius,
        doloremque ad soluta commodi qui dicta quos magni, laboriosam, vero aut
        voluptas numquam quaerat quas dignissimos aliquid ipsum magnam illum
        nostrum ea accusamus molestias animi perferendis? Asperiores, suscipit
        non totam commodi repellendus, quo aperiam dolore deleniti quas
        provident itaque hic nesciunt. Veritatis, possimus!
      </div>
    </Layout>
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
