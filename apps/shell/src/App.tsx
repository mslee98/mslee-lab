import LeftPanel from "@components/LeftPanel";
import RightPanel from "@components/RightPanel";

import { MobileProvider } from "@contexts/MobileContext";
import Giscus from "@giscus/react";
import { useState } from "react";

import { bar3Icon, arrowsUpDownIcon } from "share";

export default function App() {
  const [leftHeight, setLeftHeight] = useState<number>(320);

  const startResize = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();

    const handle = e.currentTarget;
    handle.setPointerCapture(e.pointerId);

    const startY = e.clientY;
    const startHeight = leftHeight;

    const onPointerMove = (e: PointerEvent) => {
      const delta = e.clientY - startY;
      setLeftHeight(Math.min(600, Math.max(100, startHeight + delta)));
    };

    const onPointerUp = (e: PointerEvent) => {
      handle.releasePointerCapture(e.pointerId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
    };

    document.body.style.userSelect = "none";
    document.body.style.cursor = "row-resize";
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  };

  return (
    <MobileProvider>
      {/* 배경 */}
      <div className="min-h-screen bg-[#f7f8fa] flex justify-center overflow-hidden">
        {/* 1280 고정 */}
        <div className="w-[1280px] flex flex-col h-screen">
          {/* Content */}
          <div className="flex-1 overflow-hidden md:px-6 md:py-4">
            <div className="h-full flex gap-8">
              {/* Left - mobild 환경에서 LeftMenu는 감춘다*/}
              <div className="w-[600px] shrink-0 hidden md:flex flex-col h-full overflow-hidden">
                {/* Header */}
                <header className="h-14 shrink-0 flex items-center font-semibold text-lg drop-shadow-lg">
                  Ms Mobile Lab
                  <div></div>
                </header>

                {/* Top */}
                <div
                  style={{ height: leftHeight }}
                  className="overflow-hidden bg-slate-50 rounded-lg p-2 mb-2"
                >
                  <LeftPanel />
                </div>

                {/* Resize Handle */}
                <div
                  className="
                    h-3
                    cursor-row-resize
                    flex items-center justify-center
                    select-none
                    bg-white
                    mb-2
                    relative
                  "
                  onPointerDown={startResize}
                >
                  <div
                    className="
                      flex items-center justify-center
                      w-10 h-4
                      rounded-full
                      bg-gray-200
                      shadow-sm
                      transition-all
                      duration-150
                      hover:bg-gray-300
                      active:bg-gray-300
                    "
                  >
                    <img
                      src={arrowsUpDownIcon}
                      className="w-4 h-4 opacity-60 pointer-events-none"
                    />
                  </div>
                </div>

                {/* Bottom (남은 영역만 사용) */}
                <div className="flex-1 overflow-hidden bg-slate-50 rounded-lg px-2 py-4">
                  <Giscus
                    repo="mslee98/mslee-lab"
                    repoId="R_kgDOQ8kmkw"
                    category="General"
                    categoryId="DIC_kwDOQ8kmk84C1n1h"
                    mapping="pathname"
                    reactionsEnabled="0"
                    inputPosition="top"
                    theme="light_protanopia"
                    lang="ko"
                  />
                </div>
              </div>

              {/* Right Panel */}
              <div className="flex-1 flex flex-col overflow-hidden">
                {/* Mobile Header */}
                <header className="h-14 shrink-0 flex items-center justify-between px-4 border-b border-gray-300 md:hidden">
                  <span className="font-semibold text-lg">Ms Mobile Lab</span>

                  <button
                    type="button"
                    className="p-2 rounded-md active:bg-gray-200"
                    aria-label="Open menu"
                  >
                    <img src={bar3Icon} alt="menu" className="w-6 h-6" />
                  </button>
                </header>

                {/* Content */}
                <div className="flex-1 overflow-hidden p-4 md:p-0">
                  <RightPanel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MobileProvider>
  );
}
