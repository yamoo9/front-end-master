/**
 * defer 속성
 * IE 6-9 (불완전: 의존 모듈이 있는 스크립트에 사용할 경우 버그 발생)
 * 참고: https://caniuse.com/#feat=script-defer
 * 대체 수단: 없음. (</body> 앞에서 <script> 호출하는 방법 사용 권장)
 */

/**
 * IE 9 이하 호환성 
 * IE 버전 감지 참고: http://bit.ly/2Of8fHQ
 */
if (document.all && !window.atob) {
	/**
	 * CSS Flexbox 참고: http://bit.ly/2KkcvnY
 	 * 대체 수단: Flexibility.js
	 */
	import('./flexibility.min.js')

	/**
    * addEventListener / removeEventListener
    * IE 9+
    * 참고: http://bit.ly/2O7Z23Y
    * 대체 수단: ie8.js
    */
	import('./ie8.min.js')

	/**
    * querySelector / querySelectorAll
    * IE 8+
    * 참고: https://caniuse.com/#feat=queryselector
    * 대체 수단: 필요 없음
    */
}

/**
 * IE 8+ 호환성
 */
if (document.querySelector) {
	/**
    * classList
    * IE 미지원
    * 참고: https://caniuse.com/#search=classList
    * 대체 수단: classList.min.js
    */
   import('./classList.min.js')
}


/**
 * CSS Transition
 * IE 10+
 * 참고: http://bit.ly/32Nnrkl
 * 대체 수단: GSAP, jQuery 라이브러리 활용
 */

/**
 * CSS Animation
 * IE 10+
 * 참고: http://bit.ly/2QfI2LO
 * 대체 수단: GSAP, jQuery 라이브러리 활용
 */

/**
 * CSS 2D Transforms
 * IE 10+
 * 참고: http://bit.ly/2Xh75PZ
 * 대체 수단: GSAP 라이브러리 활용
 */

/**
 * CSS 3D Transforms
 * IE 10+ (불완전)
 * 참고: http://bit.ly/2Xh7baj
 * 대체 수단: GSAP 라이브러리 활용
 */
