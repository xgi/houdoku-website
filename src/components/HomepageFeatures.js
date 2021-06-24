import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Library Extensions",
    src: "/img/screenshot_library.png",
    description: (
      <>
        Read series from popular manga aggregators or from your own
        filesystem, and manage them all in one place.
      </>
    ),
  },
  {
    title: "Customizable Reader",
    src: "/img/screenshot_reader.png",
    description: (
      <>
        Read manga or webtoons with a configurable reader, including vertical
        and two-page reading modes.
      </>
    ),
  },
  {
    title: "Automatic Series Tracking",
    src: "/img/screenshot_series.png",
    description: (
      <>
        Automatically check for updates to series in your library, and save your
        progress as you read -- or sync with your AniList account.
      </>
    ),
  },
];

function Feature({ src, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img alt={title} src={src} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
