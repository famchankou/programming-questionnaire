import React from 'react';
import Header from 'components/common/Header';
import styles from './style.module.css';

const PageTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.main}>{children}</div>
    </>
  );
};

export default PageTemplate;
