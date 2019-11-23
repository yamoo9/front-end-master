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
