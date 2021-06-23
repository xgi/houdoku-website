import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroProjectTagline}>
          <img
            alt={'Houdoku logo'}
            className={styles.heroLogo}
            src={useBaseUrl('/img/logo.svg')}
          />
          <span
            className={styles.heroTitleTextHtml}

          >Houdoku is a <b>free</b> and open source <b>manga reader</b>.</span>
        </h1>
        <div className={styles.indexCtas}>
          <Link className="button button--primary" to="/download">
            <span>Download</span>
          </Link>
          <Link
            className="button button--info"
            to="/docs/intro">
            <span>View Docs</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Houdoku is a free and open source manga reader for the desktop">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
