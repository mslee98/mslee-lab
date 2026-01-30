import LeftPanel from "@components/LeftPanel";
import RightPanel from "@components/RightPanel";

import { MobileProvider } from "@contexts/MobileContext";

export default function App() {
  return (
    // 디바이스 선택 | 앱 선택에 대한 Context, props drilling 우려되어 Context 대체
    <MobileProvider>
      <div className="min-h-screen bg-[#f7f8fa] flex justify-center">
        <div className="flex w-full max-w-[1200px] gap-20 px-8">
          <div className="w-[360px] shrink-0">
            <LeftPanel />
          </div>

          <div className="flex-1 flex justify-center items-center">
            <RightPanel />
          </div>
        </div>
      </div>
    </MobileProvider>
  );
}
