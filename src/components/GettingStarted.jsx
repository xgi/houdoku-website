import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";

const Topics = [
  {
    name: "Adding Manga",
    links: [
      {
        title: "Add from websites",
        url: "/docs/adding-manga/adding-from-websites",
      },
      {
        title: "Add from filesystem",
        url: "/docs/adding-manga/adding-from-filesystem",
      },
    ],
    description:
      "Read manga from supported aggregator/scanlator websites, or import from your filesystem.",
  },
  {
    name: "Tracking",
    links: [{ title: "Learn more", url: "/docs/trackers" }],
    description:
      "Automatically sync your progress with your AniList or MyAnimeList account.",
  },
  {
    name: "Offline Downloading",
    links: [{ title: "Learn more", url: "/docs/offline-downloading" }],
    description: "Download manga to read when you're offline.",
  },
  {
    name: "GitHub",
    links: [
      { title: "Go to repository", url: "https://github.com/xgi/houdoku" },
    ],
    description: "Report bugs, request features, or contribute to Houdoku.",
  },
];

function GettingStartedCard({ name, links, description }) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx("card")}>
        <div className="card__body">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block margin-bottom--sm">
            {links.map((link) => (
              <Link className="button button--secondary" to={link.url}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function GettingStartedRow() {
  return (
    <div className="row">
      {Topics.map((topic) => (
        <GettingStartedCard key={topic.name} {...topic} />
      ))}
    </div>
  );
}
