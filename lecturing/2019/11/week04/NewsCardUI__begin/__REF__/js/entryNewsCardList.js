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
let searchList = '디자인 개발 열정 패션  손홍민 지소미아 갤럭시폴드 접근성 UX'.split(' ')

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
 * 검색한 뉴스 API 데이터를 가져와 뉴스 카드 그리드 생성 명령을 실행하는 함수
 */
const loadNews = () => {
	// 임의의 검색어 설정
	let search = randomSearch()
	// 뉴스 API에 검색어 전달 (비동기 통신 후, 데이터 반환 요청)
	newsapi
		.get(`everything?q=${search}`)
		// 통신 성공 시, 뉴스 카드 그리드 생성 함수 실행
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
