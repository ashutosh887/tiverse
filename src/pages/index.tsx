"use client";
import Head from "next/head";
import About from "~/components/Home/About";
import Features from "~/components/Home/Features";
import Hero from "~/components/Home/Hero";
import HomeNav from "~/components/Home/HomeNav";
import VideoBG from "~/components/Home/VideoBG";
// import VideoBG from "~/components/Home/VideoBG";
import { appDescription, appName } from "~/config/data";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>{appName}</title>
        <meta name="description" content={appDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="cscrollbar relative flex w-full flex-col items-center scroll-smooth">
        <HomeNav />
        <Hero />
        <About />
        <Features />
        {/* <Footer /> */}
        <VideoBG />
      </main>
    </>
  );
}
