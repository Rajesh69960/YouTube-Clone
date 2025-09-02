import React from "react"
import { GrHistory } from "react-icons/gr"
import { MdPlaylistPlay } from "react-icons/md"
import { RiVideoLine } from "react-icons/ri"
import { MdOutlineWatchLater } from "react-icons/md"
import { AiOutlineLike } from "react-icons/ai"
import { LiaDownloadSolid } from "react-icons/lia"
import { TbMathGreater } from "react-icons/tb"

function YouSection() {
  return (
    <div>
      <section className="flex items-center gap-2 px-4 py-2">
        <p className="font-medium">You</p>
        <i className="text-sm mt-1">
          <TbMathGreater />
        </i>
      </section>
      <section className="flex flex-col gap-6 p-4 ">
        <div className="flex items-center gap-4">
          <i className="text-xl">
            <GrHistory />
          </i>
          <span>History</span>
        </div>
        <div className="flex items-center gap-4">
          <i className="text-xl">
            <MdPlaylistPlay />
          </i>
          <span>PlayList</span>
        </div>
        <div className="flex items-center gap-4">
          <i className="text-xl">
            <RiVideoLine />
          </i>
          <span>Your Videos</span>
        </div>
        <div className="flex items-center gap-4">
          <i className="text-xl">
            <MdOutlineWatchLater />
          </i>
          <span>Watch Later</span>
        </div>
        <div className="flex items-center gap-4">
          <i className="text-xl">
            <AiOutlineLike />
          </i>
          <span>Liked</span>
        </div>
        <div className="flex items-center gap-4">
          <i className="text-xl">
            <LiaDownloadSolid />
          </i>
          <span>Downloads</span>
        </div>
      </section>
    </div>
  )
}

export default YouSection
