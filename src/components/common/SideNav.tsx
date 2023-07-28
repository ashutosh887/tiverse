import { Tag, Tooltip } from "antd";
import { appName, appVersion } from "~/config/data";
import { CgFeed, CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { MdOutlineEventAvailable } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { TfiWrite } from "react-icons/tfi";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineCalendar } from "react-icons/ai";

const sections = [
  {
    name: "Menu",
    children: [
      {
        name: "Dashboard",
        logo: <RxDashboard />,
        route: "/dashboard",
      },
      {
        name: "Events",
        logo: <MdOutlineEventAvailable />,
        route: "/events",
      },
      {
        name: "Feed",
        logo: <CgFeed />,
        route: "/feed",
      },
      {
        name: "Blogs",
        logo: <TfiWrite />,
        route: "/blogs",
      },
      {
        name: 'Calendar',
        logo: <AiOutlineCalendar />,
        route: '/calendar',
      },
    ],
  },
  {
    children: [
      {
        name: "Profile",
        logo: <CgProfile />,
        route: "/profile",
      },
      {
        name: "Settings",
        logo: <FiSettings />,
        route: "/settings",
      },
    ],
  },
];

function SideNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-[20vw] flex-col border-r border-gray-800">
      <div className="flex justify-center items-center h-[8vh]">
        <button
          type="button"
          className="flex px-4 items-center h-full w-full"
          onClick={() => void router.push("/dashboard")}
        >
          <Image
            src="/main.png"
            alt="sbg"
            width={45}
            height={45}
            className="object-contain"
          />
          <span className="text-2xl ml-2 font-semibold">{appName}</span>
          <span className="ml-1 self-end px-1 py-1/2 m-2 flex items-end text-xs rounded-xl font-semibold">{appVersion}</span>
        </button>
      </div>

      <div className="m-4 flex h-full flex-col justify-between rounded-lg border border-gray-800 p-2">
        {sections.map(({ name, children }, idx) => {
          return (
            <div key={idx} className="flex flex-col space-y-2">
              <span className="px-4 text-sm text-gray-500">{name}</span>
              {children.map(({ name: childName, route, logo }, index) => {
                return (
                  <Tooltip title="Services" placement="right" key={index}>
                    <Link
                      className={`mx-2 flex h-8 items-center space-x-2 rounded-lg p-4 ${
                        pathname.startsWith(route) &&
                        "bg-[#192A42] text-[#1673fe]"
                      }`}
                      href={route}
                    >
                      <span>{logo}</span>
                      <span>{childName}</span>
                    </Link>
                  </Tooltip>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SideNav;
