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

		// 뉴스 카드 그리드 컴포넌트의 DOM 객체 마지막 자식 요소로 card 템플릿 HTML 코드 삽입
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
