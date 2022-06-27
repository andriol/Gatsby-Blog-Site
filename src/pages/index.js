import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';
import * as styles from '../styles/home.module.css';
import Img from 'gatsby-image';

// markup
const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Andriol Jaupaj</h2>
          <h3>Full Stack Web Developer</h3>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  );
};
export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "me.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
