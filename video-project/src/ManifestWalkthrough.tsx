import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  staticFile,
  spring,
} from "remotion";
import { Video } from "@remotion/media";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import type { CalculateMetadataFunction } from "remotion";
import { Input, ALL_FORMATS, UrlSource } from "mediabunny";

// ─── Types ───────────────────────────────────────────────────────────────────

export type Props = {
  clip1DurationInFrames: number;
  clip2DurationInFrames: number;
};

// ─── Utilities ───────────────────────────────────────────────────────────────

const getVideoDuration = async (src: string): Promise<number> => {
  const input = new Input({
    formats: ALL_FORMATS,
    source: new UrlSource(src, { getRetryDelay: () => null }),
  });
  return await input.computeDuration();
};

// ─── calculateMetadata ───────────────────────────────────────────────────────

export const calculateMetadata: CalculateMetadataFunction<Props> = async () => {
  const fps = 30;
  const TRANSITION = 15;
  const INTRO_FRAMES = 3 * fps;  // 3 s
  const OUTRO_FRAMES = 3 * fps;  // 3 s

  const [dur1, dur2] = await Promise.all([
    getVideoDuration(staticFile("IMG_6251.mov")),
    getVideoDuration(staticFile("IMG_6252.mov")),
  ]);

  const clip1DurationInFrames = Math.ceil(dur1 * fps);
  const clip2DurationInFrames = Math.ceil(dur2 * fps);

  // TransitionSeries subtracts one TRANSITION per transition (3 total)
  const total =
    INTRO_FRAMES +
    clip1DurationInFrames +
    clip2DurationInFrames +
    OUTRO_FRAMES -
    3 * TRANSITION;

  return {
    durationInFrames: total,
    props: {
      clip1DurationInFrames,
      clip2DurationInFrames,
    },
  };
};

// ─── Shared styles ───────────────────────────────────────────────────────────

const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif";

// ─── IntroCard ───────────────────────────────────────────────────────────────

const IntroCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, 0.6 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 0.5 * fps, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const opacity = fadeIn * fadeOut;

  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 200 },
    durationInFrames: 1.5 * fps,
  });

  const titleY = interpolate(titleSpring, [0, 1], [24, 0]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0b0b0b",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity,
        fontFamily: FONT,
      }}
    >
      <div
        style={{
          fontSize: 13,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.45)",
          marginBottom: 20,
        }}
      >
        E-Appliance Recycling Corp
      </div>
      <div
        style={{
          fontSize: 52,
          fontWeight: 600,
          color: "#ffffff",
          letterSpacing: "-0.02em",
          transform: `translateY(${titleY}px)`,
          opacity: titleSpring,
        }}
      >
        Load Walkthrough
      </div>
      <div
        style={{
          marginTop: 24,
          width: 48,
          height: 2,
          backgroundColor: "rgba(255,255,255,0.25)",
          opacity: titleSpring,
        }}
      />
    </AbsoluteFill>
  );
};

// ─── VideoScene ───────────────────────────────────────────────────────────────

const VideoScene: React.FC<{ src: string; label: string }> = ({ src, label }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const overlayFadeIn = interpolate(frame, [0, 1 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });
  const overlayFadeOut = interpolate(
    frame,
    [durationInFrames - 0.5 * fps, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const overlayOpacity = overlayFadeIn * overlayFadeOut;

  const labelSpring = spring({
    frame,
    fps,
    config: { damping: 200 },
    durationInFrames: 1.2 * fps,
    delay: 0.4 * fps,
  });
  const labelX = interpolate(labelSpring, [0, 1], [-20, 0]);

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {/* Full-bleed video */}
      <Video
        src={staticFile(src)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Gradient scrim at bottom */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 40%, transparent 70%)",
          opacity: overlayOpacity,
        }}
      />

      {/* Company + label lockup */}
      <div
        style={{
          position: "absolute",
          bottom: 52,
          left: 56,
          opacity: overlayOpacity,
          fontFamily: FONT,
          transform: `translateX(${labelX}px)`,
        }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
            marginBottom: 6,
          }}
        >
          E-Appliance Recycling Corp
        </div>
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            color: "#ffffff",
            letterSpacing: "-0.01em",
          }}
        >
          {label}
        </div>
      </div>

      {/* "As-is wholesale" badge top-right */}
      <div
        style={{
          position: "absolute",
          top: 40,
          right: 52,
          opacity: overlayOpacity,
          fontFamily: FONT,
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.45)",
        }}
      >
        As-is · Wholesale
      </div>
    </AbsoluteFill>
  );
};

// ─── OutroCard ────────────────────────────────────────────────────────────────

const OutroCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, 0.8 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  const line1Spring = spring({
    frame,
    fps,
    config: { damping: 200 },
    durationInFrames: 1.4 * fps,
    delay: 0.2 * fps,
  });
  const line2Spring = spring({
    frame,
    fps,
    config: { damping: 200 },
    durationInFrames: 1.4 * fps,
    delay: 0.6 * fps,
  });

  const line1Y = interpolate(line1Spring, [0, 1], [20, 0]);
  const line2Y = interpolate(line2Spring, [0, 1], [20, 0]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0b0b0b",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: fadeIn,
        fontFamily: FONT,
        padding: "0 120px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: 13,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.4)",
          marginBottom: 24,
        }}
      >
        E-Appliance Recycling Corp
      </div>

      <div
        style={{
          fontSize: 36,
          fontWeight: 600,
          color: "#ffffff",
          letterSpacing: "-0.02em",
          lineHeight: 1.2,
          maxWidth: 800,
          transform: `translateY(${line1Y}px)`,
          opacity: line1Spring,
        }}
      >
        Review manifest rows, notes, and media before confirming purchase.
      </div>

      <div
        style={{
          marginTop: 28,
          fontSize: 16,
          color: "rgba(255,255,255,0.5)",
          maxWidth: 560,
          lineHeight: 1.6,
          transform: `translateY(${line2Y}px)`,
          opacity: line2Spring,
        }}
      >
        All loads are as-is and wholesale. Condition varies. Prices do not include shipping or freight.
      </div>

      <div
        style={{
          marginTop: 36,
          fontSize: 13,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.3)",
          opacity: line2Spring,
        }}
      >
        e-appliancecorp.com/manifests
      </div>
    </AbsoluteFill>
  );
};

// ─── Main composition ─────────────────────────────────────────────────────────

const TRANSITION_FRAMES = 15;
const transition = fade();
const timing = linearTiming({ durationInFrames: TRANSITION_FRAMES });

export const ManifestWalkthrough: React.FC<Props> = ({
  clip1DurationInFrames,
  clip2DurationInFrames,
}) => {
  const { fps } = useVideoConfig();

  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={3 * fps} premountFor={fps}>
        <IntroCard />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={transition} timing={timing} />

      <TransitionSeries.Sequence
        durationInFrames={clip1DurationInFrames}
        premountFor={fps}
      >
        <VideoScene src="IMG_6251.mov" label="Load Overview" />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={transition} timing={timing} />

      <TransitionSeries.Sequence
        durationInFrames={clip2DurationInFrames}
        premountFor={fps}
      >
        <VideoScene src="IMG_6252.mov" label="Condition Detail" />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={transition} timing={timing} />

      <TransitionSeries.Sequence durationInFrames={3 * fps} premountFor={fps}>
        <OutroCard />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
