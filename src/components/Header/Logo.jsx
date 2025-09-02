import { RxHamburgerMenu } from "react-icons/rx"
import youtubeLogo from "../../../public/youtube.png"

function Logo() {
  return (
    <div className="flex gap-6 items-center w-[15%] mt-1">
      <div className="text-[22px] opacity-70 ">
        <RxHamburgerMenu />
      </div>
      <section className="flex gap-1 items-center text-xl">
        <img className="h-7" src={youtubeLogo} alt="Youtube Logo" />
        <span className="font-bold text-lg font-['Oswald', 'sans-serif'] w-80 whitespace-nowrap overflow-hidden text-ellipsis">
          YouTube
          <sup className="text-xs ml-1 opacity-70">IN</sup>
        </span>
      </section>
    </div>
  )
}

export default Logo
