# FEML 러닝 킷(Learning Kit)

<abbr title="Front-End Masters League">FEML</abbr> 모듈B 과정에서 다루는 데모 실습을 위한 러닝 킷입니다.

## 다운로드 및 설치

러닝 킷은 [Node.js](https://nodejs.org/) 기반 환경에서 작동하므로 Node.js가 사용자 환경에 [설치](https://nodejs.org/en/download/)되어 있어야 합니다. 러닝 킷 디렉토리에서 아래 명령을 실행해 필요한 모듈을 설치합니다.

```sh
$ npm install
```

## 실행 명령

개발을 시작하는 기본 명령입니다. 

```sh
$ npm start
```

추가 명령은 다음과 같습니다.

```sh
# Parcel 모듈 번들러를 사용하여 개발 서버 구동
$ npm run dev

# 개발 서버 구동과 동시에 기본 브라우저에서 열림
$ npm run dev:open

# 러닝 배포를 위한 빌드
$ npm run build
```

> 명령 설정을 변경하려면 [package.json](./package.json) 파일을 열어 `scripts` 항목을 수정하세요.

## 러닝 킷 디렉토리 구조

`src` 디렉토리 안에서 개발 과정을 학습합니다.

```sh
src/ # 개발 디렉토리
├── index.html
├── assets/ # 에셋 디렉토리
│   └── favicon.png
├── js/ # ES6(JS) 디렉토리
│   ├── entry.js
│   └── feml__headerbar--animation.js
├── lib/ # 라이브러리 디렉토리
│   ├── GSAP/ # 애니메이션 라이브러리
│   │   ├── docs-link.html
│   │   ├── getting-started-link.html
│   │   ├── esm/
│   │   ├── minified/
│   │   ├── umd/
│   │   └── src/
│   │       ├── index.js
│   │       ├── CSSPlugin.js
│   │       ├── CSSRulePlugin.js
│   │       ├── Draggable.js
│   │       ├── EasePack.js
│   │       ├── EaselPlugin.js
│   │       ├── MotionPathPlugin.js
│   │       ├── PixiPlugin.js
│   │       ├── ScrollToPlugin.js
│   │       ├── TextPlugin.js
│   │       ├── all.js
│   │       ├── gsap-core.js
│   │       └── utils
│   │           ├── matrix.js
│   │           ├── paths.js
│   │           └── strings.js
│   └── IE/ # IE 호환
│       ├── classList.min.js
│       ├── flexibility.min.js
│       ├── ie8.min.js
│       └── index.js
└── stylus/ # Stylus 디렉토리
    ├── config.styl
    ├── entry.styl
    ├── feml__headerbar.styl
    ├── modules/ # 모듈 디렉토리
    │   ├── a11y.styl
    │   ├── base.styl
    │   ├── common.styl
    │   ├── layout.styl
    │   ├── normalize.styl
    │   ├── transition-animation.styl
    │   └── typography.styl
    └── utils/ # 유틸리티 디렉토리 (함수 등)
        ├── remify.styl
        ├── fontSize.styl
        └── index.styl
```

## 러닝 킷 구성

러닝 킷에서 사용하는 도구는 다음과 같습니다.

도구 | 설명 | 비고
-- | -- | --
[Parcel](https://parceljs.org/) | 모듈 번들러 | [Webpack](https://webpack.js.org/), [Rollup](https://rollupjs.org/), [Gulp](https://gulpjs.com/) 등으로 대체 가능
[Stylus](http://stylus-lang.com/) | CSS 프리프로세서 | CSS, [Scss, Sass](https://sass-lang.com/) 문법 모두 사용 가능
[PostCSS](https://postcss.org/) | CSS 변환 도구 | 구형 브라우저 호환성 자동 처리, [LostGrid](http://lostgrid.org/docs.html) 활용 가능
[Babel](https://babeljs.io/) | JavaScript 컴파일러 | ECMAScript 2015+ 문법 호환 처리 (ES5로 변환)

### 설정 참고

도구 설정은 각 링크를 클릭해 참고하세요.

- [Parcel 시작하기](https://ko.parceljs.org/getting_started.html)
- [Parcel + Stylus 구성](https://ko.parceljs.org/stylus.html)
- [Parcel + PostCSS 구성](https://ko.parceljs.org/transforms.html#postcss)
- [Parcel + Babel 구성](https://ko.parceljs.org/transforms.html#babel)
- [`@babel/preset-env` 설정](https://babeljs.io/docs/en/babel-preset-env#docsNav)
- [Browserlist 설정](https://github.com/browserslist/browserslist#full-list)