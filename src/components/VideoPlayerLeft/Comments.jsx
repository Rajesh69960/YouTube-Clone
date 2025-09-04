import React, { useState } from "react"
import { MdOutlineSort } from "react-icons/md"
import { BsEmojiGrin } from "react-icons/bs"

function Comments() {
  const [showBtn, setShowBtn] = useState(false)
  return (
    <div className="mt-6">
      <section className="flex space-x-8">
        <h1 className="text-xl font-semibold">2765 Comments</h1>
        <p className="flex items-center space-x-2">
          <MdOutlineSort className="text-2xl text-gray-600" />
          <span className="font-semibold">Sort by</span>
        </p>
      </section>
      <section className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center mt-4">
          R
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="Add a Comment"
            className=" w-full border-b-1 border-gray-200 outline-none"
            onClick={() => setShowBtn(true)}
          />
        </div>
      </section>
      {showBtn ? (
        <div className="flex space-x-2 justify-between items-center pl-12">
          <div>
            <BsEmojiGrin className="text-[22px]" />
          </div>
          <div className="flex space-x-2">
            <button
              className="px-3 py-2 hover:bg-gray-200 hover:rounded-full"
              onClick={() => setShowBtn(false)}
            >
              Cancel
            </button>
            <button
              disabled
              className="px-3 py-2 hover:bg-gray-200 hover:rounded-full"
            >
              Comment
            </button>
          </div>
        </div>
      ) : null}
      <section>
        <p className="font-semibold">
          <span> emial@gamail.com </span>
          <span className="text-gray-600 text-xs">1 month ago</span>
        </p>
        <p>some random comment</p>
      </section>
    </div>
  )
}

export default Comments
