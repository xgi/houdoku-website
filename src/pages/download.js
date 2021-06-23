import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import CodeBlock from "@theme/CodeBlock";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./download.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import marked from "marked";
import constants from "../constants.json";

export default function DownloadPage() {
  const [latestRelease, setLatestRelease] = useState();

  useEffect(() => {
    fetch(constants.GITHUB_RELEASES_API_URL)
      .then((response) => response.json())
      .then((data) => setLatestRelease(data));
  }, []);

  const getDaysSince = (date) => {
    return Math.round(
      (new Date().getTime() - date.getTime()) / (1000 * 3600 * 24)
    );
  };

  const renderDownloadContent = () => {
    if (latestRelease === undefined)
      return (
        <>
          <p>Loading latest release from GitHub...</p>
          <p>
            If this message doesn't disappear, you can manually download from
            the{" "}
            <a href="https://github.com/xgi/houdoku/releases" target="_blank">
              GitHub releases page
            </a>
            .
          </p>
        </>
      );

    const releaseDate = new Date(latestRelease.published_at);

    const assets = {
      windows: latestRelease.assets.find((asset) =>
        asset.name.endsWith(".exe")
      ),
      mac: latestRelease.assets.find((asset) => asset.name.endsWith(".dmg")),
      linux: latestRelease.assets.find((asset) =>
        asset.name.endsWith(".AppImage")
      ),
    };

    console.log(assets);

    return (
      <>
        <p>
          The latest release is version{" "}
          <b>{latestRelease.tag_name.replace("v", "")}</b>, which was released
          on {releaseDate.toLocaleDateString()} ({getDaysSince(releaseDate)}{" "}
          days ago).
        </p>
        <h3>{latestRelease.tag_name} Release Notes</h3>
        <div className={styles.releaseNotesContainer}>
          <span
            dangerouslySetInnerHTML={{
              __html: marked(latestRelease.body),
            }}
          />
        </div>
        <h3>Download</h3>
        <table>
          <tr>
            <th>Platform</th>
            <th>Download</th>
            <th>Created</th>
          </tr>
          <tr>
            <td>Windows</td>
            <td>
              <button
                className="button button--info"
                onClick={() =>
                  (location.href = assets.windows.browser_download_url)
                }
              >
                <span>{assets.windows.name}</span>
              </button>
            </td>
            <td>{assets.windows.created_at}</td>
          </tr>
          <tr>
            <td>macOS</td>
            <td>
              <button
                className="button button--info"
                onClick={() =>
                  (location.href = assets.mac.browser_download_url)
                }
              >
                <span>{assets.mac.name}</span>
              </button>
            </td>
            <td>{assets.mac.created_at}</td>
          </tr>
          <tr>
            <td>Linux</td>
            <td>
              <button
                className="button button--info"
                onClick={() =>
                  (location.href = assets.linux.browser_download_url)
                }
              >
                <span>{assets.linux.name}</span>
              </button>
            </td>
            <td>{assets.linux.created_at}</td>
          </tr>
        </table>
        <p>
          or, download manually from the{" "}
          <a href="https://github.com/xgi/houdoku/releases" target="_blank">
            GitHub releases page
          </a>
        </p>
        <h3>License</h3>
        <p>
          Houdoku is provided under the{" "}
          <a
            href="https://github.com/xgi/houdoku/blob/master/LICENSE.txt"
            target="_blank"
          >
            MIT License
          </a>
        </p>
      </>
    );
  };

  return (
    <Layout
      title={`Download`}
      description="Download Houdoku, a free and open source manga reader for the desktop"
    >
      <main>
        <div className={styles.content}>
          <div className={styles.contentInner}>
            <h1>Download Houdoku</h1>
            {renderDownloadContent()}
          </div>
        </div>
      </main>
    </Layout>
  );
}
