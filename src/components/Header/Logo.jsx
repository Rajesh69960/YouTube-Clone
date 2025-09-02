import { RxHamburgerMenu } from "react-icons/rx"
import youtubeLogo from "../../../public/youtube.png"

function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <div className="text-2xl opacity-70 mr-2">
        <RxHamburgerMenu />
      </div>
      <section className="flex gap-1 items-center text-xl">
        <img className="h-8" src={youtubeLogo} alt="Youtube Logo" />
        <span className="font-bold font-['Roboto Condensed', sans-serif]">
          YouTube
          <sup className="text-xs ml-1 opacity-70">IN</sup>
        </span>
      </section>
    </div>
  )
}

export default Logo
