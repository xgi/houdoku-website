import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroProjectTagline}>
          <img alt={"Houdoku logo"} className={styles.heroLogo} src={useBaseUrl("/img/logo.svg")} />
          <span className={styles.heroTitleTextHtml}>
            Houdoku is a <b>free</b> and open source <b>manga reader</b>.
          </span>
        </h1>
        <div className={styles.indexCtas}>
          <Link className="button button--primary" to="/download">
            <span className={styles.inlineIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                <polyline points="7 11 12 16 17 11" />
                <line x1="12" y1="4" x2="12" y2="16" />
              </svg>
            </span>
            <span>Download</span>
          </Link>
          <Link className="button button--info" to="/docs" style={{backgroundColor: ''}}>
            <span className={styles.inlineIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <line x1="3" y1="6" x2="3" y2="19" />
                <line x1="12" y1="6" x2="12" y2="19" />
                <line x1="21" y1="6" x2="21" y2="19" />
              </svg>
            </span>
            <span>Documentation</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout description="Houdoku is a free and open source manga reader for the desktop">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
