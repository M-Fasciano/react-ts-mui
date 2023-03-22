import WistiaReactPlayer from "../atoms/WistiaReactPlayer";
import WistiaPlayerEmbed from "../atoms/WistiaPlayerEmbed/WistiaPlayerEmbed";
import styled from "styled-components";
import { useState } from "react";

const StyledWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({ theme }) => theme.breakpoints.up("md")} {
    flex-direction: row;
  }

  .container {
    margin: 2rem;

    ${({ theme }) => theme.breakpoints.up("md")} {
      width: 50%;
    }
  }
`;

export type VideoProps = {
  videoId: string;
  state?: string;
  handleOnStart?: () => void;
  handleOnPlay?: () => void;
  handleOnPause?: () => void;
  handleOnEnded?: () => void;
};

function Video() {
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
    <StyledWrapper>
      <div className="container">
        <h1>React player</h1>
        <WistiaReactPlayer
          videoId="bq6epni33s"
          state={state}
          handleOnStart={handleOnStart}
          handleOnPlay={handleOnPlay}
          handleOnPause={handleOnPause}
          handleOnEnded={handleOnEnded}
        />
      </div>

      <div className="container">
        <h1>Embed player</h1>
        <WistiaPlayerEmbed videoId="bq6epni33s" />
      </div>
    </StyledWrapper>
  );
}

export default Video;
