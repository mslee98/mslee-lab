import { memo } from "react";

interface IOSErrorModalProps {
  /** 모달 제목 */
  title?: string;
  /** 모달 메시지 */
  message?: string;
  /** 닫기 버튼 클릭 콜백 */
  onClose: () => void;
}

const IOSErrorModal = memo(function IOSErrorModal({
  title = "오류",
  message = "앱 서버가 실행되지 않았습니다.",
  onClose,
}: IOSErrorModalProps) {
  return (
    <div
      className="
        absolute inset-0 z-20
        flex items-center justify-center
        bg-black/40 backdrop-blur-[2px]
        font-[-apple-system,BlinkMacSystemFont,sans-serif]
      "
    >
      {/* Alert Container */}
      <div
        className="
          w-[270px]
          rounded-[14px]
          overflow-hidden
          text-center
          bg-white/90 backdrop-blur-xl
          shadow-[0_4px_16px_rgba(0,0,0,0.2)]
        "
      >
        {/* Title / Message */}
        <div className="px-4 py-4">
          <div className="mb-[6px] text-[17px] font-semibold text-black">
            {title}
          </div>
          <div className="text-[13px] leading-[1.4] text-black">{message}</div>
        </div>

        {/* Button */}
        <div className="border-t border-black/15">
          <button
            type="button"
            onClick={onClose}
            className="
              w-full py-3
              text-[17px] font-semibold
              text-[#007AFF]
              bg-transparent border-none
              cursor-pointer
              active:bg-black/10
              transition-colors
            "
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
});

export default IOSErrorModal;
