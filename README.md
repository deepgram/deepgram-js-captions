# Deepgram Captions

This package is the Node implementation of Deepgram's WebVTT and SRT formatting. Given a transcription, this package can return a valid string to store as WebVTT or SRT caption files.

## Installation

```bash
npm install @deepgram/captions
# - or -
# yarn add @deepgram/captions
```

## WebVTT from Deepgram Transcriptions

```ts
import { webvtt } from "@deepgram/captions";

const result = webvtt(deepgram_transcription_result);
```

## SRT from Deepgram Transcriptions

```ts
import { srt } from "@deepgram/captions";

const result = srt(deepgram_transcription_result);
```

## Documentation

You can learn more about the Deepgram API at [developers.deepgram.com](https://developers.deepgram.com/docs).

## Development and Contributing

Interested in contributing? We ❤️ pull requests!

To make sure our community is safe for all, be sure to review and agree to our
[Code of Conduct](./.github/CODE_OF_CONDUCT.md). Then see the
[Contribution](./.github/CONTRIBUTING.md) guidelines for more information.

## Getting Help

We love to hear from you so if you have questions, comments or find a bug in the
project, let us know! You can either:

- [Open an issue in this repository](https://github.com/deepgram/[reponame]/issues/new)
- [Join the Deepgram Github Discussions Community](https://github.com/orgs/deepgram/discussions)
- [Join the Deepgram Discord Community](https://discord.gg/xWRaCDBtW4)

[license]: LICENSE.txt
