# apps/shell

- [1. 프로젝트 구조](#프로젝트-구조)
- [2. ts 관련](#ts-관련-설정)

## 프로젝트 구조

ㅇㅇㅇ

## ts 관련 설정

# apps/shell

프로젝트 메인 진입점

## 주요 기능

- Device 선택
- Application 선택

## 검토사항(런타임 통합 전략 #10)

\*.env파일 shell 내부에서 사용
로컬에서는 url로 연결하고 배포환경에서 dist 파일을 옮겨서 해야할지 고민중임

### [react-device-frameset](https://www.npmjs.com/package/react-device-frameset)

TS를 적용하며 `MacBook Pro` | `iPad Mini` 등 나에게는 필요없는 기기임
기존 `DeviceName`을 사용하지 않고 `AppDeviceName`으로 타입을 정의함

```ts
import { DeviceFrameset } from "react-device-frameset";

// DeviceFrameset에서 기존에 정의 된 타입들
export type DeviceName = ComponentProps<typeof DeviceFrameset>["device"];

// 그 타입들 중 특정 기기만 타입을 재 정의함  Extract<T, U> T 중에서 U에 해당하는 것만 남김
export type AppDeviceName = Extract<
  DeviceName,
  "iPhone X" | "iPhone 8" | "iPhone 8 Plus" | "Galaxy Note 8"
>;
```
