import { Composition } from "remotion";
import {
  ManifestWalkthrough,
  calculateMetadata,
  type Props,
} from "./ManifestWalkthrough";
import { AboutBrand } from "./AboutBrand";

const defaultProps: Props = {
  clip1DurationInFrames: 450,
  clip2DurationInFrames: 300,
};

// AboutBrand: 4 scenes × 30fps - 3 transitions of 15 frames
// 5s + 5s + 5s + 4s = 19s → 570 frames - 45 = 525 frames
const ABOUT_DURATION = (5 + 5 + 5 + 4) * 30 - 3 * 15;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ManifestWalkthrough"
        component={ManifestWalkthrough}
        durationInFrames={
          defaultProps.clip1DurationInFrames +
          defaultProps.clip2DurationInFrames +
          3 * 30 * 2 -
          3 * 15
        }
        fps={30}
        width={1920}
        height={1080}
        defaultProps={defaultProps}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="AboutBrand"
        component={AboutBrand}
        durationInFrames={ABOUT_DURATION}
        fps={30}
        width={1440}
        height={1080}
      />
    </>
  );
};
