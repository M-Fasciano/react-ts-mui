import WistiaReactPlayer from "../atoms/WistiaReactPlayer";
import WistiaPlayerEmbed from "../atoms/WistiaPlayerEmbed/WistiaPlayerEmbed";
import styled from "styled-components";

const StyledWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
  }

  .container {
    margin: 2rem;

    @media (min-width: 1024px) {
      width: 50%;
    }
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
