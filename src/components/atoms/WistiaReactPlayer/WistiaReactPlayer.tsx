import ReactPlayer from "react-player/wistia";
import { StyledVideoWrapper } from "./WistiaReactPlayer.styles";

type videoProps = {
  videoId: string;
};

function WistiaReactPlayer(props: videoProps) {
  const { videoId } = props;
  const videoUrl = `https://home.wistia.com/medias/${videoId}`;

  return (
    <StyledVideoWrapper>
      <ReactPlayer
        className="react-player"
        controls
        width="100%"
        height="100%"
        url={videoUrl}
      />
    </StyledVideoWrapper>
  );
}

export default WistiaReactPlayer;
