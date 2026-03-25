import "./index.css";
import { parseMedia } from "@remotion/media-parser";
import { Composition, staticFile } from "remotion";
import { Audiogram } from "./Audiogram/Main";
import { audiogramSchema } from "./Audiogram/schema";
import { getSubtitles } from "./helpers/fetch-captions";
import { FPS } from "./helpers/ms-to-frame";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Audiogram"
        component={Audiogram}
        width={1920}
        height={1080}
        schema={audiogramSchema}
        defaultProps={{
          // audio settings
          audioOffsetInSeconds: 0,
          audioFileUrl: staticFile("audio.m4a"),
          silenceDurationSeconds: 8,
          // podcast data
          coverImageUrl: staticFile("cover.jpg"),
          podcastName: "Deep Book Reviews",
          podcastNameOpacity: 0.3,
          titleText: "The Elegant Universe",
          titleColor: "#0a66c2",
          backgroundColor: "white",
          // captions settings
          captions: null,
          captionsFileName: staticFile("subtitles.srt"),
          onlyDisplayCurrentSentence: true,
          captionsTextColor: "black",
          // visualizer settings
          visualizer: {
            type: "spectrum" as const,
            color: "#0a66c2",
            numberOfSamples: "128" as const,
            mirrorWave: false,
            linesToDisplay: 50,
            freqRangeStartIndex: 0,
          },
          audioVisualizationOpacity: 0.3,
        }}
        // Determine the length of the video based on the duration of the audio file
        calculateMetadata={async ({ props }) => {
          const captions = await getSubtitles(props.captionsFileName);
          const { slowDurationInSeconds } = await parseMedia({
            src: props.audioFileUrl,
            acknowledgeRemotionLicense: true,
            fields: {
              slowDurationInSeconds: true,
            },
          });

          return {
            durationInFrames: Math.floor(
              (slowDurationInSeconds - props.audioOffsetInSeconds + props.silenceDurationSeconds) * FPS,
            ),
            props: {
              ...props,
              captions,
            },
            fps: FPS,
          };
        }}
      />
    </>
  );
};
