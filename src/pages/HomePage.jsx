import React from "react"
import Header from "../components/Header/Header"
import Sidebar from "../components/Sidebar/Sidebar"
import SectionRight from "../components/SectionRight/SectionRight"

function HomePage() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        <SectionRight />
      </div>
    </div>
  )
}

export default HomePage
