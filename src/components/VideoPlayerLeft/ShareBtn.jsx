import React from "react"
import { PiShareFatThin } from "react-icons/pi"

function ShareBtn() {
  return (
    <div>
      <button className="flex items-center space-x-2 px-3 py-2 bg-gray-200 font-semibold rounded-full">
        <PiShareFatThin className="text-[22px] " /> <span>Share</span>
      </button>
    </div>
  )
}

export default ShareBtn
