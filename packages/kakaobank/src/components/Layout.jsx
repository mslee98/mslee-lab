import { Outlet } from 'react-router-dom';
import { useAutoHideScrollbar } from '../utils/useAutoHideScrollbar';

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
          <Outlet /> {/* 🔥 여기로 페이지가 들어옴 */}
        </main>
      </div>

      <BottomNav />
    </div>
  );
}

function BottomNav() {
  return (
    <nav className="
      h-20
      bg-[#1c1c1e]
      border-t border-white/10
      flex justify-around items-center
      text-white/60
      text-xs
    ">
      {['홈', '혜택', 'AI', '상품', '전체'].map(label => (
        <button key={label} className="flex flex-col items-center gap-1">
          <div className="w-6 h-6 bg-white/20 rounded-md" />
          {label}
        </button>
      ))}
    </nav>
  );
}
