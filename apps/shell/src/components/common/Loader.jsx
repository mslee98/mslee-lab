const styled = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    height: '100%',
  },

  svg: {
    width: 100,
    height: 100,
  },

  line: {
    stroke: "#f1f3f5", //로딩색상
    strokeWidth: 4,
    strokeLinecap: "round",
    animation: "fade 1s linear infinite",
    transformOrigin: "32px 32px",
  },
};

const lines = Array.from({ length: 8 });

export default function Loader() {
  return (
    <div style={styled.container}>
      <svg viewBox="0 0 64 64" style={styled.svg}>
        {lines.map((_, i) => {
          const rotate = i * 45;
          const delay = -(1000 - i * 125);

          return (
            <line
              key={i}
              x1="32"
              y1="6"
              x2="32"
              y2="18"
              style={{
                ...styled.line,
                transform: `rotate(${rotate}deg)`,
                animationDelay: `${delay}ms`,
              }}
            />
          );
        })}
      </svg>

      <style>
        {`
          @keyframes fade {
            0% { opacity: 1; }
            100% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
}
