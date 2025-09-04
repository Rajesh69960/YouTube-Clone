import React, { useState } from "react"
import { AiOutlineLike } from "react-icons/ai"
import { BiDislike } from "react-icons/bi"

function LikeDisLikeBtn() {
  const [likeCount, setLikeCount] = useState(0)
  return (
    <div className="flex items-center space-x-2 px-2 py-2   bg-gray-200 rounded-full">
      <button className="flex items-center justify-center space-x-2  ">
        {" "}
        <AiOutlineLike
          className="text-[22px]"
          onClick={() => setLikeCount(likeCount + 1)}
        />{" "}
        <span className="font-semibold">{likeCount} </span>
      </button>

      <button className="flex items-center justify-center px-3 border-l-1">
        <BiDislike
          className="text-[22px]"
          onClick={() => setLikeCount(likeCount - 1)}
        />
      </button>
    </div>
  )
}

export default LikeDisLikeBtn
