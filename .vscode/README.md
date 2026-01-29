# 에디터 설정 (Yarn PnP + TypeScript)

[Toss | reacet-simplikit](https://github.com/mslee98/react-simplikit/tree/main/src/hooks)
[우아한기술블로그 | Yarn Berry Workspace를 활용한 프론트엔드 모노레포 구축기](https://techblog.woowahan.com/7976/)
[우아한기술블로그 | Yarn Berry Workspace를 활용한 프론트엔드 모노레포 구축기 Github](https://github.com/kowoohyuk/monorepo-template)

### TS 의존성 설치

```bash
$ yarn add react react-dom react-router-dom @types/react @types/react-dom
```

### Yarn 공식 문서 해결 방법

```bash
$ yarn add @yarnpkg/sdks -D
$ yarn dlx @yarnpkg/sdks vscode # 이게 괜히 있던게 아니였다..

```

`$ yarn dlx @yarnpkg/sdks vscode` 명령어를 입력하면 아래 `.vscode/setting.json` 이 생성된다.
여기서 Yarn SDK를 읽고 TS를 읽어와야하기 때문에 항상 넣어주던거였음.

```json
{
  "search.exclude": {
    "**/.yarn": true,
    "**/.pnp.*": true
  },
  "eslint.nodePath": ".yarn/sdks",
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "typescript.tsdk": ".yarn/sdks/typescript/lib", // 이 부분이 중요함. vscode가 TS lib를 읽으려면
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "typescript.preferences.importModuleSpecifierEnding": "js",
  "prettier.prettierPath": ".yarn/sdks/prettier/index.cjs"
}
```
