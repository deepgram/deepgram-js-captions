import assemblyai_transcription from "./assemblyai-transcription.json";
import assemblyai_utterances from "./assemblyai-utterances.json";
import { webvtt, srt, AssemblyAiConverter } from "../src/index";
import { expect } from "chai";
import srtValidator from "srt-validator";

describe("testing assembly transcription formatting", () => {
  it("should return a valid webvtt format when provided a transcription though assembly converter", () => {
    const result = webvtt(new AssemblyAiConverter(assemblyai_transcription));

    expect(typeof result).to.equal("string");
    expect(result).to.have.string("NOTE");
    expect(result).to.have.string("Transcription provided by Assembly AI");
    expect(result).to.have.string("Id");
    expect(result).to.have.string("Duration");
  });

  it("should return a valid srt format when provided a assemblyai transcription though assembly converter", () => {
    const result = srt(new AssemblyAiConverter(assemblyai_transcription));

    expect(srtValidator(result)).to.deep.equal([]);
  });

  it("should return a valid webvtt format when provided a utterances though assembly converter", () => {
    const result = webvtt(new AssemblyAiConverter(assemblyai_utterances));

    expect(typeof result).to.equal("string");
    expect(result).to.have.string("NOTE");
    expect(result).to.have.string("Transcription provided by Assembly AI");
    expect(result).to.have.string("Id");
    expect(result).to.have.string("Duration");
  });

  it("should return a valid srt format when provided a assemblyai utterances though assembly converter", () => {
    const result = srt(new AssemblyAiConverter(assemblyai_utterances));

    expect(srtValidator(result)).to.deep.equal([]);
  });
});
