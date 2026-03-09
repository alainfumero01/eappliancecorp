import { Composition } from "remotion";
import {
  ManifestWalkthrough,
  calculateMetadata,
  type Props,
} from "./ManifestWalkthrough";

const defaultProps: Props = {
  clip1DurationInFrames: 450, // 15s placeholder; calculateMetadata overrides
  clip2DurationInFrames: 300, // 10s placeholder; calculateMetadata overrides
};

export const RemotionRoot: React.FC = () => {
  return (
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
  );
};
