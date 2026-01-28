### kakaobank



/src/common/MobileViewPort
=> 여기서 부모가 프레임인지 아닌지를 판단하고 100vw / 100vh로 할 지 개발환경에서 사용할 해상도를 지정할 수 있음

사실 개발이 종료된다면 필요 없기도 함(선택사항)
이건 카뱅 앱만 독립적으로 실행시켜 개발이 필요한 사람에게 필요하다...사실 나한텐 필요 없음

---

프로젝트 디렉토리 구조
인터랙티브한 페이지를 묘사하고 구성하는 식으로 진행하기에 공통적인 컴포넌트는 매우 제한적
따라서 아래 처럼 진행하려고 함 
src/pages/[페이지]/[페이지 관련 css]
src/pages/[페이지]/[페이지 관련 jsx]
```
└── src/
    ├── main.jsx               # ReactDOM.render / entry
    ├── index.js               # 앱 초기화 / 글로벌 설정
    ├── index.css              # 글로벌 Tailwind
    ├── App.jsx                # Router / Layout Wrapping
    ├── components/
    │   ├── common/            # 재사용 UI: Button, Card, Badge, Toggle
    │   │   ├── Card.jsx
    │   │   └── Card.module.css
    │   ├── layout/            # Header, Footer, Layout
    │   └── home/              # Home 전용 작은 컴포넌트
    ├── hooks/
    │   └── useAutoHideScrollbar.jsx
    ├── pages/
    │   ├── Home/
    │   │   ├── Home.jsx
    │   │   ├── Home.module.css
    │   │   └── assets/
    │   │       └── hero-banner.svg
    │   ├── Event1/
    │   │   ├── Event1.jsx
    │   │   ├── Event1.module.css
    │   │   └── assets/
    │   │       └── ScrollDownAnimation.json
    │   └── Event2/
    │       ├── Event2.jsx
    │       ├── Event2.module.css
    │       └── assets/
    │           └── hero-animation.webm
    └── utils/   
```
