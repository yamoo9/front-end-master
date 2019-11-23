/**
 * 참고: 
 * https://github.com/typicode/json-server
 */

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
