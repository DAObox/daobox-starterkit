import { useState } from "react";
import { MobileSidebar } from "./MobileSidebar";
import { Header } from "./Header";
import { DesktopSidebar } from "./DesktopSidebar";
import { MainView } from "./MainView";

export function Appshell({ children }: { children: any }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <MobileSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <DesktopSidebar />

      <Header setSidebarOpen={setSidebarOpen} />
      <MainView>{children}</MainView>
    </div>
  );
}
