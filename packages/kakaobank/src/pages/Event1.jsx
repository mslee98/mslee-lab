import { useNavigate } from 'react-router-dom';

export default function Event1() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-[#111] text-white flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">이벤트1 페이지</h1>
      <button
        className="px-4 py-2 bg-white text-black rounded"
        onClick={() => navigate(-1)} // 뒤로가기
      >
        뒤로가기
      </button>
    </div>
  );
}
