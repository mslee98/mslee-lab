import { createPortal } from "react-dom";
import { memo, useLayoutEffect, useState } from "react";
import Giscus from "@giscus/react";

function GiscusPopover({
  anchorRef,
}: {
  anchorRef: React.RefObject<HTMLElement>;
}) {
  const [pos, setPos] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  useLayoutEffect(() => {
    if (!anchorRef.current) return;

    const rect = anchorRef.current.getBoundingClientRect();

    setPos({
      top: rect.top + window.scrollY - 520 - 8, // 버튼 위
      left: rect.left + window.scrollX,
    });
  }, [anchorRef]);

  return createPortal(
    <div
      style={{
        position: "absolute",
        top: pos.top,
        left: pos.left,
      }}
      className="
        w-[490px] h-[500px]
        bg-white rounded-xl shadow-xl
        overflow-y-auto
        z-50
      "
    >
      <Giscus
        repo="mslee98/mslee-lab"
        repoId="R_kgDOQ8kmkw"
        category="General"
        categoryId="DIC_kwDOQ8kmk84C1n1h"
        mapping="pathname"
        reactionsEnabled="1"
        theme="light_protanopia"
        lang="ko"
      />
    </div>,
    document.body,
  );
}

export default memo(GiscusPopover);
