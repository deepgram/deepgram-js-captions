import dg_transcription from "./dg-transcription.json";
import dg_utterances from "./dg-transcription.json";
import dg_speakers from "./dg-speakers-no-utterance.json";
import { webvtt, srt, DeepgramConverter } from "../src/index";
import { expect } from "chai";
import srtValidator from "srt-validator";

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

  it("should return a valid webvtt format when provided a transcription though the Deepgram converter", () => {
    const result = webvtt(new DeepgramConverter(dg_transcription));

    expect(typeof result).to.equal("string");
    expect(result).to.have.string("NOTE");
    expect(result).to.have.string("Transcription provided by Deepgram");
    expect(result).to.have.string("Request Id");
    expect(result).to.have.string("Created");
    expect(result).to.have.string("Duration");
    expect(result).to.have.string("Channels");
  });

  it("should return a valid srt format when provided a deepgram transcription though the Deepgram converter", () => {
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

  it("should return a valid webvtt format when provided a utterances though the Deepgram converter", () => {
    const result = webvtt(new DeepgramConverter(dg_utterances));

    expect(typeof result).to.equal("string");
    expect(result).to.have.string("NOTE");
    expect(result).to.have.string("Transcription provided by Deepgram");
    expect(result).to.have.string("Request Id");
    expect(result).to.have.string("Created");
    expect(result).to.have.string("Duration");
    expect(result).to.have.string("Channels");
  });

  it("should return a valid srt format when provided a deepgram utterances though the Deepgram converter", () => {
    const result = srt(new DeepgramConverter(dg_utterances));

    expect(srtValidator(result)).to.deep.equal([]);
  });

  it("should return a valid webvtt format with speaker labels when provided a deepgram transcription", () => {
    const result = webvtt(new DeepgramConverter(dg_speakers));

    expect(typeof result).to.equal("string");
    expect(result).to.have.string("NOTE");
    expect(result).to.have.string("Transcription provided by Deepgram");
    expect(result).to.have.string("Request Id");
    expect(result).to.have.string("Created");
    expect(result).to.have.string("Duration");
    expect(result).to.have.string("Channels");
    expect(result).to.have.string("Channels");
    expect(result).to.have.string("<v Speaker 0>");
    expect(result).to.have.string("<v Speaker 1>");
    expect(result).to.have.string("<v Speaker 2>");
  });

  it("should return a valid srt format with speaker labels when provided a deepgram transcription", () => {
    const result = srt(new DeepgramConverter(dg_speakers));

    expect(srtValidator(result)).to.deep.equal([]);
  });
});
