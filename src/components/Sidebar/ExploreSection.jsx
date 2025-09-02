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
      <section className="flex items-center gap-4 px-4 py-2">
        <p className="font-medium">Explore</p>
      </section>
      <section className="flex flex-col gap-6 p-4">
        <div className="flex items-center gap-4">
          <i className="text-xl">
            <RiShoppingBag4Line />
          </i>
          <span>Shopping</span>
        </div>
        <div className="flex items-center gap-4">
          <i className="text-xl">
            <IoMusicalNotesOutline />
          </i>
          <span>Music</span>
        </div>
        <div className="flex items-center gap-4">
          <i className="text-xl">
            <PiFilmSlateBold />
          </i>
          <span>Movies</span>
        </div>
        <div className="flex items-center gap-4">
          <i className="text-xl">
            <HiMiniSignal />
          </i>
          <span>Live</span>
        </div>
        <div className="flex items-center gap-4">
          <i className="text-xl">
            <SiYoutubegaming />
          </i>
          <span>Gaming</span>
        </div>
        <div className="flex items-center gap-4">
          <i className="text-xl">
            <MdOutlineNewspaper />
          </i>
          <span>News</span>
        </div>
        <div className="flex items-center gap-4">
          <i className="text-xl">
            <GrTrophy />
          </i>
          <span>Sports</span>
        </div>
        <div className="flex items-center gap-4">
          <i className="text-xl">
            <GiGraduateCap />
          </i>
          <span>Courses</span>
        </div>
        <div className="flex items-center gap-4">
          <i className="text-xl">
            <GiHanger />
          </i>
          <span>Fashion & Beauty</span>
        </div>
        <div className="flex items-center gap-4">
          <i className="text-xl">
            <MdOutlinePodcasts />
          </i>
          <span>podCasts</span>
        </div>
      </section>
    </div>
  )
}

export default ExploreSection
