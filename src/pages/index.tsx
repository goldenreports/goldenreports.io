import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">
            <img src="img/dog.png" alt="dog" width="200px" />
            <p className={clsx(styles.titleText)}>{siteConfig.title}</p>
          </h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
                className={`button button--secondary button--lg ${styles.button}`}
                to="/docs/getting-started">
              Get Started
            </Link>
            <Link
                className={`button button--secondary button--lg ${styles.button}`}
                to="https://demo.goldenreports.io">
              Demo
            </Link>
          </div>
        </div>
      </header>
  );
}

export default function Home(): JSX.Element {
  // const { siteConfig } = useDocusaurusContext();
  return (
      <Layout
          description="Modern open source reporting tool">
        <HomepageHeader/>
        <main>
          <HomepageFeatures/>
        </main>
      </Layout>
  );
}
