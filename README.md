# Deepgram Captions

This package is the Node implementation of Deepgram's WebVTT and SRT formatting. Given a transcription, this package can return a valid string to store as WebVTT or SRT caption files.

> Works with ANY transcription format.

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

## Converters

This package has been built to convert any transcription format. You only need to provide a `converter` class to provide the formatters with the correct data.

### Example Converter

A generic converter would look like this:

```ts
import { chunkArray } from "../lib/helpers";
import { WordBase } from "../lib/types";
import { IConverter } from "./IConverter";

export class GenericConverter implements IConverter {
  constructor(public transcriptionData: any) {}

  getLines(lineLength: number = 8): WordBase[][] {
    const results = this.transcriptionData;
    let content: WordBase[][] = [];

    results.paragraphs.forEach((paragraph) => {
      if (paragraph.words.length > lineLength) {
        content.push(...chunkArray(paragraph.words, lineLength));
      } else {
        content.push(paragraph.words);
      }
    });

    return content;
  }
}
```

It requires that `getLines` return the following data structure:

```ts
// const transcriptionData: WordBase[][] = [
const transcriptionData = [
  [
    {
      word: string;
      start: number;
      end: number;
      punctuated_word: string;
    }
  ]
]
```

Using your converter will look like this:

```ts
import { srt } from "@deepgram/captions";

const result = srt(new GenericConverter(transcription_result));
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
