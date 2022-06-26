import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import * as styles from '../styles/layout.module.css';
export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
}
