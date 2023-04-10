import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="pb-24 bg-gradient-to-r from-sky-800 to-cyan-600">
      <div className="relative flex flex-wrap items-center justify-between px-8 mx-auto max-w-7xl">
        <Logo />
        <div className="flex items-center space-x-2.5">
          <ConnectButton />
        </div>
        <div className="w-full py-4 border-white border-opacity-20" />
      </div>
    </header>
  );
}

export function Logo() {
  return (
    <div className="left-0 flex-shrink-0 py-5 lg:static">
      <Link href="/">
        <img
          className="w-auto h-8"
          src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=200"
          alt=""
        />
      </Link>
    </div>
  );
}
