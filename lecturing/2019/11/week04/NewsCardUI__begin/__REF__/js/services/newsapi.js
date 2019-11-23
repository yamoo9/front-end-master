/**
 * 참고: 
 * https://newsapi.org/
 * http://bit.ly/2r8jf1B
 */

// 비동기 통신 처리를 위임 할 라이브러리 모듈
import axios from 'axios'

// axios.create()를 사용해 뉴스 API 서비스 객체 생성
const newsapi = axios.create({
	// News 오픈 API 기본 경로 설정
	baseURL: 'https://newsapi.org/v2',
})

// News 오픈 API에 데이터 요청을 위한 토큰(인증)
// ⚠️ 현재 백엔드에서 서비스 하는 것이 아니기에 토큰 정보가 노출 됨 (보안 이슈)
//    백엔드에서 서비스 할 경우, 토큰 정보를 노출 시키지 않음
const AUTH_THOKEN = 'e8078a1cf5304d95a584d075e031c835'

// News 오픈 API의 인증에 토큰 정보 설정
newsapi.defaults.headers.common['Authorization'] = AUTH_THOKEN

// 뉴스 API 서비스 객체 내보내기
export default newsapi
