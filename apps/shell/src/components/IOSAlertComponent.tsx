// import { AppTemplateIcon } from "share";
import { motion, useMotionValue, animate } from "framer-motion";

interface IIOSAlertComponentProps {
  title: string;
  message: string;
  icon?: string;
  onDismiss: () => void;
}

export default function IOSAlertComponent({
  title,
  message,
  onDismiss,
}: IIOSAlertComponentProps) {
  const x = useMotionValue(0);

  return (
    <motion.div
      layout
      drag="x"
      dragDirectionLock
      style={{ x }}
      dragConstraints={{ left: -120, right: 0 }}
      onDragEnd={(_, info) => {
        if (info.offset.x < -80) {
          onDismiss();
        } else {
          // 👈 미세 드래그 → 원위치 스냅
          animate(x, 0, {
            type: "spring",
            stiffness: 400,
            damping: 30,
          });
        }
      }}
      whileDrag={{ opacity: 0.8 }}
      initial={{ opacity: 0, y: -12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: -120, scale: 0.95 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="
        w-[362px]
        min-h-[68px]
        rounded-[28px]
        bg-white/10
        backdrop-blur-md
        border border-white/40
        shadow-[0_8px_24px_rgba(0,0,0,0.08)]
        flex items-center gap-4 px-4
        cursor-grab active:cursor-grabbing
      "
    >
      {/* App Icon */}
      <div
        className="
                w-[44px] h-[44px]
                rounded-[12px]
                bg-black/90
                flex items-center justify-center
                shadow-[0_2px_6px_rgba(0,0,0,0.12)]
                shrink-0
            "
      >
        <div className="w-[40px] h-[40px] rounded-md bg-black flex justify-center items-center ">
          <span className="text-white font-bold">MS</span>
        </div>

        {/* <img
          src={AppTemplateIcon}
          className="w-[40px] h-[40px] rounded-[10px]"
        /> */}
      </div>

      {/* Text */}
      <div className="flex-1 flex flex-col gap-[2px] pt-[2px]">
        <h3 className="text-white text-[15px] font-bold leading-tight">
          {title}
        </h3>
        <p className="text-white text-[13px] leading-snug">{message}</p>
      </div>
    </motion.div>
  );
}
