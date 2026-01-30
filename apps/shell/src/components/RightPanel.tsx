import { useState, useEffect, memo, useMemo } from "react";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";

import Loader from "./common/Loader";

import AppContent from "./mobile/AppContent";
import StatusBar from "./mobile/StatusBar";
import IOSErrorModal from "./common/IOSErrorModal";

import iPhoneBgDefault from "../assets/iPhone_bg_default.png";

import { APPS } from "@configs/apps";
import type { AppConfig } from "@configs/apps";

import { useMobile } from "@contexts/MobileContext";

type status = "idle" | "checking" | "available" | "no-url" | "down";

function RightPanel() {
  const { currentApp, currentDevice, setCurrentApp } = useMobile();

  const app: AppConfig = useMemo(() => APPS[currentApp], [currentApp]);

  const [status, setStatus] = useState<status>("idle");

  const isDark = Boolean(app?.dark);
  const isHome = currentApp === "home";

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
    <div className="flex justify-center m-0 p-0">
      <DeviceFrameset device={currentDevice} landscape={false} color="black">
        <div
          className="
            relative
            flex flex-col
            w-full h-full
            cursor-default
            bg-cover bg-center
          "
          style={{ backgroundImage: `url(${iPhoneBgDefault})` }}
        >
          {/* StatusBar */}
          <div className="relative z-50">
            <StatusBar isDark={isDark} />
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
    </div>
  );
}

export default memo(RightPanel);
