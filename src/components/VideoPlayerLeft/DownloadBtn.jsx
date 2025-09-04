import React from "react"
import { LiaDownloadSolid } from "react-icons/lia"

function DownloadBtn() {
  return (
    <div>
      <button className="flex items-center space-x-2 px-3 py-2 bg-gray-200 font-semibold rounded-full">
        <LiaDownloadSolid />
        <span>Download</span>
      </button>
    </div>
  )
}

export default DownloadBtn
