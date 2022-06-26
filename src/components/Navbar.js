import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import * as styles from '../styles/navbar.module.css';

export default function Navbar() {
  const data = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            description
            title
          }
        }
      }
    `
  );
  console.log(data.site.siteMetadata.title);
  const { title } = data.site.siteMetadata;

  return (
    <nav>
      <h1>{title}</h1>
      <div className={styles.links}>
        <Link to='/' activeClassName={styles.active}>
          Home
        </Link>
        <Link to='/blogs' activeClassName={styles.active}>
          Blogs
        </Link>
        <Link to='/about' activeClassName={styles.active}>
          About
        </Link>
        <Link to='/contact' activeClassName={styles.active}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
