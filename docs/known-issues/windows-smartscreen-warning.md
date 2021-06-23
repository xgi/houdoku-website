---
sidebar_position: 0
---

# Windows SmartScreen Warning

This page is specifically for Windows Defender SmartScreen, but similar warnings may appear on macOS.

***

When you download Houdoku and try to run the installer, you may get a warning saying "Windows protected your PC" that looks like this:

![windows_warning_screen](https://i.imgur.com/xCwPTN7.png)

**This warning does not mean Windows detected malware in the application.** The reason this message appears is because the Houdoku release binaries are not cryptographically signed with a [Code Signing Certificate](https://www.digicert.com/signing/code-signing-certificates). These certificates are a way for application publishers to prove that they are the ones who created the binary. Even with a CSC, the message may still appear until enough users indicate that they trust the publisher.



So why doesn't Houdoku use a Code Signing Certificate? Because they're expensive! A CSC can often cost a couple hundred dollars (USD) per year, and since Houdoku is free and I don't currently need a cert for anything else, I don't consider it a worthy expense. Therefore this warning will remain for the forseeable future.

## What to Do

* **To continue installation after seeing this warning, just click "More info" under the description text and then click the "Run anyway" button at the bottom of the dialog.**
* If you're still concerned, you can easily build/package Houdoku yourself as long as you already have Node & yarn installed. See instructions below.

## Manual Packaging
```bash
# clone the repo
git clone https://github.com/xgi/houdoku && cd houdoku

# checkout a specific release version
git checkout tags/vX.Y.Z

# install dependencies & create package
yarn install
yarn package
```

The appropriate binary for your OS will be created in the `release` directory.