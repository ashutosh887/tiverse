import { Button, Tooltip } from "antd";
import { appName } from "~/config/data";
import { AiOutlineArrowRight, AiOutlineGithub } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { signIn, signOut, useSession } from "next-auth/react";

function HomeNav() {
  const router = useRouter();
  const { data: sessionData } = useSession();

  return (
    <nav className="top-5 z-20 m-5 w-full max-w-7xl rounded-xl border border-[#505050] bg-[#1F232C] bg-opacity-30 text-white backdrop-blur-lg backdrop-filter firefox:bg-opacity-90 sm:sticky">
      <div className="mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/main.png"
            alt={appName}
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-2xl font-semibold">{appName}</span>
        </Link>

        <section className="z-10 flex items-center text-lg text-white">
          <Button className="cpbutton !container" onClick={() => void signIn()}>
            <AiOutlineGithub className="mr-2" size={24} />
            Signin
          </Button>
        </section>
      </div>
    </nav>
  );
}

export default HomeNav;
