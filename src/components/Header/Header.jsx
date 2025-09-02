import React from "react"
import Logo from "./Logo"
import Searchbar from "./Searchbar"
import SignIn from "./SignIn"

function Header() {
  return (
    <div className="flex items-center justify-between gap-10 px-4 mt-1 ">
      <Logo />
      <Searchbar />
      <SignIn />
    </div>
  )
}

export default Header
