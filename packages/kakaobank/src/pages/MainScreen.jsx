import { useAutoHideScrollbar } from '../utils/useAutoHideScrollbar';
import QuickActions from '../components/home/QuickActions';

import hero from '../assets/logo/plus.svg'

// pr-[calc(1rem-3px)] 

export default function MainScreen() {
  const scrollRef = useAutoHideScrollbar();

  return (
    <div className="w-full h-screen bg-[#1c1c1e] flex flex-col">
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto auto-hide-scrollbar"
      >
        <main className="px-4 pt-8 pb-24 space-y-6">

          <QuickActions />

          {/* 계좌 카드 */}
          <div className="space-y-4">
            <MainAccountCard />
            <GroupAccountCard />
            <AccountCard isEmpty />
            <PlusCard/>
          </div>
        </main>
      </div>

      <BottomNav />
    </div>
  );
}

function MainAccountCard() {
  return (
    <div className="rounded-2xl bg-[#2c2c2e] p-5 text-white">
      
      {/* 상단 */}
      <div>
        <p className="text-sm opacity-70">
          이민성의 통장
          <span className="ml-2 text-xs bg-[#3a3a3c] px-2 py-0.5 rounded">
            비상금
          </span>
        </p>

        <p className="text-2xl font-bold mt-1">
          47,702,221원
        </p>

        {/* 출금가능 + 버튼 라인 */}
        <div className="flex justify-between items-center mt-2">
          <p className="text-xs opacity-50">
            출금가능 47,702,221원
          </p>

          <div className="flex gap-2">
            <button className="text-xs bg-[#3a3a3c] px-3 py-1 rounded-full">
              카드
            </button>
            <button className="text-xs bg-[#3a3a3c] px-3 py-1 rounded-full">
              이체
            </button>
          </div>
        </div>
      </div>

      <div className="w-full border border-[#2d2d2d] mt-4 mb-2" />

      <div className="flex flex-col gap-y-3">
        <div className="flex justify-between items-center p-2">
          <p className="text-sm opacity-70">세이프박스</p>
          <p className="text-sm">0원</p>
        </div>

        <div className="flex justify-between items-center p-2">
          <p className="text-sm opacity-70">저금통</p>
          <p className="text-sm">0원</p>
        </div>
      </div>
    </div>
  );
}


function AccountCard({ isEmpty = false }) {
  return (
    <div className="rounded-2xl bg-[#2c2c2e] p-5 text-white">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm opacity-70">
            이민성의 통장
            {!isEmpty && (
              <span className="ml-2 text-xs bg-[#3a3a3c] px-2 py-0.5 rounded">
                비상금
              </span>
            )}
          </p>

          <p className="text-2xl font-bold mt-1">
            {isEmpty ? '0원' : '4,702,221원'}
          </p>

          {!isEmpty && (
            <p className="text-xs opacity-50 mt-1">
              출금가능 7,702,221원
            </p>
          )}
        </div>

        <div className="flex gap-2">
          {!isEmpty && (
            <button className="text-xs bg-[#3a3a3c] px-3 py-1 rounded-full">
              카드
            </button>
          )}
          <button className="text-xs bg-[#3a3a3c] px-3 py-1 rounded-full">
            이체
          </button>
        </div>
      </div>
    </div>
  );
}


function GroupAccountCard() {
  return (
    <div className="rounded-2xl bg-[#2f8f7a] p-5 text-white">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm opacity-80 flex items-center gap-2">
            함께하는 사람 통장
            <span className="w-2 h-2 bg-red-500 rounded-full" />
          </p>
          <p className="text-2xl font-bold mt-1">0원</p>
        </div>

        <button className="text-xs bg-white/20 px-3 py-1 rounded-full">
          이체
        </button>
      </div>
    </div>
  );
}

function PlusCard() {
  return (
     <div className="rounded-2xl bg-[#2c2c2e] p-5 text-white">
      <div className="flex justify-center items-center">
        <img src={hero} className="w-6 h-6"/>
      </div>
    </div>
  )
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

