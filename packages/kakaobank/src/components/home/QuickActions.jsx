import { motion } from 'framer-motion';

export default function QuickActions() {
  const actions = ['모바일 신분증', '내 계좌', '스마트출금', '내 DSR'];

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: -300, right: 300 }}
      className="
        flex gap-2
        overflow-x-auto
        no-scrollbar
        py-2
        touch-pan-x
        overscroll-x-contain
        cursor-grab
        active:cursor-grabbing
        select-none
      "
    >
      {actions.map(label => (
        <button
          key={label}
          className="
            whitespace-nowrap
            px-4 py-2
            rounded-full
            bg-[#2c2c2e]
            text-sm
            text-white
            shrink-0
          "
        >
          {label}
        </button>
      ))}
    </motion.div>
  );
}