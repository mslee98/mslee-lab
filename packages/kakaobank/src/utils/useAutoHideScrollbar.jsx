import { useEffect, useRef } from 'react';

export function useAutoHideScrollbar() {
  const ref = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      el.classList.add('scrolling');

      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        el.classList.remove('scrolling');
      }, 800);
    };

    el.addEventListener('scroll', onScroll);
    return () => {
      el.removeEventListener('scroll', onScroll);
      clearTimeout(timerRef.current);
    };
  }, []);

  return ref;
}