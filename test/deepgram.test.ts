import dg_transcription from "./dg-transcription.json";
import dg_utterances from "./dg-transcription.json";
import { webvtt, srt, DeepgramConverter } from "../src/index";
import { expect } from "chai";
import srtValidator from "srt-validator";

// console.log(webvtt(transcription));
// console.log(srt(transcription));

describe("testing deepgram transcription formatting", () => {
  it("should return a valid webvtt format when provided a deepgram transcription", () => {
    const result = webvtt(dg_transcription);

    expect(typeof result).to.equal("string");
    expect(result).to.have.string("NOTE");
    expect(result).to.have.string("Transcription provided by Deepgram");
    expect(result).to.have.string("Request Id");
    expect(result).to.have.string("Created");
    expect(result).to.have.string("Duration");
    expect(result).to.have.string("Channels");
  });

  it("should return a valid srt format when provided a deepgram transcription", () => {
    const result = srt(dg_transcription);

    expect(srtValidator(result)).to.deep.equal([]);
  });

  it("should return a valid webvtt format when provided a transcription though the Deepgram formatter", () => {
    const result = webvtt(new DeepgramConverter(dg_transcription));

    expect(typeof result).to.equal("string");
    expect(result).to.have.string("NOTE");
    expect(result).to.have.string("Transcription provided by Deepgram");
    expect(result).to.have.string("Request Id");
    expect(result).to.have.string("Created");
    expect(result).to.have.string("Duration");
    expect(result).to.have.string("Channels");
  });

  it("should return a valid srt format when provided a deepgram transcription though the Deepgram formatter", () => {
    const result = srt(new DeepgramConverter(dg_transcription));

    expect(srtValidator(result)).to.deep.equal([]);
  });

  it("should return a valid webvtt format when provided a deepgram utterances", () => {
    const result = webvtt(dg_utterances);

    expect(typeof result).to.equal("string");
    expect(result).to.have.string("NOTE");
    expect(result).to.have.string("Transcription provided by Deepgram");
    expect(result).to.have.string("Request Id");
    expect(result).to.have.string("Created");
    expect(result).to.have.string("Duration");
    expect(result).to.have.string("Channels");
  });

  it("should return a valid srt format when provided a deepgram utterances", () => {
    const result = srt(dg_utterances);

    expect(srtValidator(result)).to.deep.equal([]);
  });

  it("should return a valid webvtt format when provided a utterances though the Deepgram formatter", () => {
    const result = webvtt(new DeepgramConverter(dg_utterances));

    expect(typeof result).to.equal("string");
    expect(result).to.have.string("NOTE");
    expect(result).to.have.string("Transcription provided by Deepgram");
    expect(result).to.have.string("Request Id");
    expect(result).to.have.string("Created");
    expect(result).to.have.string("Duration");
    expect(result).to.have.string("Channels");
  });

  it("should return a valid srt format when provided a deepgram utterances though the Deepgram formatter", () => {
    const result = srt(new DeepgramConverter(dg_utterances));

    expect(srtValidator(result)).to.deep.equal([]);
  });
});
