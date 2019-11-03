import { el } from '../../utils/DOM.js'

// 컨트롤 할 문서 객체 각 변수에 참조
export const actionWrapper = el('.action__wrapper')
export const actionPlayButton = el('.action--play', actionWrapper)
export const actionCloseButton = el('.action--close', actionWrapper)
export const videoOuter = el('.video__outer', actionWrapper)
export const videoPlayer = el('.video', videoOuter)