# monorepo
package가 많아서 헷갈림.. branch 전략을 세워둬야할듯? 

###
main ->브런치는 배포용

development -> 개발용

feat -> 기능 개발용(development 브런치로부터 파생)


feature 브런치에서는 feature/[패키지명]-[기능명] 이런식으로 작업을 진행하자

###### build
- webpack 등 config 설정 변경에 대한것들
build: upgrade vite to v5
build: add draco compression plugin
build: change docker base image to node 20

###### chore
- 유지보수성 작업 (파일 구조, 로그 제거)
chore: remove unused assets
chore: clean up eslint rules
chore: bump version to 1.2.1

###### ci
- ci단계
ci: add e2e test step
ci: optimize github actions cache
ci: change deployment trigger branch

###### docs
문서변경에 대한거

###### refactor:
구조 개선에 대한

###### perf
성능 개선 
perf: reduce draw calls in r3f scene
perf: memoize expensive selector
perf: apply draco compression



###

```bash
yarn dlx @yarnpkg/sdks vscode
```

실생시 .yarn/sdks 가 생성되며 TS설정 시 모듈을 못 찾아오는 무넺를 해결함