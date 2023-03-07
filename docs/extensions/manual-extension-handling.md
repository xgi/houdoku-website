---
sidebar_position: 0
---

import { TabText } from "@site/src/components/TabText";

# Manual Extension Handling

If you encounter issues removing extensions from within Houdoku, or if an extension
causes the client to crash, you can manually remove them from your filesystem.

Extensions are saved in the app's `userData` directory:

- Windows: `%APPDATA%/Houdoku`
- macOS: `~/Library/Application Support/Houdoku`
- Linux: `$XDG_CONFIG_HOME/Houdoku` or `~/.config/Houdoku`
- If you specified a custom install directory, check there first.

Extensions are in the `plugins` directory. You can either remove this entire directory
or individual extensions inside.

:::info
You can modify extensions while Houdoku is running. After making changes on the filesystem,
go to the <TabText name='extensions'/> tab -> `View Installed Extensions` -> `Reload Extensions`.
:::

If you have an issue with a specific extension, please report it in the
[houdoku-extensions repository](https://github.com/xgi/houdoku-extensions/issues).
