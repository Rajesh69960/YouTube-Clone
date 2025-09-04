import React from "react"

import Searchbar from "./Searchbar"
import SignIn from "./SignIn"
import Logo from "./Logo"

function Header() {
  return (
    <div className="flex items-center justify-between space-x-4 gap-2 h-15 px-6 fixed py-2 w-full bg-white z-10">
      <Logo />
      <Searchbar />
      <SignIn />
    </div>
  )
}

export default Header
