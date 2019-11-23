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
			.catch((error) => console.error(error.message))
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
				addBookmark(newData)
					.then(() => {
						// 현재 콘솔 패널에 메시지 출력 설정
						// TODO: Notifacation 서비스 객체를 만들어 화면에 표시 (특정 시간 후 감춤)
						console.log('북마크 추가 알림')
					})
					// 오류가 발생하면 오류 메시지 출력
					.catch((error) => console.error(error.message))
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
				removeBookmark(removeId)
					.then(() => {
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
					.catch((error) => console.error(error.message))
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
