import { chunkArray } from "../lib/helpers";
import { DeepgramResponse, WordBase } from "../lib/types";
import { IConverter } from "./IConverter";

export class DeepgramConverter implements IConverter {
  constructor(public transcriptionData: DeepgramResponse) {}

  getLines(lineLength: number = 8): WordBase[][] {
    const { results } = this.transcriptionData;
    let content: WordBase[][] = [];

    if (results.utterances) {
      results.utterances.forEach((utterance) => {
        if (utterance.words.length > lineLength) {
          content.push(...chunkArray(utterance.words, lineLength));
        } else {
          content.push(utterance.words);
        }
      });
    } else {
      content.push(...chunkArray(results.channels[0].alternatives[0].words, lineLength));
    }

    return content;
  }

  getHeaders(): string[] {
    const output: string[] = [];

    output.push("NOTE");
    output.push("Transcription provided by Deepgram");
    this.transcriptionData.metadata?.request_id
      ? output.push(`Request Id: ${this.transcriptionData.metadata?.request_id}`)
      : null;
    this.transcriptionData.metadata?.created
      ? output.push(`Created: ${this.transcriptionData.metadata?.created}`)
      : null;
    this.transcriptionData.metadata?.duration
      ? output.push(`Duration: ${this.transcriptionData.metadata?.duration}`)
      : null;
    this.transcriptionData.metadata?.channels
      ? output.push(`Channels: ${this.transcriptionData.metadata?.channels}`)
      : null;

    return output;
  }
}
