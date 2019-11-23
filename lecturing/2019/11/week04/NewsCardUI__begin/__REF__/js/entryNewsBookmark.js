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
