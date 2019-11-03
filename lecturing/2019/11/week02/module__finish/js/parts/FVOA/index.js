import {
  videoPlayer,
  actionPlayButton,
  actionCloseButton
} from './discoveredElements.js'

import {
  canPlaying,
  hideVideo,
  showVideo
} from './videoControl.js'

import {  
  on as addEvent
} from '../../utils/DOM.js'


// 미디어 서버에서 비디오가 불러와서 재생 가능해지면
addEvent(videoPlayer, 'canplaythrough', canPlaying)

// 비동기 처리 시뮬레이션
// window.setTimeout(canPlaying, 3000)

// video가 모두 재생되어 종료되면
addEvent(videoPlayer, 'ended', hideVideo)

// 액션 플레이 버튼을 사용자가 클릭하면
addEvent(actionPlayButton, 'click', showVideo)

// 액션 닫기 버튼을 사용자가 클릭하면
addEvent(actionCloseButton, 'click', hideVideo)