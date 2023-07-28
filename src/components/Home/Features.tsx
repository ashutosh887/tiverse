
import {RiComputerLine} from "react-icons/ri"
import {CiStreamOn} from "react-icons/ci"
import {LiaMoneyCheckSolid} from "react-icons/lia"
import {BsQrCodeScan} from "react-icons/bs"
import {MdGroups2} from "react-icons/md"
import {PiGameController} from "react-icons/pi"

export const features = [
  {
    title: "Integrated Ticketing System",
    icon: <RiComputerLine size={50} />,
  },
  {
    title: "Live Streaming and Virtual Events",
    icon: <CiStreamOn size={50} />
  },
  {
    title: "Blog Monetization",
    icon: <LiaMoneyCheckSolid size={50} />
  },
  {
    title: "Community Engagement",
    icon: <MdGroups2 size={50} />
  },
  {
    title: "Event Gamification",
    icon: <PiGameController size={50} />
  },
  {
    title: "QR Code Check-ins",
    icon: <BsQrCodeScan size={50} />
  },
];

function Features() {
  return (
    <div className="z-10 flex h-[80vh] flex-col items-center max-w-7xl w-full">
    <h1 className="m-16 text-3xl font-bold">Features</h1>

    <div className="mt-2 flex flex-wrap items-center justify-between w-full space-y-4 text-center">
      {features.map(({title, icon}, idx: number) => (
        <div key={idx} className="flex flex-col w-[30%] space-y-6 items-center mx-4 my-8 text-gray-300 hover:text-blue-500 ctransition cursor-pointer">
          {icon}
          <p className="text-xl">
        {title}
      </p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Features;
