import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Img from 'gatsby-image';
import * as style from '../styles/blog-details.module.css';

export default function BlogDetails({ data }) {
  const blogDetails = data.markdownRemark.frontmatter;
  const html = data.markdownRemark.html;
  const { title } = blogDetails;
  return (
    <Layout>
      <Img
        className={style.image}
        fluid={blogDetails.thumb.childImageSharp.fluid}
      />
      <div className={style.textContent}>
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </Layout>
  );
}
export const query = graphql`
  query MyBlogDetailsQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date
        read
        slug
        title
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`;
