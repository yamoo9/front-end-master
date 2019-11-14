/** GSAP (Green Sock Animation Platform) 활용
 *
 *  GSAP을 사용하는 이유: https://greensock.com/why-gsap/
 *  1. CSS3 호환성
 *     CSS3의 Transition, Animation, 2D Transform은
 *     IE 8은 물론, IE 9에서도 정상 작동하지 않는 문제가 있음 
 *     하지만 GSAP 라이브러리를 사용할 경우, IE 8+ 호환성 보장 (아마도...)
 *  2. jQuery 애니메이션 보다 약 x20 빠름
 *  
 *  v3 릴리즈 노트: https://greensock.com/3-release-notes
 *  1. gsap으로 통일 (v2에서는 TweenLite, TweenMax, TimelineLite, TimelineMax로 구분해 사용)
 *     ```example
 *        // 트윈
 *        gsap.to('.element', { duration: 0.4, x: 100 })
 *        // 타임라인 
 *        const tl = gsap.timeline()
 *        tl.to('.element', { duration: 0.5, y: -100 })
 *     ```
 *  2. duration 속성을 vars 객체 안에 설정 가능 (하위 버전 코드도 호환 가능)
 *     ```example
 *        // v2
 *        TweenLite.to('.element', 0.4, { x: 100 })
 *        // v3
 *        gsap.to('.element', { duration: 0.4, x: 100 })
 *     ```
 *  
 *  v3 참고:   https://greensock.com/3
 *  공식 문서:  https://greensock.com/docs/v3
 *  CDN 활용:  https://greensock.com/docs/v3/Installation#cdn
 *  NPM 활용:  npm install gsap
 */
import gsap from 'gsap'

gsap.fromTo(
	'.feml__headerbar',
	0.4,
	{ autoAlpha: 0, y: -100 },
	{ autoAlpha: 1, y: 0, delay: 0.3 }
)
