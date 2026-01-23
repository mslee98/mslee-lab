import './event1.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// 참고
// https://framer.university/resources/scroll-highlight-animation-override-for-framer
export default function Event1() {
  const navigate = useNavigate();

  return (
    <>
      {/* 상단 인트로 */}
      <section className="pt-24 pb-32 text-center text-white">
        <p className="text-sm opacity-60 mb-3">
          KAKAO BANK EXPERIENCE
        </p>

        <h2 className="text-4xl font-extrabold leading-tight">
          스크롤로 느끼는<br />
          새로운 금융 경험
        </h2>

        <p className="mt-6 text-sm opacity-50">
          천천히 내려보세요
        </p>
      </section>

      {/* 단어 하이라이트 연출 */}
      <HighlightWords />
    </>
  );
}

function HighlightWords() {
  const words = [
    '지금',
    '이',
    '순간',
    '당신의',
    '금융',
    '경험이',
    '완전히',
    '달라집니다',
  ];

  useEffect(() => {
    const root = document.querySelector('.auto-hide-scrollbar');
    if (!root) return;

    const targets = document.querySelectorAll('[data-word]');

    /**
     * IntersectionObserver란?
     * Chromium / WebKit / Gecko 레벨에서 어떤 요소가 특정 영역 안에 들어왔는지/나갔는지를 브라우저가 감시함
     * 
     * const observer = new IntersectionObserver(
     *  callback,
     *  options => 
     * );
     * [ root (관찰 기준 영역) ]
     * ├── 감시 대상 element A
     * ├── 감시 대상 element B
     * └── 감시 대상 element C
     */

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
            const el = entry.target;

            const isActive = el.dataset.active === '1';

            if (entry.isIntersecting) {

            // 0 → 1 일 때만
            if (!isActive) {
                el.dataset.active = '1';
                el.dataset.animate = '1';

                    setTimeout(() => {
                        el.dataset.animate = '0';
                    }, 550);
                }
            } else {
                el.dataset.active = '0';
            }

        });
      },
      {
        root,
        threshold: 0.99, // root 요소의 90% 이상이 root안에 들어오면 콜백을 호출해라.
      }
    );

    // 타겟 단어들을 감시 리스트에 추가한다
    targets.forEach((el) => observer.observe(el));

    // 컴포넌트 언마운트시 인스턴스 제거
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-[40vh] flex flex-col items-center gap-20">
      {words.map((word, i) => (
        <p
          key={i}
          data-word
          data-active="0"
          className="highlight-word text-4xl font-bold py-20"
        >
          {word}
        </p>
      ))}
    </section>

    
  );
}