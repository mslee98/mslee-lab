import { useEffect } from 'react';

export function useIOSBackSwipe() {
  useEffect(() => {
    let startX = 0;
    let startY = 0;
    let isEdge = false;

    const onTouchStart = (e) => {
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;

      // iOS edge 영역 (왼쪽 20px)
      isEdge = startX <= 20;
    };

    const onTouchEnd = (e) => {
      if (!isEdge) return;

      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - startX;
      const deltaY = Math.abs(touch.clientY - startY);

      // 수평 스와이프 + 충분한 거리
      if (deltaX > 80 && deltaY < 40) {
        window.parent.postMessage(
          { type: 'IOS_SWIPE_BACK' },
          '*'
        );
      }
    };

    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, []);
}
