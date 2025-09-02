import React from "react"
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import SearchTabs from "./components/SectionRight/SearchTabs"
import VideoSection from "./components/Sidebar/VideoSection"
import SectionRight from "./components/SectionRight/SectionRight"
function App() {
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

export default App
