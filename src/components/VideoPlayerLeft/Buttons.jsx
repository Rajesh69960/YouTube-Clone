import React from "react"
import SubscribeBtn from "./SubscribeBtn"
import ShareBtn from "./ShareBtn"
import LikeDisLikeBtn from "./LikeDisLikeBtn"
import OtherBtn from "./OtherBtn"
import DownloadBtn from "./DownloadBtn"

function Buttons() {
  return (
    <div className="flex items-center justify-between w-full">
      <SubscribeBtn />
      <div className="flex items-center space-x-2">
        <LikeDisLikeBtn />
        <ShareBtn />
        <DownloadBtn />
        <OtherBtn />
      </div>
    </div>
  )
}

export default Buttons
