import React from "react"
import { CiSearch } from "react-icons/ci"
import { useState } from "react"

function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle the search action here
    alert(`Searching for: ${searchTerm}`)
  }
  return (
    <form
      className="flex items-center justify-between rounded-full border-1 border-gray-300 w-full max-w-xl"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
        className="flex-1 pl-4 bg-transparent outline-none text-gray-700 placeholder-gray-400"
      />
      <button
        type="submit"
        className="text-gray-600 rounded-r-full bg-gray-200 px-4 py-2"
      >
        <CiSearch className="text-2xl " />
      </button>
    </form>
  )
}

// <div className="border-1 rounded-full grow-7 flex  items-center py-1 px-2 justify-between ">
//   <input type="text" className="" placeholder="Search" />
//   <CiSearch className="text-xl bg-gray-200" />
// </div>

export default Searchbar
