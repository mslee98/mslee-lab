import { useAutoHideScrollbar } from '../utils/useAutoHideScrollbar';

export default function MainScreen() {
  const scrollRef = useAutoHideScrollbar();

  return (
    <div className="w-full h-screen flex flex-col bg-gray-100 pt-8">
      {/* 콘텐츠 영역 */}
      <main className="auto-hide-scrollbar flex-1 overflow-y-auto p-4 touch-pan-y" ref={scrollRef}>
        <div className="h-full rounded-xl bg-white shadow flex items-center justify-center">
          <span className="text-gray-800 text-xl font-semibold">
            KakaoBank Content Area
          </span>
        </div>

        <div className="h-full rounded-xl bg-white shadow flex items-center justify-center">
          <span className="text-gray-800 text-xl font-semibold">
            KakaoBank Content Area
          </span>
        </div>
      </main>

      {/* 하단 메뉴바 */}
      <nav className="h-16 bg-white border-t flex justify-around items-center">
        <MenuItem label="홈" />
        <MenuItem label="계좌" />
        <MenuItem label="이체" />
        <MenuItem label="전체" />
      </nav>
    </div>
  );
}

function MenuItem({ label }) {
  return (
    <button className="flex flex-col items-center text-gray-500 hover:text-black">
      <div className="w-6 h-6 bg-gray-300 rounded mb-1" />
      <span className="text-xs">{label}</span>
    </button>
  );
}
