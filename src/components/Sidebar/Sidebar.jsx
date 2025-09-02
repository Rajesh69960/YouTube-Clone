import React from "react"
import VideoSection from "./VideoSection"
import YouSection from "./YouSection"
import ExploreSection from "./ExploreSection"
function Sidebar() {
  return (
    <div className="w-[16%] mt-15 text-sm h-screen hover:overflow-y-auto ">
      <VideoSection />
      <hr className="text-gray-300" />
      <YouSection />
      <hr className="text-gray-300" />
      <ExploreSection />
      <hr className="text-gray-300" />
    </div>
  )
}

export default Sidebar
