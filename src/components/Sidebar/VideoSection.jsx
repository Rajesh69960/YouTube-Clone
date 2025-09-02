import React from "react"
import { GoHomeFill } from "react-icons/go"
import { SiYoutubeshorts } from "react-icons/si"
import { MdOutlineSubscriptions } from "react-icons/md"

function VideoSection() {
  return (
    <div className="flex flex-col gap-1 px-4 py-2">
      <div className="flex items-center gap-6 bg-gray-200 rounded-lg p-[10px]">
        <i className="text-xl">
          <GoHomeFill />
        </i>
        <span>Home</span>
      </div>
      <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg p-2">
        <i className="text-xl">
          <SiYoutubeshorts />
        </i>
        <span>Shorts</span>
      </div>
      <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg p-2">
        <i className="text-xl">
          <MdOutlineSubscriptions />
        </i>
        <span>Subscriptions</span>
      </div>
    </div>
  )
}

export default VideoSection
