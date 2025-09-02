import React from "react"
import { FaRegUserCircle } from "react-icons/fa"

function SignIn() {
  return (
    <div className=" flex items-center justify-center gap-1 border-1 border-gray-300 text-cyan-400 rounded-full py-1 px-2">
      <FaRegUserCircle />
      <section>Sign in</section>
    </div>
  )
}

export default SignIn
