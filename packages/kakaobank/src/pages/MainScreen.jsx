import { useAutoHideScrollbar } from '../utils/useAutoHideScrollbar';
import QuickActions from '../components/home/QuickActions';

// pr-[calc(1rem-3px)] 

export default function MainScreen() {
  const scrollRef = useAutoHideScrollbar();

  return (
    <div className="w-full h-screen bg-white pt-8 flex flex-col">
      {/* 스크롤 영역 */}
      <div
        ref={scrollRef}
        className="
          flex-1
          overflow-y-auto
          auto-hide-scrollbar
          touch-pan-y
        "
      >
        <main className="px-2 pb-24">
          {/* pb-24 중요: 바텀 네비 높이만큼 */}
          <div className='py-2'>
            <QuickActions />
          </div>
          

          <div className="rounded-xl bg-gray-200 p-2">
            

            <div className="mt-4 space-y-4">
              <AccountCard />
              <AccountCard />
              <AccountCard />
              <AccountCard />
              <GroupAccountCard />
            </div>
          </div>
        </main>
      </div>

      {/* 고정 Bottom Nav */}
      <BottomNav />
    </div>
  );
}

// function QuickActions() {
//   const actions = ['모바일 신분증', '내 계좌', '스마트출금', '내 DSR'];

//   return (
//     <div
//       className="
//         flex gap-2
//         overflow-x-auto
//         no-scrollbar
//         py-2
//         touch-pan-x
//         overscroll-x-contain
//         cursor-grab
//         active:cursor-grabbing
//         select-none
//       "
//     >
//       {actions.map(label => (
//         <button
//           key={label}
//           className="
//             whitespace-nowrap
//             px-4 py-2
//             rounded-full
//             bg-[#2c2c2e]
//             text-sm
//             text-white
//             shrink-0
//           "
//         >
//           {label}
//         </button>
//       ))}
//     </div>
//   );
// }

function AccountCard() {
  return (
    <div className="
      rounded-2xl
      bg-[#2c2c2e]
      p-5
      text-white
      shadow-sm
    ">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm opacity-70">이민성의 통장</p>
          <p className="text-2xl font-bold mt-1">4,702,221원</p>
          <p className="text-xs opacity-50 mt-1">
            출금가능 7,702,221원
          </p>
        </div>

        <button className="text-xs bg-[#3a3a3c] px-3 py-1 rounded-full">
          이체
        </button>
      </div>
    </div>
  );
}

function GroupAccountCard() {
  return (
    <div className="
      rounded-2xl
      bg-[#2f8f7a]
      p-5
      text-white
      shadow-sm
    ">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm opacity-80">함께하는 사람 통장</p>
          <p className="text-2xl font-bold mt-1">?원</p>
        </div>

        <button className="text-xs bg-white/20 px-3 py-1 rounded-full">
          이체
        </button>
      </div>
    </div>
  );
}

function BottomNav() {
  return (
    <nav className="
      h-16
      bg-[#1c1c1e]
      border-t border-white/10
      flex justify-around items-center
      shrink-0
    ">
      {['홈', '혜택', 'AI', '상품', '전체'].map(label => (
        <button key={label} className="text-xs text-white/70">
          {label}
        </button>
      ))}
    </nav>
  );
}
