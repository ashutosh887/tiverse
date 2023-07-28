import { Tooltip } from "antd";
import { appName } from "~/config/data";
import { CgFeed, CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { MdOutlineEventAvailable } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { TfiWrite } from "react-icons/tfi";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
      // {
      //   name: 'Docs',
      //   logo: <RiFilePaper2Line size={20} />,
      //   route: routes.DOCS,
      // },
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
      <div className="flex h-[8vh] items-center justify-center">
        <button
          type="button"
          className="flex h-full w-full items-center px-4"
          onClick={() => void router.push("/dashboard")}
        >
          <Image
            src="/logo.png"
            alt="sbg"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-2xl font-semibold">{appName}</span>
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
