---
sidebar_position: 3
---

# Trackers

Trackers are 3rd-party websites that let you create a list of the manga you read. Popular examples
are AniList, MyAnimeList (MAL), and Kitsu. *Currently, Houdoku only supports AniList*.

## Linking Account

To use a tracker in Houdoku, you first need to link your account. Go to `Settings` -> `Trackers`
and follow the instructions for the tracker you want to link. The text at the bottom will
change to `Authenticated as <username>`.

## Matching Series Entries

To sync a series in your library with one on the tracker, you need to match the series
entries. On a series page, click the `Trackers` button, go to the tab for the tracker you want to
use, and select the matching entry from the list provided.

:::tip
You **do not** need to have the series already on your list. It will be automatically created
when you edit values or read a chapter.
:::

![tracker matching page](/img/screenshot_tracker_matching.png)

After matching the entries, you can edit the status, progress, or score, just like you would do
on the tracker website. When you read a chapter, it will automatically update the progress on
your list. You can disable this feature in `Settings` -> `Trackers` -> `Update Progress Automatically`.

:::important
The automatic progress update will only ever increase your progress. If you accidently open
a future chapter, you will need to manually lower the progress value.
:::
