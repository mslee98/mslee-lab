import { 
    homeIcon,
    beakerIcon,
    cpuIcon,
    cubeIcon,
    squares2x2Icon
} from 'share';

const NAV_ITEMS = [
  { label: '홈', icon: homeIcon },
  { label: '실험', icon: beakerIcon },
  { label: 'AI', icon: cpuIcon },
  { label: '상품', icon: cubeIcon },
  { label: '전체', icon: squares2x2Icon },
];

export default function BottomNav() {
  return (
    <nav
      className="
        h-20
        bg-[#1c1c1e]
        border-t border-white/10
        flex justify-around items-center
        text-white/60
        text-xs
      "
    >
      {NAV_ITEMS.map(({ label, icon }) => (
        <button
          key={label}
          className="
            flex flex-col items-center gap-1
            transition
            hover:text-white
          "
        >
          <img
            src={icon}
            alt={label}
            className="w-6 h-6 opacity-80 invert brightness-200"
          />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}