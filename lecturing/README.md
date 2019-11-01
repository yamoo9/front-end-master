# 수업에서 사용하는 도구

Front-End Masters League 강의에서 사용되는 도구 사용법을 알아봅니다.

## HTMLHint

HTML 표준 문법 또는 설정한 규칙에 어긋나는 오류를 개발 중에 확인할 수 있습니다.

### VS Code 확장

[HTMLHint](https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint) 익스텐션 설치

![](https://raw.githubusercontent.com/Microsoft/vscode-htmlhint/master/htmlhint/images/hero.png)

### CLI

HTMLHint 패키지 설치

```console
$ npm i htmlhint -g
```

프로젝트의 모든 HTML 파일 문법 검사

```console
$ htmlhint /**/*.{htm,html}
```

검사 결과

```console
front-end-master git:master ❯ htmlhint ./lecturing/2019/11/week01/finished/index.html

/front-end-master/lecturing/2019/11/week01/finished/index.html:
  line 18, col 5: The script tag can not be used in head.
  line 24, col 20: Id and class value must lower case and split by dash.
```

### 규칙 설정

프로젝트 루트에 `.htmlhintrc` 파일 생성 후, 설정하고자 하는 규칙 추가

```js
{
  // 태그 이름이 소문자가 아닐 경우 오류
  "tagname-lowercase": true,
  // 속성 이름이 소문자가 아닐 경우 오류
  "attr-lowercase": true,
  // 속성 값 큰 따옴표(")가 아닐 경우 오류
  "attr-value-double-quotes": true,
  // 속성 값이 비어 있을 경우 오류
  "attr-value-not-empty": false,
  // 속성이 중복될 경우 오류
  "attr-no-duplication": true,
  // DOCTYPE 위에 다른 코드가 있을 경우 오류
  "doctype-first": true,
  // 태그 쌍이 일치하지 않을 경우 오류
  "tag-pair": true,
  // 콘텐츠를 설정할 수 없는 빈 요소를 스스로 닫지 않을 경우 오류
  "empty-tag-not-self-closed": true,
  // 특수문자(<, >, & 등)를 이스케이프 처리하지 않을 경우 오류
  "spec-char-escape": true,
  // id 속성 이름이 중복될 경우 오류
  "id-unique": true,
  // src 속성이 빈 경우 오류
  "src-not-empty": true,
  // title 요소의 내용이 빈 경우 오류
  "title-require": true,
  // alt 속성이 없는 요소(img, input:image, area)가 있을 경우 오류
  "alt-require": true,
  // HTML5 DTD이 아닌 경우 오류
  "doctype-html5": true,
  // id, class 속성 이름 규칙이 어긋난 경우 오류
  // [ dash, underline, hump, false ] 중 선택 1 
  // ※ hump는 camelCase
  "id-class-value": false,
  // style 요소를 사용할 경우 오류
  "style-disabled": false,
  // 인라인 style 속성을 사용할 경우 오류
  // BAD: <div style="color:red">...</div>
  "inline-style-disabled": false,
  // 인라인 style 속성을 사용할 경우 오류
  // BAD: <a href="javascript:alert(1)">이런 거 좀 쓰지마!!</a>
  "inline-script-disabled": true,
  // 스페이스 또는 탭을 혼용해 사용할 경우 오류
  // [ space, space4, tab, false ] 중 선택 1 
  "space-tab-mixed-disabled": "space",
  // 광고(AD) 키워드 사용 시 오류
  // ※ 광고 키워드는 애드 블록에 의해 차단 됨
  // BAD: <div id="ad-container"></div> 또는 <div id="ad_container"></div>
  "id-class-ad-disabled": true,
  // href 속성 값으로 절대 또는 상대 경로로 통일하지 않을 경우 오류
  // [ abs, rel, false ] 중 선택 1 
  "href-abs-or-rel": false,
  // 속성 값으로 안전하지 않은 문자 사용 시 오류
  // BAD: <a href="https://vimeo.com/album/1951235/video/56931059‎\u0009‎">...</a>
  "attr-unsafe-chars": true,
  // script 요소를 head 요소 내에 사용할 경우 오류
  "head-script-disabled": false
}
```

### VS Code 규칙 설정

1. 설정 패널을 연 후, `Htmlhint: Options` 검색
1. `settings.json`에서 편집 선택 후 `htmlhint.options` 설정 객체 추가


```js
"htmlhint.options": {
  // .htmlhintrc 설정 코드 참고
}
```



## ESLint

JavaScript 표준(ECMAScript) 문법 또는 설정한 규칙에 어긋나는 오류를 개발 중에 확인할 수 있습니다.

### VS Code 확장

[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 익스텐션 설치

![](http://seanamarasinghe.com/wp-content/uploads/2016/04/eslint-1050x360.jpg)

### CLI

[ESLint](https://eslint.org/) 패키지 설치

```console
$ npm i eslint -g
```

설정 파일 생성

```console
$ npm init -y # --yes
$ eslint --init
```

프로젝트의 js 디렉토리 내부 *.js 파일 문법 검사

```console
$ eslint js/
```

검사 결과

```console
front-end-master git:master ❯ eslint js/main.js

front-end-master/js/main.js
  7:3   error  Trailing spaces not allowed   no-trailing-spaces
```

### 규칙 설정

[ESLink Rules](https://eslint.org/docs/rules/#possible-errors) 참고


### 플레이그라운드

[ESLint Demo](http://bit.ly/2Wugkfc)


## Prettier

설정된 규칙에 맞게 코드를 자동으로 정리합니다.

### VS Code 확장

[Prettier Now](https://marketplace.visualstudio.com/items?itemName=remimarsal.prettier-now) 익스텐션 설치

![](https://satoyan419.com/wp/wp-content/uploads/2018/04/2018-04-13_prettier-600x315.png)

### 에디터 설정

[Prettier - Code formatter 영상 강의](https://yamoo9.github.io/react-master/lecture/r-setting-up.html#prettier-code-formatter) 참고

### 플레이그라운드

[Prettier Playground](https://prettier.io/playground/)


## Debugger for Chrome

에디터에서 Chrome을 띄워 디버깅 할 수 있습니다.

### VS Code 확장

[Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) 익스텐션 설치

![](https://raygun.com/blog/images/debug-chrome/debug-chrome.png)

### 로컬 서버 구동

[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 익스텐션을 설치해 사용하거나, `serve` 명령을 사용해 로컬 서버 구동

```console
$ npx serve
```

### 디버깅 구성 설정

F5 키를 눌러 디버깅 구성 파일 `launch.json` 생성

> `url`의 포트 값은 로컬 서버와 동일하게 구성

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Chrome 디버깅",
      "url": "http://localhost:8080",
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```

### Debugging for Chrome 대신 Chrome 브라우저에서 디버깅 하려면? 

[Chrome DevTools에서 자바스크립트 디버깅 시작하기](https://developers.google.com/web/tools/chrome-devtools/javascript/?hl=ko) 문서 참고
