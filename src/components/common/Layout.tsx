import React, { type ReactNode } from "react";
import SideNav from "./SideNav";

interface LayoutProps {
  children: ReactNode;
  page: string;
}

function Layout({ children, page }: LayoutProps) {
  return (
    <div className="flex w-screen">
      <SideNav />
      <div className="flex h-screen w-full flex-col">
        <div className="flex h-[8vh] w-full items-center justify-between border-b border-gray-800 p-4">
          <span className="select-none rounded-lg border border-gray-500 px-4 py-1 text-[#1673fe]">
            {page}
          </span>

          {/* @ts-ignore */}
          {/* <span>{`Hi ${user?.viewer?.user?.name}`}</span> */}
        </div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
