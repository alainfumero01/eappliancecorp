import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";

// ─── Constants ────────────────────────────────────────────────────────────────

const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif";
const BG = "#0b0b0b";
const WHITE = "#ffffff";
const MUTED = "rgba(255,255,255,0.45)";
const ACCENT = "rgba(255,255,255,0.12)";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function useFadeIn(startFrame: number, durationFrames = 18) {
  const frame = useCurrentFrame();
  return interpolate(frame, [startFrame, startFrame + durationFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

function useSlideUp(startFrame: number, fps: number, distance = 18) {
  const frame = useCurrentFrame();
  const s = spring({
    frame: frame - startFrame,
    fps,
    config: { damping: 200 },
    durationInFrames: 1.2 * fps,
  });
  return interpolate(s, [0, 1], [distance, 0]);
}

// ─── Shared: Eyebrow label ────────────────────────────────────────────────────

const Eyebrow: React.FC<{ children: string; opacity: number }> = ({
  children,
  opacity,
}) => (
  <div
    style={{
      fontSize: 11,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: MUTED,
      fontFamily: FONT,
      opacity,
    }}
  >
    {children}
  </div>
);

// ─── Shared: thin rule ────────────────────────────────────────────────────────

const Rule: React.FC<{ opacity: number; width?: number }> = ({
  opacity,
  width = 40,
}) => (
  <div
    style={{
      width,
      height: 1,
      backgroundColor: "rgba(255,255,255,0.2)",
      opacity,
      margin: "20px 0",
    }}
  />
);

// ─── Scene 1 — Heritage ───────────────────────────────────────────────────────

const SceneHeritage: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const eyebrowOpacity = useFadeIn(8);
  const ruleOpacity = useFadeIn(16);
  const numY = useSlideUp(14, fps, 28);
  const numOpacity = interpolate(frame, [14, 36], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subY = useSlideUp(30, fps, 16);
  const subOpacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const bodyOpacity = useFadeIn(50, 24);
  const bodyY = useSlideUp(50, fps, 12);

  // Animated counter 0 → 15
  const count = Math.round(
    interpolate(frame, [14, 14 + fps * 1.2], [0, 15], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 100px",
        fontFamily: FONT,
      }}
    >
      <Eyebrow opacity={eyebrowOpacity}>About the operation</Eyebrow>
      <Rule opacity={ruleOpacity} />
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 6,
          transform: `translateY(${numY}px)`,
          opacity: numOpacity,
        }}
      >
        <span style={{ fontSize: 112, fontWeight: 700, color: WHITE, lineHeight: 1, letterSpacing: "-0.04em" }}>
          {count}
        </span>
        <span style={{ fontSize: 52, fontWeight: 600, color: WHITE, letterSpacing: "-0.02em" }}>+</span>
      </div>
      <div
        style={{
          fontSize: 28,
          fontWeight: 600,
          color: WHITE,
          letterSpacing: "-0.01em",
          marginTop: 8,
          transform: `translateY(${subY}px)`,
          opacity: subOpacity,
        }}
      >
        Years in appliance load wholesale
      </div>
      <div
        style={{
          marginTop: 20,
          fontSize: 15,
          color: MUTED,
          lineHeight: 1.65,
          maxWidth: 480,
          transform: `translateY(${bodyY}px)`,
          opacity: bodyOpacity,
        }}
      >
        Sourcing customer returns and scratch-and-dent inventory for dealers who buy by the load.
      </div>
    </AbsoluteFill>
  );
};

// ─── Scene 2 — Hubs ───────────────────────────────────────────────────────────

const HubPill: React.FC<{ name: string; delay: number }> = ({ name, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const s = spring({
    frame: frame - delay,
    fps,
    config: { damping: 200 },
    durationInFrames: fps,
  });
  const opacity = interpolate(s, [0, 1], [0, 1]);
  const y = interpolate(s, [0, 1], [14, 0]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        opacity,
        transform: `translateY(${y}px)`,
        marginBottom: 20,
      }}
    >
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: WHITE,
          opacity: 0.7,
          flexShrink: 0,
        }}
      />
      <span style={{ fontSize: 32, fontWeight: 600, color: WHITE, letterSpacing: "-0.01em", fontFamily: FONT }}>
        {name}
      </span>
    </div>
  );
};

const SceneHubs: React.FC = () => {
  const { fps } = useVideoConfig();

  const eyebrowOpacity = useFadeIn(6);
  const ruleOpacity = useFadeIn(14);
  const headY = useSlideUp(10, fps, 16);
  const headOpacity = useFadeIn(10, 22);
  const noteOpacity = useFadeIn(60, 24);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 100px",
        fontFamily: FONT,
      }}
    >
      <Eyebrow opacity={eyebrowOpacity}>Hub locations</Eyebrow>
      <Rule opacity={ruleOpacity} />
      <div
        style={{
          fontSize: 18,
          fontWeight: 500,
          color: MUTED,
          marginBottom: 28,
          transform: `translateY(${headY}px)`,
          opacity: headOpacity,
        }}
      >
        Two distribution hubs
      </div>
      <HubPill name="Texas" delay={22} />
      <HubPill name="New Jersey" delay={36} />
      <div
        style={{
          marginTop: 28,
          fontSize: 14,
          color: "rgba(255,255,255,0.3)",
          opacity: noteOpacity,
          letterSpacing: "0.01em",
          lineHeight: 1.6,
        }}
      >
        Self-pickup, own carrier, or delivery at standard freight rates
      </div>
    </AbsoluteFill>
  );
};

// ─── Scene 3 — Categories ─────────────────────────────────────────────────────

const CATEGORIES = [
  "Refrigerators & Freezers",
  "Washers & Dryers",
  "Ranges & Ovens",
  "Dishwashers",
  "Microwaves",
  "Small Appliances",
];

const CatRow: React.FC<{ label: string; index: number }> = ({ label, index }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const delay = 16 + index * 8;

  const s = spring({
    frame: frame - delay,
    fps,
    config: { damping: 200 },
    durationInFrames: fps,
  });
  const opacity = interpolate(s, [0, 1], [0, 1]);
  const x = interpolate(s, [0, 1], [-14, 0]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        opacity,
        transform: `translateX(${x}px)`,
        padding: "9px 0",
        borderBottom: `1px solid ${ACCENT}`,
        fontFamily: FONT,
      }}
    >
      <div
        style={{
          width: 3,
          height: 3,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.4)",
          flexShrink: 0,
        }}
      />
      <span style={{ fontSize: 16, color: WHITE, letterSpacing: "0.005em" }}>
        {label}
      </span>
    </div>
  );
};

const SceneCategories: React.FC = () => {
  const eyebrowOpacity = useFadeIn(6);
  const ruleOpacity = useFadeIn(14);
  const headOpacity = useFadeIn(8, 20);
  const { fps } = useVideoConfig();
  const headY = useSlideUp(8, fps, 14);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 100px",
        fontFamily: FONT,
      }}
    >
      <Eyebrow opacity={eyebrowOpacity}>Inventory categories</Eyebrow>
      <Rule opacity={ruleOpacity} />
      <div
        style={{
          fontSize: 22,
          fontWeight: 600,
          color: WHITE,
          marginBottom: 20,
          transform: `translateY(${headY}px)`,
          opacity: headOpacity,
        }}
      >
        What moves through our pipeline
      </div>
      {CATEGORIES.map((cat, i) => (
        <CatRow key={cat} label={cat} index={i} />
      ))}
    </AbsoluteFill>
  );
};

// ─── Scene 4 — Closing ────────────────────────────────────────────────────────

const PILLARS = ["Dealer-only.", "As-is.", "Straightforward."];

const PillarWord: React.FC<{ text: string; delay: number }> = ({ text, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const s = spring({
    frame: frame - delay,
    fps,
    config: { damping: 200 },
    durationInFrames: fps * 1.2,
  });
  const opacity = interpolate(s, [0, 1], [0, 1]);
  const y = interpolate(s, [0, 1], [22, 0]);

  return (
    <div
      style={{
        fontSize: 56,
        fontWeight: 700,
        color: WHITE,
        letterSpacing: "-0.03em",
        lineHeight: 1.1,
        opacity,
        transform: `translateY(${y}px)`,
        fontFamily: FONT,
      }}
    >
      {text}
    </div>
  );
};

const SceneClosing: React.FC = () => {
  const eyebrowOpacity = useFadeIn(4);
  const ruleOpacity = useFadeIn(12);
  const urlOpacity = useFadeIn(80, 30);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 100px",
        fontFamily: FONT,
      }}
    >
      <Eyebrow opacity={eyebrowOpacity}>E-Appliance Recycling Corp</Eyebrow>
      <Rule opacity={ruleOpacity} />
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {PILLARS.map((word, i) => (
          <PillarWord key={word} text={word} delay={14 + i * 16} />
        ))}
      </div>
      <div
        style={{
          marginTop: 36,
          fontSize: 13,
          color: "rgba(255,255,255,0.28)",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          opacity: urlOpacity,
        }}
      >
        e-appliancecorp.com
      </div>
    </AbsoluteFill>
  );
};

// ─── Root composition ─────────────────────────────────────────────────────────

const T = 15; // transition frames
const t = fade();
const timing = linearTiming({ durationInFrames: T });

export const AboutBrand: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={5 * fps} premountFor={fps}>
        <SceneHeritage />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={t} timing={timing} />

      <TransitionSeries.Sequence durationInFrames={5 * fps} premountFor={fps}>
        <SceneHubs />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={t} timing={timing} />

      <TransitionSeries.Sequence durationInFrames={5 * fps} premountFor={fps}>
        <SceneCategories />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={t} timing={timing} />

      <TransitionSeries.Sequence durationInFrames={4 * fps} premountFor={fps}>
        <SceneClosing />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
