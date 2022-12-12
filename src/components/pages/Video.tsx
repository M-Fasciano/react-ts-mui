import WistiaPlayerEmbed from "../atoms/WistiaPlayerEmbed";
import WistiaReactPlayer from "../atoms/WistiaReactPlayer";
import styled from "styled-components";

const StyledWrapper = styled("div")`
  display: flex;
  width: 100%;

  .container {
    margin: 2rem;
    width: 50%;
  }
`;

function Video() {
  return (
    <StyledWrapper>
      <div className="container">
        <h1>React player</h1>
        <WistiaReactPlayer videoId="bq6epni33s" />
      </div>

      <div className="container">
        <h1>Embed player</h1>
        <WistiaPlayerEmbed videoId="bq6epni33s" />
      </div>
    </StyledWrapper>
  );
}

export default Video;
