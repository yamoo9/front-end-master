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
