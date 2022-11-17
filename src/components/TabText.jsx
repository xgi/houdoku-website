import React from "react";
import { IconBook, IconBooks, IconCircleI, IconDownload, IconInfoCircle, IconPuzzle, IconSettings, IconSquarePlus } from "@tabler/icons";

const iconProps = {
  size: 20,
  style: {
    position: "relative",
    top: 4,
    marginRight: 2,
  },
};

const Tabs = {
  library: {
    text: "Library",
    color: "#FF922B",
    icon: <IconBooks {...iconProps} />,
  },
  search: {
    text: "Add Series",
    color: "#20C997",
    icon: <IconSquarePlus {...iconProps} />,
  },
  extensions: {
    text: "Extensions",
    color: "#CC5DE8",
    icon: <IconPuzzle {...iconProps} />,
  },
  downloads: {
    text: "Downloads",
    color: "#FF6B6B",
    icon: <IconDownload {...iconProps} />,
  },
  settings: {
    text: "Settings",
    color: "#339AF0",
    icon: <IconSettings {...iconProps} />,
  },
  about: {
    text: "About",
    color: "#FCC419",
    icon: <IconInfoCircle {...iconProps} />,
  },
};

export function TabText({ name }) {
  const tab = Tabs[name];
  return (
    <span
      style={{
        marginLeft: 3,
        marginRight: 3,
        fontWeight: 700,
        cursor: "default",
        fontSize: "1.025em",
        color: tab.color,
      }}
    >
      {tab.icon}
      {tab.text}
    </span>
  );
}
