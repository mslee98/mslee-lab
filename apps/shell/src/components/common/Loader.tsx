const lines = Array.from({ length: 8 });

export default function Loader() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <svg viewBox="0 0 64 64" className="h-[100px] w-[100px]">
        {lines.map((_, i) => {
          const rotate = i * 45;
          const delay = -(1000 - i * 125);

          return (
            <line
              key={i}
              x1={32}
              y1={6}
              x2={32}
              y2={18}
              className="origin-[32px_32px] animate-fade stroke-[#f1f3f5]"
              strokeWidth={4}
              strokeLinecap="round"
              style={{
                transform: `rotate(${rotate}deg)`,
                animationDelay: `${delay}ms`,
              }}
            />
          );
        })}
      </svg>

      {/* Tailwind에서 쓰는 커스텀 keyframes */}
      <style>
        {`
          @keyframes fade {
            0% { opacity: 1; }
            100% { opacity: 0; }
          }
          .animate-fade {
            animation: fade 1s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
