import gsap from 'gsap'

let cardGrid = null
let loadingSpinner = null

const init = () => {
	// 뉴스 API를 통해 뉴스 데이터를 가져와 뉴스 카드 UI 구성
	refereneceDomEls()
}

const refereneceDomEls = () => {
	cardGrid = document.querySelector('.news__card--grid')
	loadingSpinner = document.querySelector('.loading-spinner')
}

init()
