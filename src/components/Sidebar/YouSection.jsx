import React from "react"
import { GrHistory } from "react-icons/gr"
import { MdPlaylistPlay } from "react-icons/md"
import { RiVideoLine } from "react-icons/ri"
import { MdOutlineWatchLater } from "react-icons/md"
import { AiOutlineLike } from "react-icons/ai"
import { LiaDownloadSolid } from "react-icons/lia"
import { PiGreaterThanThin } from "react-icons/pi"
import { TbMathGreater } from "react-icons/tb"

function YouSection() {
  return (
    <div>
      <section className="flex items-center gap-2 pl-6 pt-6 pb-2">
        <p className="font-medium text-base">You</p>
        <i className="text-sm mt-1">
          <PiGreaterThanThin />
        </i>
      </section>
      <section className="flex flex-col gap-1 px-4 pb-2">
        <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg p-2">
          <i className="text-lg">
            <GrHistory />
          </i>
          <span>History</span>
        </div>
        <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg p-2">
          <i className="text-lg">
            <MdPlaylistPlay />
          </i>
          <span>Playlists</span>
        </div>
        <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg p-2">
          <i className="text-lg">
            <RiVideoLine />
          </i>
          <span>Your Videos</span>
        </div>
        <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg p-2">
          <i className="text-lg">
            <MdOutlineWatchLater />
          </i>
          <span>Watch Later</span>
        </div>
        <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg p-2">
          <i className="text-lg">
            <AiOutlineLike />
          </i>
          <span>Liked</span>
        </div>
        <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg p-2">
          <i className="text-lg">
            <LiaDownloadSolid />
          </i>
          <span>Downloads</span>
        </div>
      </section>
    </div>
  )
}

export default YouSection
