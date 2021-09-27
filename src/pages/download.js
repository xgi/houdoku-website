import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import styles from "./download.module.css";
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

    return (
      <>
        <p>
          The latest release is version{" "}
          <b>{latestRelease.tag_name.replace("v", "")}</b>, which was released
          on {releaseDate.toLocaleDateString()} ({getDaysSince(releaseDate)}{" "}
          days ago).
        </p>
        <table>
          <thead>
            <tr>
              <th>Platform</th>
              <th>Download</th>
              <th>Built</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Windows</td>
              <td>
                <a href={assets.windows.browser_download_url}>
                  <button className="button button--info">
                    <span>{assets.windows.name}</span>
                  </button>
                </a>
              </td>
              <td>{assets.windows.created_at}</td>
            </tr>
            <tr>
              <td>macOS</td>
              <td>
                <a href={assets.mac.browser_download_url}>
                  <button className="button button--info">
                    <span>{assets.mac.name}</span>
                  </button>
                </a>
              </td>
              <td>{assets.mac.created_at}</td>
            </tr>
            <tr>
              <td>Linux</td>
              <td>
                <a href={assets.linux.browser_download_url}>
                  <button className="button button--info">
                    <span>{assets.linux.name}</span>
                  </button>
                </a>
              </td>
              <td>{assets.linux.created_at}</td>
            </tr>
          </tbody>
        </table>
        <p>
          or, download manually from the{" "}
          <a href="https://github.com/xgi/houdoku/releases" target="_blank">
            GitHub releases page
          </a>
        </p>
        <h3>{latestRelease.tag_name} Release Notes</h3>
        <div className={styles.releaseNotesContainer}>
          <span
            dangerouslySetInnerHTML={{
              __html: marked(latestRelease.body),
            }}
          />
        </div>
        <h3>Updating</h3>
        <p>
          Houdoku checks for updates automatically when the client starts. You
          will be prompted when an update is available.
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
