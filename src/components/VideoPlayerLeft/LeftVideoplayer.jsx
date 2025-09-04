import React from "react"
import VideoPlaying from "./VideoPlaying"
import VideoTitle from "./VideoTitle"
import ChannelName from "./ChannelName"
import Buttons from "./Buttons"
import Description from "./Description"
import Comments from "./Comments"

function LeftVideoplayer() {
  return (
    <div className="w-[65%] ">
      <VideoPlaying />
      <VideoTitle />
      <div className="flex items-center space-x-6 mb-4 ">
        <ChannelName />
        <Buttons />
      </div>
      <Description />
      <Comments />
    </div>
  )
}

export default LeftVideoplayer
