import { Bars3Icon } from "@heroicons/react/24/outline";
import { ConnectButton } from "../ConnectButton";

export function Header({ setSidebarOpen }: { setSidebarOpen: any }) {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 lg:pl-72">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <div className="relative flex flex-1" />
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}
