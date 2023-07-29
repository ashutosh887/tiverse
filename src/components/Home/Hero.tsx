import { Button } from "antd";
import ScrollButton from "../common/ScrollButton";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useRouter } from "next/router";
import { heroSecondary, serviceName } from "~/config/data";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

function Hero() {
  const router = useRouter();
  const { data: sessionData } = useSession();

  useEffect(() => {
    if (sessionData?.user) {
      void router.push("/dashboard");
    }
  }, [sessionData, router]);

  return (
    <div className="flex h-[85vh] w-[70%] flex-col items-center justify-center sm:w-[70%] md:w-[60%]">
      <h1 className="z-10 text-center text-4xl font-bold tracking-wider sm:text-5xl">
        Unlock the{" "}
        <span className="glow bg-gradient-to-b from-white via-[#AFCFFF] to-[#AFCFFF] bg-clip-text text-transparent">
          Power of Engagement
        </span>{" "}
        in your events
      </h1>

      <p className="z-10 mt-8 w-[80%] text-center text-sm text-[#8B8B8B] sm:text-base">
        {heroSecondary}
      </p>

      {sessionData?.user.name && (
        <div className="mt-8 flex flex-col items-center">
          <span className="m-2 text-sm text-white">
            Welcome, {sessionData.user.name}!
          </span>

          <Button
            type="primary"
            size="large"
            className="cpbutton container w-max"
            onClick={() => void router.push("/dashboard")}
          >
            Go to Dashboard
            <AiOutlineArrowRight />
          </Button>

        </div>
      )}

      <div className="z-10 mt-12">
        <div className="flex items-center justify-center rounded-xl border border-gray-500 bg-[#1F232C] bg-opacity-30 bg-gradient-to-r from-[#20242C] via-[#342034] to-[#20242C] px-2 py-2 backdrop-blur-lg backdrop-filter sm:py-1">
          <span className="mx-2 text-xs sm:text-lg">Powered By</span>
          <Image alt="TiDB" height={30} width={30} src="/service.png" />
          <span className="mx-2 text-xs font-bold text-gray-300 sm:text-lg">
            {serviceName}
          </span>
        </div>
      </div>

      <div className="z-10 hidden sm:mt-24 sm:inline">
        <ScrollButton />
      </div>
    </div>
  );
}

export default Hero;
