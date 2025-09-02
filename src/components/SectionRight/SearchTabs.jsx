import React from "react"

function SearchTabs() {
  const tabs = ["All", "Videos", "Channels", "Playlists", "Movies", "Shows"]
  return (
    <div
      className=" w-full flex space-x-4 px-4 py-2 fixed bg-white z-10
    "
    >
      {tabs.map((tab) => {
        return (
          <div className="">
            <button className="px-3 py-1 rounded-lg bg-gray-100 font-semibold">
              {tab}
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default SearchTabs
