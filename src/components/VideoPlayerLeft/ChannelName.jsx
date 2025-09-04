import React from "react"

function ChannelName() {
  return (
    <div className="flex items-center justify-start space-x-4 ">
      <section className=" w-10 h-10 bg-gray-300 rounded-full mb-2 overflow-hidden flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1756707706543-6a17023abd13?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className=" w-full h-full rounded-full object-cover"
        />
      </section>
      <section className="flex flex-col mb-1">
        <div className="font-bold">ChannelName</div>
        <div className="text-xs text-gray-600">1M subscribers</div>
      </section>
    </div>
  )
}

export default ChannelName
