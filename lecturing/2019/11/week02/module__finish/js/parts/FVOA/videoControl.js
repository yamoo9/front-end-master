import {
  actionWrapper,
  videoOuter,
  videoPlayer,
  actionPlayButton
} from './discoveredElements.js'

/**
 * @function canPlaying
 * @summary  비디오 재생이 준비되면 실행
 */
export const canPlaying = () => {
  actionWrapper.classList.add('video--loaded')
}

/**
 * @function showVideo
 * @summary  비디오 상태(보임) 변경, 플레이 버튼 zIndex 인라인 스타일 설정 추가, 비디오 재생(시작부터)
 */
export const showVideo = () => {
  videoOuter.classList.remove('video--hide')
  videoOuter.classList.add('video--show')
  actionPlayButton.style.zIndex = 10
  videoPlayer.currentTime = 0
  videoPlayer.play()
}

/**
 * @function hideVideo
 * @summary  비디오 상태(감춤) 변경, 플레이 버튼 zIndex 인라인 스타일 설정 제거, 비디오 일시정지
 */
export const hideVideo = () => {
  videoOuter.classList.remove('video--show')
  videoOuter.classList.add('video--hide')
  actionPlayButton.removeAttribute('style')
  videoPlayer.pause()
}