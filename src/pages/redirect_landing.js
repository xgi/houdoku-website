import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Layout from "@theme/Layout";
import styles from "./redirect_landing.module.css";

export default function Redirect_LandingPage() {
  return (
    <BrowserOnly>
      {() => {
        const urlParams = new URLSearchParams(window.location.search);

        return (
          <Layout title="Hello">
            <div className={styles.content}>
              <div className={styles.contentInner}>
                <p>
                  To finish authenticating, copy the below code into Houdoku.
                </p>
                <textarea
                  className={styles.codeArea}
                  value={urlParams.get("code")}
                  rows={5}
                  contentEditable={false}
                  onFocus={(e) => e.target.select()}
                  onMouseUp={(e) => e.preventDefault()}
                />
                <p className={styles.details}>
                  While you're here, you may also want to check out the{" "}
                  <a href="/docs/trackers">Tracker Docs</a>.
                </p>
                <p>
                  <i>
                    Note: this page is a temporary™ alternative to handling the
                    authorization redirect with a custom protocol. Sorry for the
                    inconvenience.
                  </i>
                </p>
              </div>
            </div>
          </Layout>
        );
      }}
    </BrowserOnly>
  );
}
