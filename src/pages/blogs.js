import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import * as style from '../styles/blog.module.css';
import Img from 'gatsby-image';

export default function Blogs({ data }) {
  const blogs = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      {blogs.map((blog) => {
        const { title, date, read, slug } = blog.frontmatter;
        const maxLength = 200;
        const html = blog.html.substring(0, maxLength) + '...';

        return (
          <Link
            to={`/blogs/${slug}`}
            className={style.containerBox}
            key={blog.id}
          >
            <div className={style.imageContainer}>
              <Img
                className={style.image}
                fluid={blog.frontmatter.thumb.childImageSharp.fluid}
              />
            </div>
            <div className={style.containerText}>
              <h2>{title}</h2>
              <h3>
                {date} • {read}
              </h3>
              <div dangerouslySetInnerHTML={{ __html: html }}></div>
            </div>
          </Link>
        );
      })}
    </Layout>
  );
}
export const query = graphql`
  query MyBlogQuery {
    allMarkdownRemark {
      nodes {
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
        id
        html
      }
    }
  }
`;
