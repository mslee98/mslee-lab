# share(공통)

브랜드 로고들은 공통적으로 쓰이기에 공통을 쓰고 싶은데;
SVG를 리액트 컴포넌트로 하려면 Babel이 필요하기에 번들링이 필요함.

공통 컴포넌트인데 번들러를 넣는게 보기 좋은걸까? 개발 생산성이 좋아질까? 오히려 더 복잡해지지 않을까?

정리하자면
> “브랜드 자산은 공통이지만,
디자인 시스템에도 넣기 싫고
asset 패키지에 두기엔 표현 책임이 있다.”

내 프로젝트 목적에서는 여러가지 애니메이션을 담당하기도 하지만
브랜드 로고같은 경우에는 따로 애니메이션이 들어갈일이 없다고 판단함.

따라서 src로 호출하는 식으로 진행하겠음

```js
import {plusIcon} from 'share';

function PlusCard() {
  return (
     <div className="rounded-2xl bg-[#2c2c2e] p-5 text-white">
      <div className="flex justify-center items-center">
        
        <img src={plusIcon} className="w-6 h-6"/>
      </div>
    </div>
  )
}
```
