import { Outlet } from "react-router-dom";
import { useAutoHideScrollbar } from "@utils/useAutoHideScrollbar";
import BottomNav from "@components/layouts/BottomNav";

export default function Layout() {
  const scrollRef = useAutoHideScrollbar();

  return (
    <div className="w-full h-screen bg-[#1c1c1e] flex flex-col">
      {/* 공통 스크롤 영역 */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto overflow-x-hidden auto-hide-scrollbar"
      >
        <main className="px-4 pt-8 pb-24 space-y-6">
          {/* children */}
          <Outlet />
        </main>
      </div>

      <BottomNav />
    </div>
  );
}
