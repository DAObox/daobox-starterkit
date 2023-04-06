import { ConnectButton } from "@rainbow-me/rainbowkit";

export function Navbar() {
  return (
    <header className="bg-gradient-to-r from-sky-800 to-cyan-600 pb-24">
      <div className="relative flex flex-wrap items-center justify-between mx-auto  max-w-7xl px-8">
        <Logo />
        <ConnectButton />
        <div className="w-full py-4 border-white border-opacity-20" />
      </div>
    </header>
  );
}

export function Logo() {
  return (
    <div className=" left-0 flex-shrink-0 py-5 lg:static">
      <a href="/">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=200"
          alt=""
        />
      </a>
    </div>
  );
}
