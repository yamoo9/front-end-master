# 뉴스 카드 UI & 북마크 만들기

Ajax 프로그래밍 + REST API를 사용해 서비스 하는 개발 과정을 하나 하나 해설해가며 프로그래밍 흐름을 학습합니다. 

> 모듈 C에서 학습하는 Front-End 프레임워크의 작동 과정과 유사하게 구현

## 튜토리얼

1. [HTML 마크업](#html-마크업)  
  - [뉴스 카드 그리드 (News Card Grid)](#뉴스-카드-그리드-news-card-grid)  
  - [로딩 스피너 (Loading Spinner)](#로딩-스피너-loading-spinner)
1. [CSS 스타일링](#css-스타일링)  
  - [뉴스 카드 UI (NewsCard UI)](#뉴스-카드-ui-newscard-ui)
1. [ES6 프로그래밍](#es6-프로그래밍)  
  - [조건 별 엔트리 페이지 설정](#조건-별-엔트리-페이지-설정)  
  - [NewsCardList 엔트리 페이지](#newscardlist-엔트리-페이지)  
  - [News API 서비스](#news-api-서비스)     
  - [NewsCardGrid 클래스](#newscardgrid-클래스)  
  - [bookmarkService 서비스](#bookmarkservice-서비스)  
  - [NewsCard 클래스](#newscard-클래스)  
  - [필터(Filters): 유틸리티 함수](#필터filters-유틸리티-함수)  
  - [NewsCardButton 클래스](#newscardbutton-클래스)  
  - [NewsCardBookmark 엔트리 페이지](#newscardbookmark-엔트리-페이지)

<br>

## HTML 마크업

### 뉴스 카드 그리드 (News Card Grid)

동적으로 JavaScript가 뉴스 카드를 렌더링(rendering) 할 컨테이너 요소를 작성합니다.

```html
<div class="news__card--grid"></div>
```

### 로딩 스피너 (Loading Spinner)

비동기 통신 시 화면에 표시해 사용자에게 데이터를 로딩 중임을 알립니다.

```html
<!-- 로딩 스피너 -->
<svg class="loading-spinner" viewbox="0 0 100 100">
  <defs>
    <path id="path" d="M50 15A11 35 0 0 1 50 85A11 35 0 0 1 50 15" fill="none"></path>
    <path id="patha" d="M0 0A11 35 0 0 1 0 70A11 35 0 0 1 0 0" fill="none"></path>
  </defs>
  <g transform="rotate(0 50 50)">
    <use xlink:href="#path" stroke="#b5ccf1" stroke-width="1"></use>
  </g>
  <g transform="rotate(60 50 50)">
    <use xlink:href="#path" stroke="#b5ccf1" stroke-width="1"></use>
  </g>
  <g transform="rotate(120 50 50)">
    <use xlink:href="#path" stroke="#b5ccf1" stroke-width="1"></use>
  </g>
  <g transform="rotate(0 50 50)">
    <circle cx="50" cy="15" r="6" fill="#292664">
      <animatemotion dur="1.4492753623188404s" repeatcount="indefinite" begin="0s">
        <mpath xlink:href="#patha"></mpath>
      </animatemotion>
    </circle>
  </g>
  <g transform="rotate(60 50 50)">
    <circle cx="50" cy="15" r="6" fill="#667395">
      <animatemotion dur="1.4492753623188404s" repeatcount="indefinite" begin="-0.16666666666666666s">
        <mpath xlink:href="#patha"></mpath>
      </animatemotion>
    </circle>
  </g>
  <g transform="rotate(120 50 50)">
    <circle cx="50" cy="15" r="6" fill="#94a9ce">
      <animatemotion dur="1.4492753623188404s" repeatcount="indefinite" begin="-0.3333333333333333s">
        <mpath xlink:href="#patha"></mpath>
      </animatemotion>
    </circle>
  </g>
</svg>
```

<br>

## CSS 스타일링

Stylus 프리 프로세서 활용

### 뉴스 카드 UI (NewsCard UI)

뉴스 카드 UI 스타일링 파일 `entryNewsCardUI.styl`을 추가한 후, 아래 코드를 작성합니다.

```styl
$color-white ?= #fff
$color-darkgray ?= #302a46
$color-violet ?= #4527A0

$breakpoint-md ?= 780px
$breakpoint-lg ?= 1200px

::selection
  background $color-darkgray
  color $color-white

body
  background #f2f2f2

.feml__navigationbar
  position sticky
  z-index 100
  top 0
  background rgba($color-white, 0.4)
  backdrop-filter blur(3px)
  color $color-darkgray
  ul
    display flex
    justify-content center
    border-bottom 1px solid rgba($color-darkgray, 0.3)
    box-shadow 0 2px 6px rgba($color-darkgray, 0.2)
    padding 0.3em
  li
    padding 0.8em 0.4em
  a
    padding 0.4em 1em
    color inherit
    font-weight bold
    text-decoration none
    &.current-page
      background $color-darkgray
      color $color-white
      border-radius 30px

.loading-spinner
  position fixed
  z-index 10
  top 50%
  left 50%
  transform translate(-50%, -50%)
  width remify(300px)
  height remify(300px)

.news__card--grid
  display flex
  flex-flow row wrap
  justify-content space-evenly
  max-width remify($breakpoint-lg)
  margin remify(45px) auto
  padding 0 remify(20px)
  &.dont-has-children
    display flex
    justify-content center
    align-items center
    min-height 60vh
    &::before
      content '뉴스 카드가 존재하지 않습니다.'
      font-size remify(24px)
      text-align center
      color #999
  @media (min-width: $breakpoint-lg)
    justify-content flex-start
    &.dont-has-children::before
      font-size remify(40px)

.news__card
  overflow hidden
  position relative
  flex 1 100%
  margin-bottom remify(25px)
  border-radius 6px
  border 1px solid darken($color-white, 10)
  background $color-white
  color desaturate(invert($color-white), 10)
  line-height 1.5
  transition-duration 0.4s
  font-size remify(14px)
  &:hover
    transform translateY(-1px)
    box-shadow 0 10px 16px rgba(10,10,10,0.23), 
               0 2px 3px rgba(0,4,20,0.1)
  @media (min-width: $breakpoint-md)
    flex 0 1 47%
  @media (min-width: $breakpoint-lg)
    flex 0 1 31%
    margin-left 1%
    margin-right 1%

  img
    object-fit cover
    width 100%
    height remify(300px)
    margin-bottom remify(20px)
    border-top-left-radius 6px
    border-top-right-radius 6px
    filter: saturate(0.39) brightness(0.95)
    transition-duration 0.8s
    &:hover
      filter: none
    & ~ *:not(button)
      margin-left remify(30px)
      margin-right remify(30px)

  a
    position relative
    display block
    color inherit
    text-decoration none
    margin-bottom remify(30px)
    &::before
      content ''
      position absolute
      top 0
      right 100%
      bottom 0
      left 0
      background rgba($color-violet, 0.2)
      transform skew(-10deg)
    &:hover
      color $color-violet 
      &::before
        right 77%

.news__card--button
  position absolute
  z-index 10
  top 20px
  right 20px
  height remify(36px)
  font-size remify(38px)
```

<br>

## ES6 프로그래밍

### 조건 별 엔트리 페이지 설정

뉴스 카드 리스트, 뉴스 카드 북마크 페이지를 엔트리 파일에서 나눠 실행하도록 코드를 분기합니다.

> 각 페이지 URL 마다 호출하는 코드를 다르게 적용하는 것입니다. ES 모듈은 조건 문 안에서 처리가 안됩니다. 이런 경우 CommonJS 진영의 모듈 로드 방식을 사용해 조건 처리할 수 있습니다. (웹 표준 아님)

```js
// 북마크 페이지 접속 유무 파악
const isBookmarkPage = window.location.href.includes('bookmark')

// 뉴스 카드 리스트 페이지
if (!isBookmarkPage) {
	require('./entryNewsCardList')
}
// 뉴스 카드 북마크 페이지
else {
	require('./entryNewsCardBookmark')
}
```

### NewsCardList 엔트리 페이지

`js/entry.js` 파일에서 호출되는 `js/entryNewsCardList.js` 코드를 해설합니다.

```js
// GSAP 애니메이션 모듈
import gsap from 'gsap'
// 뉴스 API를 통해 데이터를 가져오는 역할을 수행하는 모듈
import newsapi from './services/newsapi'

// 뉴스 카드 그리드 객체를 생성하기 위해 필요한 NewsCardGrid 클래스 모듈
import NewsCardGrid from './components/NewsCardGrid'

// 문서 객체 참조 변수 (초기 값 설정)
let cardGrid = null
let loadingSpinner = null

// 현재 임의 검색어 설정
// TODO: 사용자가 검색어를 입력할 수 있는 입력필드 UI 구성 추가
let searchList = '디자인 개발 열정 패션 무리뉴 손홍민 지소미아 갤럭시폴드 접근성 UX'.split(' ')

/**
 * 초기화 함수
 */
const init = () => {
  // 뉴스 API를 사용해 뉴스 데이터를 로딩하는 함수 실행
  loadNews()
  // 문서 객체를 참조하는 함수 실행
	refereneceDomEls()
}

/**
 * 임의의 검색어를 반환하는 함수
 * @returns {String} 검색어
 */
const randomSearch = () =>
	searchList[Math.floor(Math.random() * searchList.length)]

/**
 * 문서 객체 참조 함수
 * @returns {HTMLElement} HTML 요소 객체
 */
const refereneceDomEls = () => {
  // 뉴스 카드 그리드 문서 객체 참조
  cardGrid = document.querySelector('.news__card--grid')
  // 로딩 스피너 문서 객체 참조
	loadingSpinner = document.querySelector('.loading-spinner')
}

/**
 * 검색한 뉴스 API 데이터를 가져와 뉴스 카드 그리드를 생성하는 함수
 */
const loadNews = () => {
  // 임의의 검색어 설정
  let search = randomSearch()
  // 뉴스 API에 검색어 전달 (비동기 통신 후, 데이터 반환 요청)
	newsapi
    .get(`everything?q=${search}`)
    // 통신 성공 시, 뉴스 카드 그리드 생성
    .then(createNewsCardGrid)
    // 오류 발생 시, 오류 메시지 출력
		.catch((error) => console.error(error.message))
}

/**
 * 뉴스 카드 그리드를 생성하는 함수
 * @param {Object} response 응답 결과 객체
 * @param {Object} response.data 응답 결과 데이터
 */
const createNewsCardGrid = ({ data }) => {
  // NewsCardGrid 클래스를 사용해 객체 생성
  // 참조한 cardGrid 문서 객체를 전달
  // 응답 결과 데이터의 아티클(뉴스 정보 데이터 배열 객체) 전달
  new NewsCardGrid(cardGrid, data.articles)
  // GSAP을 사용해 로딩 스피너 애니메이션 설정
  // 뉴스 카드 그리드를 생성한 후, 로딩 스피너 감춤
	gsap.to(loadingSpinner, { duration: 0.04, autoAlpha: 0 })
}

// 초기화 함수 실행
init()
```

### News API 서비스

`js/entryNewsCardList.js` 파일에서 호출되는 `js/services/newsapi.js` 코드를 해설합니다.

#### 참고

- [News API 시작하기](https://newsapi.org/docs/get-started)
- [Axios 객체 설정(Config)](https://yamoo9.github.io/axios/guide/config-defaults.html)

```js
// 비동기 통신 처리를 위임 할 라이브러리 모듈
import axios from 'axios'

// axios.create()를 사용해 뉴스 API 서비스 객체 생성
const newsapi = axios.create({
  // News 오픈 API 기본 경로 설정
	baseURL: 'https://newsapi.org/v2',
})

// News 오픈 API에 데이터 요청을 위한 토큰(인증)
// ⚠️ 현재 백엔드에서 서비스 하는 것이 아니기에 토큰 정보가 노출 됨 (보안 이슈)
//   백엔드에서 서비스 할 경우, 토큰 정보를 노출 시키지 않음
const AUTH_THOKEN = 'e8078a1cf5304d95a584d075e031c835'

// News 오픈 API의 인증에 토큰 정보 설정
newsapi.defaults.headers.common['Authorization'] = AUTH_THOKEN

// 뉴스 API 서비스 객체 내보내기
export default newsapi
```

### NewsCardGrid 클래스

`js/entryNewsCardList.js` 파일에서 호출되는 `js/components/NewsCardGrid.js` 코드를 해설합니다.

```js
// 뉴스 북마크 서비스 모듈
// 서비스 객체의 메서드 호출
import {
	getBookmark,
	addBookmark,
	removeBookmark,
	clearBookmark,
} from '../services/bookmarkService'

// NewsCard 객체 생성을 위한 NewsCard 클래스 모듈
import NewsCard from './NewsCard'

/**
 * @class
 * 뉴스 카드 그리드 클래스
 */
class NewsCardGrid {
	/**
	 * 뉴스 카드 그리드 객체 생성 시, 호출
	 * @param {HTMLElement} domEl 뉴스 카드 그리드로 설정할 DOM 요소 객체
	 * @param {Array} data 뉴스 카드 정보 리스트(집합)
	 */
	constructor(domEl, data = [], options = {}) {
    // NewsCardGrid 객체 생성 과정에서 전달된 문서 객체를 domEl 멤버로 참조
    this.domEl = domEl
    // NewsCardGrid 객체 생성 과정에서 전달된 뉴스 정보 데이터 배열을 data 멤버로 참조
    this.data = data
    // NewsCardGrid 객체 생성 과정에서 전달된 옵션 객체를 options 멤버로 참조
    this.options = options
    // NewsCard 객체를 수집해 보관 할 cards 멤버 초기화 (배열)
    this.cards = []
    // 초기화 메서드 실행
		this.init()
	}

	/**
	 * @method init
	 * 초기화 메서드
	 */
	init() {
    // UI 렌더링
		this.render()
	}

	/**
	 * @method render
	 * 뉴스 카드 정보 리스트를 순환하여 총 개수만큼 뉴스 카드 객체 생성
	 * 뉴스 카드 그리드의 cards 배열에 생성된 뉴스 카드 객체 추가
	 */
	render() {
    // data 멤버의 개수가 0일 경우는 뉴스 정보가 없으므로
    // 화면에 뉴스 정보가 없음을 출력 처리 (CSS 가상 요소 활용)
		if (this.data.length === 0) {
      // domEl 멤버에 참조된 문서 객체에 dont-has-children 클래스 속성 추가
      this.domEl.classList.add('dont-has-children')
      // 조건이 참인 경우, 렌더링 종료 (아래 코드 실행 ✘)
			return
    }
    // 위 조건이 거짓인 경우, 즉 뉴스 정보가 있으면 data 멤버에 참조된 뉴스 데이터 배열을 순환
		this.data.forEach((item) => {
      // 개별 뉴스 아이템 마다 NewsCard 객체 생성 처리
			const card = new NewsCard(item, this)
      // cards 멤버에 NewsCard 객체 추가
			this.cards.push(card)
		})
	}

	/**
	 * @method update
	 * 업데이트 된 뉴스 카드 정보 리스트를 순환하여 총 개수만큼 뉴스 카드 객체 생성
	 * 뉴스 카드 그리드의 cards 배열에 생성된 뉴스 카드 객체 추가
	 */
	update() {
    // 뉴스 북마크 서비스 객체의 getBookmark()를 사용해
    // JSON Server 데이터베이스(db.json)에 저장된 북마크 정보를 요청
    // 응답 결과가 성공이면 then() 구문에 연결된 콜백 함수 실행
    getBookmark()
      .then(({ data }) => {
        // 응답 받은 데이터를 data 멤버로 재 할당
        this.data = data
        // 기존에 그려진 뉴스 카드 그리드 화면의 UI를 지움
        this.domEl.innerHTML = ''
        // 다시 화면의 UI를 그림
        this.render()
      })
      // 오류가 발생하면 오류 메시지 출력
      .catch(error => console.error(error.message))
	}

	/**
	 * @method addCard
	 * 뉴스 카드 그리드 즐겨찾기 리스트 추가 메서드
	 * @param {Object} data 즐겨찾기 할 뉴스 카드 객체
	 */
	addCard(newData) {
    // 뉴스 북마크 서비스 객체의 getBookmark()를 사용해
    // JSON Server 데이터베이스(db.json)에 저장된 북마크 정보를 요청
    // 응답 결과가 성공이면 then() 구문에 연결된 콜백 함수 실행
		getBookmark().then(({ data }) => {
      // 응답 받은 북마크 데이터에서 추가하고자 하는 뉴스 데이터와 동일한지 확인하는 구문을 통해
      // 데이터베이스에 저장된 즉, 북마크 된 적 있는 데이터인지 확인
      let isExistData = data.findIndex((item) => item.uid === newData.uid) > -1
      // 북마크에 추가된 적이 없는 데이터라면 조건 실행
			if (!isExistData) {
        // 뉴스 북마크 서비스 객체의 addBookmark()를 사용해
        // 신규 북마크로 추가할 뉴스 데이터 객체를 전달
        // 통신이 성공하면 then() 구문에 연결된 콜백 함수 실행
				addBookmark(newData).then(() => {
          // 현재 콘솔 패널에 메시지 출력 설정
          // TODO: Notifacation 서비스 객체를 만들어 화면에 표시 (특정 시간 후 감춤)
					console.log('북마크 추가 알림')
        })
        // 오류가 발생하면 오류 메시지 출력
        .catch(error => console.error(error.message))
			}
		})
	}

	/**
	 * @method removeCard
	 * 뉴스 카드 그리드 즐겨찾기 리스트 제거 메서드
	 * @param {String} removeId 즐겨찾기 리스트에서 제거 할 뉴스 카드 ID
	 */
	removeCard(removeId) {
    // 뉴스 북마크 서비스 객체의 getBookmark()를 사용해
    // JSON Server 데이터베이스(db.json)에 저장된 북마크 정보를 요청
    // 응답 결과가 성공이면 then() 구문에 연결된 콜백 함수 실행
		getBookmark().then(({ data }) => {
      // 가져온 북마크 데이터에서 제거 할 뉴스의 인덱스를 확인
      let index = data.findIndex((item) => item.uid === removeId)
      // 인덱스가 -1보다 크다면, 즉 지울 수 있는 북마크 데이터라면 조건문 블록 실행
			if (index > -1) {
        // 뉴스 북마크 서비스 객체의 removeBookmark()를 사용해
        // 신규 북마크로 추가할 뉴스 데이터 객체의 uid를 전달
        // 통신이 성공하면 then() 구문에 연결된 콜백 함수 실행
				removeBookmark(removeId).then(() => {
          // 현재 콘솔 패널에 메시지 출력 설정
          // TODO: Notifacation 서비스 객체를 만들어 화면에 표시 (특정 시간 후 감춤)
					console.log('북마크 제거 알림')
					// 북마크 페이지인 경우에만, UI 업데이트
					if (this.options.mode === 'bookmark') {
            // UI 업데이트
						this.update()
					}
        })
        // 오류가 발생하면 오류 메시지 출력
        .catch(error => console.error(error.message))
			}
		})
	}

	/**
	 * @method cleanCards
	 * 뉴스 카드 그리드 즐겨찾기 리스트 초기화 메서드
	 */
	cleanCards() {
    // 뉴스 북마크 서비스 객체의 clearBookmark()를 사용해
    // JSON Server 데이터베이스(db.json)에 저장된 북마크를 초기화
    // 필요한 경우, 응답 결과에 따라 사용자에게 모든 데이터를 초기화 했음을 알릴 수 있음
		clearBookmark()
	}
}

// NewsCardGrid 클래스 모듈 내보내기
export default NewsCardGrid
```

### bookmarkService 서비스

`js/components/NewsCardGrid.js` 파일에서 호출되는 `js/services/bookmarkService.js` 코드를 해설합니다.

```js
// 비동기 통신 처리를 위임 할 라이브러리 모듈
import axios from 'axios'

// axios.create()를 사용해 데이터베이스 서비스 객체 생성
const dbService = axios.create({
	// 데이터베이스 기본 경로 설정
	baseURL: 'http://localhost:4000',
})

/**
 * @function getBookmark
 * GET: 데이터베이스에 저장된 북마크 데이터를 요청
 * @returns {Promise} 응답 결과 객체를 포함한 Promise 객체
 */
export const getBookmark = () => dbService.get('/bookmark')

/**
 * @function addBookmark
 * POST: 전달 받은 북마크 아이템 객체를 데이터베이스의 bookmark의 신규 아이템으로 저장 요청
 * @returns {Promise} 응답 결과 객체를 포함한 Promise 객체
 */
export const addBookmark = (newBookmarkItem) =>
	dbService.post('/bookmark', newBookmarkItem)

/**
 * @function removeBookmark
 * DELETE: 전달 받은 북마크 아이템 객체의 uid 속성 값을 비교해 데이터베이스의 저장된 bookmark 아이템 제거 요청
 * @returns {Promise} 응답 결과 객체를 포함한 Promise 객체
 */
export const removeBookmark = (removeIndex) =>
	// getBookmark()를 통해 데이터를 요청한 후, 응답 결과 반환
	getBookmark()
		// 통신 성공 시, 응답 결과를 처리하는 콜백 함수
		.then(({ data }) => {
			// 응답 결과의 데이터에서 지울 아이템을 찾아온 후,
			let removeItem = data.find((item) => item.uid === removeIndex)
			// dbService 객체를 통해 데이터베이스의 bookmark 아이템 제거 요청
			return dbService.delete(`/bookmark/${removeItem.id}`)
		})
		// 오류 발생 시, 오류 메시지 출력
		.catch((error) => console.error(error.message))

/**
 * @function clearBookmark
 * DELETE: 전달 받은 북마크 아이템 객체의 uid 속성 값을 비교해 데이터베이스의 저장된 bookmark 아이템 제거 요청
 * @returns {Promise} 응답 결과 객체를 포함한 Promise 객체
 */
export const clearBookmark = () => {
	// getBookmark()를 통해 데이터를 요청한 후, 응답 결과 반환
	getBookmark()
		// 응답 요청 성공 시, 콜백 함수 실행
		.then(({ data }) => {
			// 응답 데이터를 순환하여 각 아이템 별 제거 요청
			// ⚠️ JSON Server에 아이템을 모두 제거하는 기능이 없기 때문에 이렇게 처리
			//   실제 서비스에서는 백엔드 개발자가 기능을 API로 제공하면 해당 기능을 사용
			data.forEach((item) => dbService.delete(`/bookmark/${item.id}`))
		})
		// 오류 발생 시, 오류 메시지 출력
		.catch((error) => console.error(error.message))
}

// bookmarkService 서비스 객체 내보내기
export default {
	getBookmark,
	addBookmark,
	removeBookmark,
	clearBookmark,
}
```

### NewsCard 클래스

`js/components/NewsCardGrid.js` 파일에서 호출되는 `js/components/NewsCard.js` 코드를 해설합니다.

```js
// 고유한 ID를 생성하는 모듈
import uuid from 'uuid/v4'

// 재사용을 목적으로 사용하는 필터 유틸리티 모듈
import { ellipseText } from '../filters'

// NewsCardButton 객체 생성을 위한 NewsCardButton 클래스 모듈
import NewsCardButton from './NewsCardButton'

/**
 * @class NewsCard
 * 뉴스 카드 클래스
 */
class NewsCard {
	/**
	 * 뉴스 카드 객체 생성 시, 실행
	 * @param {Object} data 카드 정보 객체
	 * @param {NewsCardGrid} newsCardGrid 뉴스 카드 그리드 객체
	 * @param {Object} options 옵션
	 */
	constructor(data, newsCardGrid, options = {}) {
		// NewsCard 객체 생성 과정에서 전달된 뉴스 정보 데이터 배열을 data 멤버로 참조
		this.data = data
		// NewsCard 객체 생성 과정에서 전달된 상위 컴포넌트를 newsCardGrid 멤버로 참조
		this.newsCardGrid = newsCardGrid
		// NewsCard 객체 생성 과정에서 전달된 옵션 객체를 options 멤버로 참조 (기본 옵션 객체와 합성)
		this.options = Object.assign({}, NewsCard.defaultOptions, options)
		// 멤버 속성 초기화
		this.uid = null
		this.domEl = null
		this.cardButton = null
		// 초기화 메서드 실행
		this.init()
	}

	/**
	 * @method init
	 * 초기화 메서드
	 */
	init() {
		// data 멤버에 고유한 ID 속성이 없다면 조건문 블록 실행
		if (!this.data.uid) {
			// data 멤버의 uid 속성 값을 고유한 ID 값으로 설정
			this.data.uid = uuid()
		}
		// UI 렌더링
		this.render()
	}

	/**
	 * @method render
	 * 뉴스 카드 템플릿에 데이터를 바인딩 한 후, 뉴스 카드 그리드 컴포넌트의 마지막 자식 요소로 추가
	 */
	render() {
		// 뉴스 카드 그리드 컴포넌트의 DOM 객체 참조를 위한 구조 분해 할당 (별칭 설정)
		const { domEl: cardGrid } = this.newsCardGrid
		// data 멤버(뉴스 정보)의 각 속성을 구조 분해 할당
		const { title, description, url, urlToImage, bookmarked } = this.data
		// options 멤버의 readMore 속성을 구조 분해 할당
		const { readMore } = this.options

		// 뉴스의 이미지가 존재하지 않을 경우, 화면에 표시 할 플레이스 홀더 이미지 URL
		// 참고: https://placeholder.com/ (한글 지원 안됨 😱)
		const placeholderImg =
			'//via.placeholder.com/500x300/19102b/478cf1/?text=NEWS+IMAGE'

		// 뉴스 카드 템플릿
		// 데이터를 바인딩 하여 실제 DOM에 그려내기 위한 형판(template)
		// 참고: React에서는 JSX를 사용
		const card = `
			<article class="news__card">
				<img src=${urlToImage || placeholderImg} alt="" />
				<h2>${title}</h2>
				<p>
					${ellipseText(description, 80)}
				</p>
				<a href=${url}
					 target="_blank"
					 rel="noreferrer noopener">${readMore}</a>
			</article>
		`

		// 뉴스 카드 그리드 컴포넌트의 DOM 객체 마지막 자식 요소 노드로 card (HTML 코드) 추가
		cardGrid.insertAdjacentHTML('beforeend', card)
		// domEl 멤버에 실제 화면에 그려진 문서 객체 참조
		this.domEl = cardGrid.lastElementChild
		// NewCardButton 객체를 생성하여 cardButton 멤버에 참조
		// NewsCard 객체(컴포넌트)를 뉴스 카드 버튼 객체 생성 과정에 전달
		// 옵션 객체로 bookmarked 속성 전달
		this.cardButton = new NewsCardButton(this, { bookmarked })
	}

	/**
	 * @method addBookmark
	 * 북마크 추가 메서드
	 */
	addBookmark() {
		// 뉴스 카드의 북마크 상태를 true로 설정
		this.data.bookmarked = true
		// 뉴스 카드 데이터를 데이터베이스의 북마크에 추가하기 위해 상위 컴포넌트의 addCard() 메서드 실행
		this.newsCardGrid.addCard(this.data)
	}

	/**
	 * @method removeBookmark
	 * 북마크 제거 메서드
	 */
	removeBookmark() {
		// 뉴스 카드 데이터를 데이터베이스의 북마크에 제거하기 위해 상위 컴포넌트의 removeCard() 메서드 실행
		// 뉴스 카드의 고유 ID인 uid 속성 값을 전달
		this.newsCardGrid.removeCard(this.data.uid)
	}
}

/**
 * @static defaultOptions
 * 뉴스 카드 클래스 기본 옵션
 */
NewsCard.defaultOptions = {
	// 버튼 선택자
	buttonSelector: '.news__card--button',
	// 뉴스 카드 링크 텍스트
	readMore: '→ 뉴스 읽기',
}

// NewsCard 클래스 모듈 내보내기
export default NewsCard
```

### 필터(Filters): 유틸리티 함수

`js/components/NewsCard.js` 파일에서 호출되는 `js/filters/index.js` 코드를 해설합니다.

```js
/**
 * @function ellipseText
 * 전달 받은 문자 값의 특정 글자 개수만 표시하고 말 줄임 처리하는 유틸리티 함수
 * @param {String} content 말 줄임 처리할 문자 값
 * @param {Number} limit 말 줄임 처리할 문자 개수
 * @param {String} suffix 말 줄임 접미사
 */
export const ellipseText = (content, limit = 100, suffix = '...') => {
	return `${content.slice(0, limit)}${suffix}`
}

// 필터 모듈 내보내기
export default {
	ellipseText,
}
```

### NewsCardButton 클래스

`js/components/NewsCard.js` 파일에서 호출되는 `js/components/NewsCardButton.js` 코드를 해설합니다.

```js
/**
 * @class
 * 뉴스 카드 버튼 클래스
 */
class NewsCardButton {
	/**
	 * 뉴스 카드 버튼 객체 생성 시, 호출
	 * @param {NewsCard} newsCard 뉴스 카드 객체
	 * @param {Object} options 사용자 정의 옵션 객체
	 */
	constructor(newsCard, options = {}) {
		// newsCard 멤버로 NewsCardButton 객체 생성 과정에서 전달 받은 상위 컴포넌트 참조
		this.newsCard = newsCard
		// options 멤버로 옵션 객체 설정 (기본 옵션과 외부에서 전달된 옵션 객체 합성)
		this.options = Object.assign({}, NewsCardButton.defaultOptions, options)
		// 멤버 초기화
		this.domEl = null

		// 초기화 메서드 실행
		this.init()
	}

	/**
	 * @method init
	 * 초기화 메서드
	 */
	init() {
		// UI 렌더링
		this.render()
		// 이벤트 바인딩 메서드 실행
		this.bindEvents()
	}

	/**
	 * @method render
	 * 뉴스 카드 버튼 템플릿에 데이터를 바인딩 한 후, 뉴스 카드 마지막 자식 요소로 추가
	 */
	render() {
		// 상위 컴포넌트 참조인 newsCard 멤버의 domEl 속성을 구조 분해 할당 (별칭 설정)
		const { domEl: card } = this.newsCard
		// options 멤버의 속성을 구조 분해 할당
		const { bookmarked, addContent, removeContent } = this.options

		// 뉴스 카드 버튼 템플릿
		// 데이터를 바인딩 하여 실제 DOM에 그려내기 위한 형판(template)
		// 참고: React에서는 JSX를 사용
		const cardButton = `
			<button type="button"
							class="reset-button news__card--button"
			>
				${bookmarked ? removeContent : addContent}
			</button>
		`
		// 상위 컴포넌트의 DOM 객체 마지막 자식 요소로 cardButton 템플릿 HTML 코드 삽입
		card.insertAdjacentHTML('beforeend', cardButton)
		// 삽입 된 뉴스 카드 버튼(실제 DOM 문서 객체)을 domEl 멤버로 할당
		this.domEl = card.lastElementChild
	}

	/**
	 * @method bindEvents
	 * 뉴스 카드 버튼 객체 클릭 이벤트 연결 (즐겨찾기 토글 기능)
	 */
	bindEvents() {
		// domEl 멤버에 참조된 문서 객체에 클릭 이벤트 연결
		this.domEl.addEventListener('click', (e) => {
			// options 멤버의 각 속성을 구조 분해 할당
			const { bookmarked, addContent, removeContent } = this.options
			// bookmarkded 속성 값이 참이면, 즉 북마크 된 상태라면 조건문 블록 실행
			if (bookmarked) {
				// 상위 컴포넌트의 removeBookmark() 메서드 실행
				// 상위 컴포넌트에 북마크 제거 요청
				this.newsCard.removeBookmark()
				// 버튼의 콘텐츠를 addContent 값으로 업데이트
				this.updateContent(addContent)
			}
			else {
				// 상위 컴포넌트의 addBookmark() 메서드 실행
				// 상위 컴포넌트에 북마크 추가 요청
				this.newsCard.addBookmark()
				// 버튼의 콘텐츠를 removeContent 값으로 업데이트
				this.updateContent(removeContent)
			}
			// options 멤버의 bookmarked 속성을 반전(참/거짓 전환) 처리
			this.options.bookmarked = !bookmarked
		})
	}

	/**
	 * @method updateContent
	 * 전달 받은 콘텐츠를 뉴스 카드 버튼의 콘텐츠로 업데이트
	 * @param {String} newContent 업데이트 할 뉴스 카드 버튼 콘텐츠 (HTML 문자 등)
	 */
	updateContent(newContent) {
		// domEl 멤버 구조 분해 할당
		const { domEl } = this
		// domEl 멤버의 HTML 코드를 전달 받은 newContent로 교체
		domEl.innerHTML = newContent
		// domEl 멤버의 aria-label 속성을 조건 처리하여 설정
		domEl.setAttribute('aria-label', newContent === '🖤' ? '북마크 추가' : '북마크 제거')
	}
}

/**
 * @static defaultOptions
 * 뉴스 카드 버튼 클래스 기본 옵션
 */
NewsCardButton.defaultOptions = {
	// 북마크 상태
	bookmarked: false,
	// 추가 콘텐츠 아이콘 모양 (북마크 제거된 상태에서 표시)
	addContent: '🖤',
	// 제거 콘텐츠 아이콘 모양 (북마크 추가된 상태에서 표시)
	removeContent: '💖',
}

// NewsCardButton 클래스 내보내기
export default NewsCardButton
```

### NewsCardBookmark 엔트리 페이지

`js/entry.js` 파일에서 호출되는 `js/entryNewsCardBookmark.js` 코드를 해설합니다.

```js
// GSAP 애니메이션 모듈
import gsap from 'gsap'
// 북마크 서비스 모듈에서 함수 getBookmark 함수만 빼서 가져옴
import { getBookmark } from './services/bookmarkService'
// NewsCardGrid 클래스 모듈
import NewsCardGrid from './components/NewsCardGrid'

// 문서 객체 참조 변수 (초기 값 설정)
let cardGrid = null
let loadingSpinner = null

/**
 * @function init
 * 초기화 함수
 */
const init = () => {
	// 북마크 서비스를 통해 북마크 데이터를 로딩하는 함수 실행
	loadBookmark()
	// 문서 객체를 참조하는 함수 실행
	refereneceDomEls()
}

/**
 * @function refereneceDomEls
 * 문서 객체 참조 함수
 * @returns {HTMLElement} HTML 요소 객체
 */
const refereneceDomEls = () => {
	// 뉴스 카드 그리드 문서 객체 참조
	cardGrid = document.querySelector('.news__card--grid')
	// 로딩 스피너 문서 객체 참조
	loadingSpinner = document.querySelector('.loading-spinner')
}

/**
 * @function loadBookmark
 * 검색한 뉴스 API 데이터를 가져와 뉴스 카드 그리드를 생성하는 함수
 */
const loadBookmark = () => {
	// getBookmark()를 실행해 데이터베이스의 북마크 정보 GET 요청
	getBookmark()
		// 통신 성공 시, 뉴스 카드 그리드 생성
		.then(createNewsCardGrid)
		// 오류 발생 시, 오류 메시지 출력
		.catch((error) => console.error(error.message))
}

/**
 * @funciton createNewsCardGrid
 * 뉴스 카드 그리드를 생성하는 함수
 * @param {Object} response 응답 결과 객체
 * @param {Object} response.data 응답 결과 데이터
 */
const createNewsCardGrid = ({ data }) => {
	// NewsCardGrid 클래스를 사용해 객체 생성
	// 참조한 cardGrid 문서 객체를 전달
	// 응답 결과 북마크 데이터 전달
	// 북마크 모드로 옵션 객체 설정
	new NewsCardGrid(cardGrid, data, { mode: 'bookmark' })
	// GSAP을 사용해 로딩 스피너 애니메이션 설정
	// 뉴스 카드 그리드를 생성한 후, 로딩 스피너 감춤
	gsap.to(loadingSpinner, { duration: 0.04, autoAlpha: 0 })
}

// 초기화 함수 실행
init()
```