import LeftPanel from "@components/LeftPanel";
import RightPanel from "@components/RightPanel";

import { MobileProvider } from "@contexts/MobileContext";
import Giscus from "@giscus/react";

export default function App() {
  return (
    // 디바이스 선택 | 앱 선택에 대한 Context, props drilling 우려되어 Context 대체
    <MobileProvider>
      <div className="min-h-screen bg-[#f7f8fa] flex justify-center">
        <div className="flex flex-col md:flex-row w-full max-w-[1250px] gap-8 md:gap-20 px-4 md:px-8">
          <div className="w-full md:w-[600px] shrink-0 h-screen flex flex-col">
            {/* Left Panel Header */}
            <h1 className="text-lg font-semibold py-6 px-2 shrink-0">
              Ms Mobile Lab
            </h1>

            {/* LeftPanel Content (스크롤 1) */}
            <div className="flex-1 overflow-y-auto scroll-pane bg-slate-50 rounded-lg p-2 mb-2">
              <LeftPanel />
            </div>

            <div className="mt-2" />

            {/* /Left Panel Giscus */}
            <div className="h-[600px] overflow-y-auto scroll-pane bg-slate-50 rounded-lg px-2 py-4">
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

          <div className="flex-1 flex justify-center items-center overflow-hidden">
            <RightPanel />
          </div>
        </div>
      </div>
    </MobileProvider>
  );
}
