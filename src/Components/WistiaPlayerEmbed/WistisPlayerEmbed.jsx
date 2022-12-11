import React, { useEffect } from "react";
import { StyledVideoWrapper } from "./WistiaPlayerEmbed.styles";

const WistiaPlayerEmbed = (props) => {
  const { videoId, ...embedOptions } = props;
  window._wq = window._wq || [];
  window._wq.push({
    id: videoId,
    options: embedOptions,
  });

  useEffect(() => {
    if (!document.getElementById("wistia_script")) {
      let wistiaScript = document.createElement("script");
      wistiaScript.id = "wistia_script";
      wistiaScript.type = "text/javascript";
      wistiaScript.src = "https://fast.wistia.com/assets/external/E-v1.js";
      wistiaScript.async = true;
      document.body.appendChild(wistiaScript);
    }

    window._wq = window._wq || [];
  });

  return (
    <StyledVideoWrapper>
      <div className="react-player">
        <div
          className={`wistia_embed wistia_async_${props.videoId} videoFoam=true`}
        />
      </div>
    </StyledVideoWrapper>
  );
};

export default WistiaPlayerEmbed;
