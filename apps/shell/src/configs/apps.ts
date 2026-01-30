import kakaobank from "@/assets/appLogo/kakaobank_icon.webp";
import toss from "@/assets/appLogo/toss_icon.webp";
import github from "@/assets/appLogo/github_icon.webp";

/**
 * __KAKAOBANK_URL__
 * __TOSS_URL__
 *
 * /@types/env.d.ts
 * declare const __KAKAOBANK_URL__: string;
 * declare const __TOSS_URL__: string;
 *
 * 근데 declare하면 찾기가 너무 힘들지 않나? 이 파일에 정의하는게 나을 것 같은데
 *
 */

export interface AppConfig {
  name: string;
  url: string | null; // Home의 경우 url null
  icon?: string; // 지금은 SVGR을 사용하지 않기에 string 처리
  dark?: boolean; // device frame내부에서 StatusBar(시계 | 배터리) 색 적용을 위함
  external?: boolean; // 외부 링크
}

export const APPS = {
  home: {
    name: "Home",
    url: null,
    dark: true,
  },
  kakaobank: {
    name: "카카오뱅크",
    icon: kakaobank,
    url: __KAKAOBANK_URL__,
    dark: true,
  },
  toss: {
    name: "토스",
    icon: toss,
    url: __TOSS_URL__,
    dark: false,
  },
  github: {
    name: "깃허브",
    icon: github,
    url: "https://github.com/mslee98",
    dark: false,
    external: true,
  },
} satisfies Record<string, AppConfig>;

export type AppKey = keyof typeof APPS;
export type AppMap = typeof APPS;

/**
 * const APPS: Record<string, AppConfig> = { ... } 이렇게 하면 "home" | "kakaobank" | ... 정보가 사라짐
 * key literal 타입 유지
 */
