import { Button, Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { appName } from "~/config/data";

function Footer() {
  const [inputVal, setInputVal] = useState<string>("");

  const onEmailSubmit = () => {
    // TODO: send email id to api
    setInputVal("");
    // TODO: show a toast
  };

  return (
    <div className="z-10 mt-10 flex w-screen items-center justify-around">
      <div>
        <Image
          src="/main.png"
          alt={appName}
          width={180}
          height={180}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col">
        <Link href="/">BLOG</Link>
        <Link href="/">COMMUNITY</Link>
        <Link href="/">CONTACT</Link>
        <Link href="/">TWITTER</Link>
      </div>
      <div className="flex flex-col">
        <Link href="/">LINKEDIN</Link>
        <Link href="/">CALENDER</Link>
        <Link href="/">DISCORD</Link>
        <Link href="/">DOCS</Link>
      </div>
      <div>
        <p className="mb-4">Join our mailing list for updates</p>
        <div className="flex h-max">
          <Input
            placeholder="Email"
            className="h-max"
            allowClear
            value={inputVal}
            style={{ width: "240px" }}
            onChange={(event) => setInputVal(event.target.value)}
          />
          <Button className="text-sm text-white" onClick={onEmailSubmit}>
            Get updates
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
