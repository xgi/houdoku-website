---
sidebar_position: 0
---

# Adding Local Series

## FAQ

* What formats can I use to import?
  * You can either import a directory or an archive file (ZIP/RAR/CBR/CBZ). Archive files follow the same pattern for their internal directory structure. EPUB is not supported, sorry.
* Does Houdoku make a copy of what I import?
  * No, Houdoku simply saves the location of the directory/archive you provide and reads from it when necessary. If you move the series on your filesystem, you will need to remove/re-add it in Houdoku (editing the path is a potential future feature).
* Can I update a series on the filesystem after I import it?
  * Yes, as long as the path to the directory/archive you provided on import remains the same, you can edit it as much as you like (add/remove pages, rename chapters, etc.). These are updated when you refresh the series just like they would be for an external series. However, you cannot currently edit the series metadata after the initial import.
* Do I need to import each series individually?
  * Yes, sorry.

## Example Structures

```
Manga Title
  - [Group] Manga Title v1
    - [Group] Chapter One Title v1 c1
      - 1.jpg
      - 2.jpg
      - [...]
    - [Group] Chapter Two Title v1 c2
    - [Group] Chapter Three Title v1 c3.5
  - [Group] Manga Title v2
    - [Group] Chapter Four Title v2 c4
    - [Group] Chapter Five Title v2 c5
```

```
Manga Title
  - v1 c1 Chapter One Title [Group]
    - 1.jpg
    - 2.jpg
    - [...]
  - v1 c2 [Group]
  - v1 c3.5 Chapter Three Title [Group]
  - v2 c4 Chapter Four Title [Group]
  - [Group] Chapter One Title v2 c5
```

## How Importing Works

Houdoku treats every directory containing an image as a chapter. Therefore, it is _functional_ for any directory layout. The main concern is how metadata for chapters is parsed.

Things to keep in mind:

- Some releases separate a series only by volume. However, Houdoku will always list base directories as chapters.
- Currently, Houdoku only looks at base-level directory names. If you want metadata to be parsed, it needs to be included in the name of each of those directories.

Houdoku extracts the following from those directory names:

- It attempts to find a chapter number in the form `cXX`. This can have a decimal; e.g. `c201.4`. If a chapter number is not found, it attempts to find _any_ number (separated by spaces). Finally, it defaults to the previous chapter number + 1 (rounded down).
- It attempts to find a volume number in the form `vXX`. This can have a decimal. If the volume number is not found, it is omitted.
- It attempts to find a release group in the form `[Release Group]`. If not found, it is omitted.
