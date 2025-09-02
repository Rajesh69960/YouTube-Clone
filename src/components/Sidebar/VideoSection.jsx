import React from "react"
import { GoHomeFill } from "react-icons/go"
import { SiYoutubeshorts } from "react-icons/si"
import { MdOutlineSubscriptions } from "react-icons/md"

function VideoSection() {
  return (
    <div className="flex flex-col gap-6 p-4">
      <div className="flex items-center gap-6">
        <i className="text-xl">
          <GoHomeFill />
        </i>
        <span>Home</span>
      </div>
      <div className="flex items-center gap-6">
        <i className="text-xl">
          <SiYoutubeshorts />
        </i>
        <span>Shorts</span>
      </div>
      <div className="flex items-center gap-6">
        <i className="text-xl">
          <MdOutlineSubscriptions />
        </i>
        <span>Subscription</span>
      </div>
    </div>
  )
}

export default VideoSection
