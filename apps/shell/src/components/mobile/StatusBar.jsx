import { memo, useEffect, useState } from 'react';

function StatusBar() {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(getTime());
    }, 60 * 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div style={styles.bar}>
      <div style={styles.left}>{time}</div>
      <div style={styles.right}>
        <img src='/assets/Battery.png'/>
      </div>
    </div>
  );
}

export default memo(StatusBar);

function getTime() {
  const now = new Date();
  return now.toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false // 오전/오후 텍스트 제거
  });
}

const styles = {
  bar: {
    position: 'absolute',
    top: 10,
    left: 0,
    height: 24,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 500,
    pointerEvents: 'none',
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
  },
  left: {
    paddingLeft: 'calc(28px + env(safe-area-inset-left))',
  },
  right: {
    paddingRight: 'calc(28px + env(safe-area-inset-right))',
  },
};
