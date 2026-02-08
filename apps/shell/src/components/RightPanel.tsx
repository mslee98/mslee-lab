import { useState, useEffect, memo, useMemo } from "react";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";

import Loader from "./common/Loader";

import AppContent from "./mobile/AppContent";
import StatusBar from "./mobile/StatusBar";
import IOSErrorModal from "./common/IOSErrorModal";

// import iPhoneBgDefault from "../assets/iPhone_bg_default.png";
import iPhoneBgDark from "../assets/iPhone_bg_dark.png";

import { APPS } from "@configs/apps";
import type { AppConfig } from "@configs/apps";

import { useMobile } from "@contexts/MobileContext";

import IOSAlertComponent from "./IOSAlertComponent";

type status = "idle" | "checking" | "available" | "no-url" | "down";

import { AnimatePresence } from "framer-motion";

/**
 * @description RightPanel도 하나의 App처럼 별개의 레이아웃을 가진다.
 *
 * env파일을 통해 각 앱들의 url을 iframe으로 가져와서 사용한다.
 *
 * @returns
 */
function RightPanel() {
  const { currentApp, currentDevice, setCurrentApp } = useMobile();

  const app: AppConfig = useMemo(() => APPS[currentApp], [currentApp]);

  // 흠 지금 fetch 접근 가능하지 판단하는데 사치인거 같기도 함
  const [status, setStatus] = useState<status>("idle");

  const isDark = Boolean(app?.dark);
  const isHome = currentApp === "home";

  const [alerts, setAlerts] = useState<
    { id: string; title: string; message: string }[]
  >([]);

  /**
   * 최초 1회 인사 + 안내 알림
   */
  useEffect(() => {
    const t1 = setTimeout(() => {
      setAlerts((prev) => [
        {
          id: crypto.randomUUID(),
          title: "🙌 안녕하세요",
          message: "프론트 개발 이야기를 좋아해요!",
        },
        ...prev,
      ]);
    }, 3000);

    const t2 = setTimeout(() => {
      setAlerts((prev) => [
        {
          id: crypto.randomUUID(),
          title: "Guide",
          message: "해당 Alert은 좌측으로 Darg를 하면 지워집니다",
        },
        ...prev,
      ]);
    }, 5000); // 3초 + 2초

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    if (isHome) {
      setStatus("idle");
      return;
    }

    if (!app.url) {
      setStatus("no-url");
      return;
    }

    setStatus("checking");

    fetch(app.url, { method: "HEAD" })
      .then((res) => setStatus(res.ok ? "available" : "down"))
      .catch(() => setStatus("down"));
  }, [currentApp, app]);

  const renderAppContent = () => {
    if (status === "checking") return <Loader />;

    if (status === "available") {
      return (
        <iframe
          title={app.name}
          src={app.url ?? undefined}
          className="w-full h-full border-none bg-transparent"
        />
      );
    }

    // idle / no-url / down
    return <AppContent />;
  };

  return (
    <>
      <div className="relative flex justify-center">
        <DeviceFrameset device={currentDevice} landscape={false} color="black">
          <div
            className="
              relative
              flex flex-col
              w-full h-full
              cursor-default
              bg-cover bg-center
            "
            style={{ backgroundImage: `url(${iPhoneBgDark})` }}
          >
            {/* StatusBar 상단 고정 시계 및 배터리*/}
            <div className="relative z-50">
              <StatusBar isDark={isDark} />
            </div>

            {/* IOS Alert 레이어 */}
            <div className="absolute top-[44px] left-0 right-0 z-40 flex justify-center">
              <div className="flex w-full max-w-[360px] flex-col gap-4">
                <AnimatePresence initial={false}>
                  {alerts.map((alert) => (
                    <IOSAlertComponent
                      key={alert.id}
                      title={alert.title}
                      message={alert.message}
                      // Alert 제거 함수
                      onDismiss={() =>
                        setAlerts((prev) =>
                          prev.filter((a) => a.id !== alert.id),
                        )
                      }
                    />
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* App Area */}
            <div className="relative flex-1 flex">
              {renderAppContent()}

              {!isHome && (status === "down" || status === "no-url") && (
                <IOSErrorModal
                  title={status === "no-url" ? "앱 미구현" : "연결 오류"}
                  message={
                    status === "no-url"
                      ? "아직 실행 가능한 앱이 아닙니다."
                      : "앱 서버가 실행되지 않았습니다."
                  }
                  onClose={() => setCurrentApp("home")}
                />
              )}
            </div>
          </div>
        </DeviceFrameset>

        {/* Device Shadow 디바이스 프레임 하단에 그림자를 넣는다. */}
        <div
          className="
            pointer-events-none
            absolute
            -bottom-6
            w-[85%]
            h-6
            bg-black
            blur-2xl
            rounded-full
            scale-y-50
            opacity-100
          "
          style={{
            filter: "blur(28px)",
            transform: "scaleY(0.35)",
          }}
        />
      </div>
    </>
  );
}

export default memo(RightPanel);
