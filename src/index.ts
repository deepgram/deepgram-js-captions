import { DeepgramConverter, IConverter, isConverter } from "./converters";
import { secondsToTimestamp } from "./lib/helpers";
import { DeepgramResponse } from "./lib/types";

const parseInput = (transcription: any): IConverter => {
  if (!isConverter(transcription)) {
    return new DeepgramConverter(transcription as DeepgramResponse);
  }

  return transcription;
};

const webvtt = (transcription: any, lineLength: number = 8): string => {
  const output: string[] = [];

  let data = parseInput(transcription);

  // default top of file
  output.push("WEBVTT");
  output.push("");

  // get converter specific headers
  output.push(data.getHeaders().join("\n"));
  output.push("");

  // get the lines
  const lines = data.getLines(lineLength);

  lines.forEach((words) => {
    const firstWord = words[0];
    const lastWord = words[words.length - 1];

    output.push(`${secondsToTimestamp(firstWord.start)} --> ${secondsToTimestamp(lastWord.end)}`);
    output.push(words.map((word) => word.punctuated_word ?? word.word).join(" "));
    output.push("");
  });

  return output.join("\n");
};

const srt = (transcription: any, lineLength: number = 8): string => {
  const output: string[] = [];

  // get the lines
  const lines = parseInput(transcription).getLines(lineLength);
  let entry = 1;

  lines.forEach((words) => {
    output.push((entry++).toString());

    const firstWord = words[0];
    const lastWord = words[words.length - 1];

    output.push(
      `${secondsToTimestamp(firstWord.start, "HH:mm:ss,SSS")} --> ${secondsToTimestamp(
        lastWord.end,
        "HH:mm:ss,SSS"
      )}`
    );
    output.push(words.map((word) => word.punctuated_word ?? word.word).join(" "));
    output.push("");
  });

  return output.join("\n");
};

export { webvtt, srt };

/**
 * Helpful exports.
 */
export * from "./converters";
export * from "./lib/types";
export * from "./lib/helpers";
