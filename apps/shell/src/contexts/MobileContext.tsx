import {
  ComponentProps,
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { DeviceFrameset } from "react-device-frameset";

import type { AppKey } from "@configs/apps";

/**
 * react-device-frameset 이 허용하는 device 이름 타입
 */
export type DeviceName = ComponentProps<typeof DeviceFrameset>["device"];

/**
 * iPad mini에서는 색상이 필수로 들어가지만
 * 해당 프로젝트에서는 아래 4개만 사용할것이기에 고정한다
 *
 * Extract<T, U> T 중에서 U에 해당하는 것만 남김
 */
export type AppDeviceName = Extract<
  DeviceName,
  "iPhone X" | "iPhone 8" | "iPhone 8 Plus" | "Galaxy Note 8"
>;

interface MobileState {
  currentApp: AppKey;
  currentDevice: AppDeviceName; // DeviceName은 전체 AppDebiceName은 내가 위에 정의한 기종만 뜻 함
}

interface MobileActions {
  setCurrentApp: (key: AppKey) => void;
  setCurrentDevice: (device: AppDeviceName) => void;
}

type MobileContextValue = MobileState & MobileActions;

const MobileContext = createContext<MobileContextValue | null>(null);

export function MobileProvider({ children }: { children: ReactNode }) {
  const [currentApp, setCurrentApp] = useState<AppKey>("home");
  const [currentDevice, setCurrentDevice] = useState<AppDeviceName>("iPhone X");

  return (
    <MobileContext.Provider
      value={{
        currentApp,
        currentDevice,
        setCurrentApp,
        setCurrentDevice,
      }}
    >
      {children}
    </MobileContext.Provider>
  );
}

export function useMobile() {
  const ctx = useContext(MobileContext);
  if (!ctx) {
    throw new Error("useMobile must be used within MobileProvider");
  }
  return ctx;
}
