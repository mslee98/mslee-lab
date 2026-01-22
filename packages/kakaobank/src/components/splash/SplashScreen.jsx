import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

import kakaobankLoadingIconBlack from '../../assets/kakaobank-loading-icon-black.webp'

const easeIOS = [0.22, 1, 0.36, 1];

export default function SplashScreen({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(false);
      onFinish?.();
    }, 3000);

    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: easeIOS }}
        >
          {/* LOGO */}
          <motion.img
            src={kakaobankLoadingIconBlack}
            alt="KakaoBank"
            className="w-28 h-28"
            initial={{ scale: 0.7, y: 40, opacity: 0 }}
            animate={{
              scale: [0.7, 1.05, 1],
              y: [40, -6, 0],
              opacity: 1,
            }}
            transition={{
              duration: 0.9,
              ease: easeIOS,
            }}
          />

          {/* BREATHING */}
          <motion.div
            className="mt-10"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{
              delay: 1,
              duration: 1.6,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          >
            <motion.div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-2.5 h-2.5 rounded-full bg-neutral-900"
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 0.8,
                    ease: easeIOS,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
