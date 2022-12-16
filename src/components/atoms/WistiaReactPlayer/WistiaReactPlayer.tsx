import ReactPlayer from "react-player/wistia";
import { VideoProps } from "../../pages/Video";
import { StyledVideoWrapper } from "./WistiaReactPlayer.styles";

function WistiaReactPlayer(props: VideoProps) {
  const {
    videoId,
    state,
    handleOnStart,
    handleOnPlay,
    handleOnPause,
    handleOnEnded,
  } = props;
  const videoUrl = `https://home.wistia.com/medias/${videoId}`;

  return (
    <>
      <StyledVideoWrapper>
        <ReactPlayer
          className="react-player"
          controls
          width="100%"
          height="100%"
          url={videoUrl}
          onStart={handleOnStart}
          onPlay={handleOnPlay}
          onPause={handleOnPause}
          onEnded={handleOnEnded}
        />
      </StyledVideoWrapper>

      <p>{state}</p>
    </>
  );
}

export default WistiaReactPlayer;
