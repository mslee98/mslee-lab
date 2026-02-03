import { plusIcon, hanaSymbolLogo, kakaobankSymbolWhiteLogo } from "share";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* 계좌 카드 */}
      <div className="mt-4 space-y-4">
        <MainAccountCard />
        <GroupAccountCard />
        <AccountCard isEmpty />

        <PlusCard />
      </div>
    </>
  );
}

function MainAccountCard() {
  return (
    <div className="rounded-2xl bg-[#2c2c2e] p-5 text-white">
      {/* 상단 */}
      <div className="flex items-center gap-3">
        {/* 은행 로고 */}
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
          <img src={kakaobankSymbolWhiteLogo} className="w-5 h-5" />
        </div>

        {/* 통장 정보 */}
        <div>
          <p className="text-sm opacity-70 flex items-center gap-2">
            이민성의 통장
            <span className="ml-2 text-xs bg-[#3a3a3c] px-2 py-0.5 rounded">
              비상금
            </span>
          </p>

          <p className="text-2xl font-bold mt-1">47,702,221원</p>

          <p className="text-xs opacity-50">출금가능 50,702,221원</p>
        </div>
      </div>

      {/* 출금가능 + 버튼 라인 */}
      <div className="flex justify-end items-center mt-2">
        <div className="flex gap-2">
          <button className="text-xs bg-[#3a3a3c] px-3 py-1 rounded-full">
            카드
          </button>
          <button className="text-xs bg-[#3a3a3c] px-3 py-1 rounded-full">
            이체
          </button>
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
            {isEmpty ? "0원" : "4,702,221원"}
          </p>

          {!isEmpty && (
            <p className="text-xs opacity-50 mt-1">출금가능 7,702,221원</p>
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
      {/* 상단 flex */}
      <div className="flex justify-between items-center">
        {/* 좌측: 로고 + 정보 */}
        <div className="flex items-center gap-3">
          {/* 로고 동그라미 */}
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            {/* 이미지 넣기 */}
            <img
              src={hanaSymbolLogo}
              alt="통장 로고"
              className="w-6 h-6 rounded-full"
            />
          </div>

          {/* 통장 정보 */}
          <div>
            <p className="text-sm opacity-80 flex items-center gap-2">
              소개페이지를 만들어본다면?
              <span className="w-2 h-2 bg-red-500 rounded-full" />
            </p>
            <p className="text-2xl font-bold mt-1">0원</p>
          </div>
        </div>
      </div>

      <div className="w-full border border-[#4b9182] mt-4 mb-2" />

      <div className="flex flex-col gap-y-3">
        <div className="flex justify-between items-center p-2">
          <p className="text-sm opacity-70">스크롤 애니메이션</p>
          <Link
            to={"/event1"}
            className="text-xs bg-white/20 px-3 py-1 rounded-full"
          >
            들어가기
          </Link>
        </div>

        <div className="flex justify-between items-center p-2">
          <p className="text-sm opacity-70">캔버스 애니메이션</p>
          <Link
            to={"/event2"}
            className="text-xs bg-white/20 px-3 py-1 rounded-full"
          >
            들어가기
          </Link>
        </div>
      </div>
    </div>
  );
}

// function GroupAccountCard() {
//   const [version, setVersion] = useState("0.1"); // 기본 선택 버전

//   return (
//     <div className="rounded-2xl bg-[#2f8f7a] p-5 text-white w-80">
//       <div className="flex justify-between items-center mb-4">
//         <div>
//           <p className="text-sm opacity-80 flex items-center gap-2">
//             카뱅 소개 페이지를 만들어본다면?
//             <span className="w-2 h-2 bg-red-500 rounded-full" />
//           </p>
//           <p className="text-xl font-bold mt-1">스크롤 기반 텍스트 버전</p>
//         </div>

//         <Link
//           to={`/event1?version=${version}`}
//           className="text-xs bg-white/20 px-3 py-1 rounded-full"
//         >
//           들어가기
//         </Link>
//       </div>

//       {/* 버전 토글 */}
//       <div className="flex gap-2 mt-3">
//         {["0.1", "0.2"].map((v) => (
//           <button
//             key={v}
//             onClick={() => setVersion(v)}
//             className={`px-3 py-1 rounded-full text-sm font-medium transition
//               ${version === v ? "bg-white text-[#2f8f7a]" : "bg-white/20 text-white"}`}
//           >
//             v{v}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

function PlusCard() {
  return (
    <div className="rounded-2xl bg-[#2c2c2e] p-5 text-white">
      <div className="flex justify-center items-center">
        <img src={plusIcon} className="w-6 h-6" />
      </div>
    </div>
  );
}
