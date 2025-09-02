import React from "react"
import { RiShoppingBag4Line } from "react-icons/ri"
import { IoMusicalNotesOutline } from "react-icons/io5"
import { PiFilmSlateBold } from "react-icons/pi"
import { HiMiniSignal } from "react-icons/hi2"
import { SiYoutubegaming } from "react-icons/si"
import { MdOutlineNewspaper } from "react-icons/md"
import { GrTrophy } from "react-icons/gr"
import { GiGraduateCap } from "react-icons/gi"
import { GiHanger } from "react-icons/gi"
import { MdOutlinePodcasts } from "react-icons/md"

function ExploreSection() {
  return (
    <div>
      <section className="flex items-center gap-4 pl-6 pt-6 pb-2 ">
        <p className="font-medium text-base">Explore</p>
      </section>
      <section className="flex flex-col gap-2 px-4 pb-2">
        <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg p-2">
          <i className="text-lg">
            <RiShoppingBag4Line />
          </i>
          <span>Shopping</span>
        </div>
        <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg p-2">
          <i className="text-lg">
            <IoMusicalNotesOutline />
          </i>
          <span>Music</span>
        </div>
        <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg p-2">
          <i className="text-lg">
            <PiFilmSlateBold />
          </i>
          <span>Movies</span>
        </div>
        <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg p-2">
          <i className="text-lg">
            <HiMiniSignal />
          </i>
          <span>Live</span>
        </div>
        <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg p-2">
          <i className="text-lg">
            <SiYoutubegaming />
          </i>
          <span>Gaming</span>
        </div>
        <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg p-2">
          <i className="text-lg">
            <MdOutlineNewspaper />
          </i>
          <span>News</span>
        </div>
        <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg p-2">
          <i className="text-lg">
            <GrTrophy />
          </i>
          <span>Sports</span>
        </div>
        <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg p-2">
          <i className="text-lg">
            <GiGraduateCap />
          </i>
          <span>Courses</span>
        </div>
        <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg p-2">
          <i className="text-lg">
            <GiHanger />
          </i>
          <span>Fashion & Beauty</span>
        </div>
        <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg p-2">
          <i className="text-lg">
            <MdOutlinePodcasts />
          </i>
          <span>podCasts</span>
        </div>
      </section>
    </div>
  )
}

export default ExploreSection
