import React from 'react';
import styles from '@/styles/Services/WhatIsWebDevelopment.module.css';

const WhatIsContentWriting: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageWrapper}>
            <img
              src="https://img.freepik.com/premium-vector/content-writer-journalist-background-vector-illustration-copy-writing-research-development-idea-novel-book-script-flat-style_2175-1045.jpg?semt=ais_hybrid&w=740"
              alt="Content Writing Illustration"
              className={styles.image}
            />
          </div>
          <div className={styles.textWrapper}>
            <h2 className={styles.heading}>What is Content Writing?</h2>
            <p className={styles.text}>
              Content writing is the process of planning, writing, and editing web content for digital platforms. It includes crafting engaging{' '}
              <span className={styles.highlight}>blog posts</span>, informative{' '}
              <span className={styles.highlight}>articles</span>, persuasive{' '}
              <span className={styles.highlight}>landing pages</span>, and compelling{' '}
              <span className={styles.highlight}>social media captions</span>. Effective content writing combines a deep understanding of{' '}
              <span className={styles.highlight}>SEO</span>, audience intent, and brand voice to communicate messages that resonate and convert. It&apos;s the perfect harmony of creativity and strategy that helps brands connect, inform, and inspire across platforms like{' '}
              <span className={styles.highlight}>Google</span>, <span className={styles.highlight}>LinkedIn</span>, and more.
            </p>

            <div className={styles.icons}>
              <div className={styles.icon}>
                <i className="ri-chrome-fill ri-2x text-gray-600"></i>
              </div>
              <div className={styles.icon}>
                <i className="ri-firefox-fill ri-2x text-gray-600"></i>
              </div>
              <div className={styles.icon}>
                <i className="ri-edge-fill ri-2x text-gray-600"></i>
              </div>
              <div className={styles.icon}>
                <i className="ri-safari-fill ri-2x text-gray-600"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsContentWriting;