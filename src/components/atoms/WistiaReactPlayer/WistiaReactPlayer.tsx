import { useState } from "react";
import ReactPlayer from "react-player/wistia";
import { StyledVideoWrapper } from "./WistiaReactPlayer.styles";

type VideoProps = {
  videoId: string;
};

function WistiaReactPlayer(props: VideoProps) {
  const { videoId } = props;
  const videoUrl = `https://home.wistia.com/medias/${videoId}`;
  const [state, setState] = useState<string>();
  const textMessage = [
    "Called when media starts playing.",
    "The video was just played!",
    "The video was just paused!",
    "The video has ended!",
  ];

  const handleOnStart = () => {
    setState(textMessage["0"]);
  };

  const handleOnPlay = () => {
    setState(textMessage["1"]);
  };

  const handleOnPause = () => {
    setState(textMessage["2"]);
  };

  const handleOnEnded = () => {
    setState(textMessage["3"]);
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
        />
      </StyledVideoWrapper>

      <p>{state}</p>
    </>
  );
}

export default WistiaReactPlayer;
