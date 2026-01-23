import { useEffect, useRef } from 'react';

/**
 * 스크롤을 진행할 때 만 스크롤이 나타나게 한다.
 * 
 */
export function useAutoHideScrollbar(timeout = 800) {
  const ref = useRef(null);
  const timer = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      el.classList.add('scrolling');

      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        el.classList.remove('scrolling');
      }, timeout);
    };

    el.addEventListener('scroll', onScroll);
    return () => {
      el.removeEventListener('scroll', onScroll);
      clearTimeout(timer.current);
    };
  }, [timeout]);

  return ref;
}