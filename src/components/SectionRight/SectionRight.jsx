import React from "react"
import SearchTabs from "./SearchTabs"
import VideoLists from "./VideoLists"

function SectionRight() {
  return (
    <div className="w-[84%] pt-15 h-screen overflow-y-auto ">
      <SearchTabs />
      <VideoLists />
    </div>
  )
}

export default SectionRight
