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
          <img
            alt={"Houdoku logo"}
            className={styles.heroLogo}
            src={useBaseUrl("/img/logo.svg")}
          />
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
                fill="#000000"
              >
                <g>
                  <rect fill="none" height="24" width="24" />
                </g>
                <g>
                  <path d="M5,20h14v-2H5V20z M19,9h-4V3H9v6H5l7,7L19,9z" />
                </g>
              </svg>
            </span>
            <span>Download</span>
          </Link>
          <Link className="button button--info" to="/docs">
            <span className={styles.inlineIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#000000"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
              </svg>
            </span>
            <span>View Docs</span>
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
