---
sidebar_position: 4
---

import { TabText } from "@site/src/components/TabText";

# Trackers

Trackers are 3rd-party websites that let you create a list of the manga you read. Houdoku supports
AniList and MyAnimeList.

## Link your account

To use a tracker in Houdoku, you first need to link your account.
Go to <TabText name='settings'/> -> `Trackers` and follow the instructions for the tracker you want
to link. The heading text will change to `Logged in as <username>`.

## Match a series entry

To sync a series in your library with one on the tracker, you need to match the series
entries. On a series page, click the `Trackers` button and search for a matching series on the
tracker.

You don't need to have the series already on your list. It will be automatically created
when you edit values or read a chapter.

![tracker matching page](/img/screenshot_tracker_matching.png)

After matching the entries, you can edit the status, progress, or score, just like you would do
on the tracker website. When you read a chapter, it will automatically update the progress on
your list. You can disable this feature in <TabText name='settings'/> -> `Trackers` -> `Update Progress Automatically`.
