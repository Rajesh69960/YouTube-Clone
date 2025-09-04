import React from "react"
import LeftVideoplayer from "../components/VideoPlayerLeft/LeftVideoplayer"
import RightVideoPlayer from "../components/VideoPlayerRight/RightVideoPlayer"

function VideoPage() {
  return (
    <div className="flex p-20 space-x-4">
      <LeftVideoplayer />
      <RightVideoPlayer />
    </div>
  )
}

export default VideoPage
