import LeftPanel from "@components/LeftPanel";
import RightPanel from "@components/RightPanel";

import { MobileProvider } from "@contexts/MobileContext";
import Giscus from "@giscus/react";
import { useState } from "react";

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
          {/* Header */}
          <header className="h-14 shrink-0 flex items-center px-6 font-semibold text-lg bg-white border-b">
            Ms Mobile Lab
          </header>

          {/* Content */}
          <div className="flex-1 overflow-hidden px-6 py-4">
            <div className="h-full flex gap-8">
              {/* Left */}
              <div className="w-[600px] shrink-0 flex flex-col h-full overflow-hidden">
                {/* Top */}
                <div
                  style={{ height: leftHeight }}
                  className="overflow-hidden bg-slate-50 rounded-lg p-2 mb-2"
                >
                  <LeftPanel />
                </div>

                {/* Resize Handle */}
                <div
                  className="h-3 cursor-row-resize flex items-center justify-center select-none bg-gray-200 mb-2"
                  onPointerDown={startResize}
                >
                  <div className="w-10 h-1 rounded-full bg-slate-300" />
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

              {/* Right */}
              <div className="flex-1 overflow-hidden flex justify-center items-center">
                <RightPanel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MobileProvider>
  );
}
