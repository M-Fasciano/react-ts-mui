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

  if (!videoId) {
    console.log("No videoId provided to videoUrl");
    return null;
  }

  const videoUrl = `https://home.wistia.com/medias/${videoId}`;

  if (!ReactPlayer.canPlay(videoUrl)) {
    console.log(`Cannot play video, URL incorrect: ${videoUrl}`);
    return null;
  }

  const onError = (e: any) => {
    console.log("Cannot play video, the following error occured: ", e);
    return null;
  };

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
          onError={onError}
        />
      </StyledVideoWrapper>

      <p>{state}</p>
    </>
  );
}

export default WistiaReactPlayer;
