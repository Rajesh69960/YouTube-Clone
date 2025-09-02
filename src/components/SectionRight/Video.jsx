import React from "react"

function Video({ video }) {
  function customFormatNumber(num) {
    if (num < 1000) {
      return num.toString()
    } else if (num >= 1000 && num < 10000) {
      return (num / 1000).toFixed(1) + "k"
    } else {
      // Convert number to string to get first two digits
      const numStr = num.toString()
      return numStr.substring(0, 2) + "k"
    }
  }

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 pt-2">
      <div key={video.videoId} className="flex flex-col ">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className=" mb-2 rounded-xl"
        />
        <section className="flex gap-2">
          <div className=" w-10 h-10 bg-gray-300 rounded-full mb-2 overflow-hidden flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1756707706543-6a17023abd13?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className=" w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p>
              {video.title} | <span>{video.description}</span>
            </p>
            <p className="text-[14px] text-gray-600">{video.uploader}</p>
            <p className="text-[14px] text-gray-600">
              {customFormatNumber(video.views)} views .{" "}
              <span>{video.uploadDate}</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Video
