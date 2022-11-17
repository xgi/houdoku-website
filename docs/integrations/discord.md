---
sidebar_position: 0
---

import { TabText } from "@site/src/components/TabText";

# Discord

Houdoku supports Discord's Rich Presence feature. This is the same feature that displays
what game you're currently playing, or what you're listening to on Spotify.

![discord presence example](/img/screenshot_discord.png)

First, ensure you have the Rich Presence feature enabled on Discord. In your Discord settings,
go to `Activity Status` -> `Display current activity as a status message`.

In Houdoku, go to <TabText name='settings'/> -> `Integrations` -> `Use Discord Rich Presence`.

The status message will only appear while you're reading a chapter, and will show the series
title, chapter number, and how long Houdoku has been running.

:::important
Your status should usually update instantly, but sometimes it may take up to 15 seconds.
:::