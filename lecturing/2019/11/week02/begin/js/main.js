/**
 * main.js
 *  
 * Copyright 2019, Front-End Masters League
 * http://yamoo9.github.io
 */

/**
 * ❓요청사항
 *   링크를 클릭할 때 화면에 표시되는 테두리를 안 보이게 할 수 없나요?
 * 
 * ⚠️ 고려사항
 *    한국형 웹 콘텐츠 접근성 가이드라인(KWCAG 2.1) 
 *    https://bit.ly/kwcag21 (page 31)
 * 
 *    6. 운용의 용이성(Operable)
 *    6.1.1. (키보드 사용 보장) 모든 기능은 키보드만으로도 사용할 수 있어야 한다. 
 *    6.1.2. (초점 이동) 키보드에 의한 초점은 논리적으로 이동해야 하며 시각적으로 구별할 수 있어야 한다. 
 *    6.1.3. (조작 가능) 사용자 입력 및 컨트롤은 조작 가능하도록 제공되어야 한다.
 * 
 * ❗️대안방안
 *   외부 페이지로 이동하는 링크일 경우, 링크 클릭 시
 *   mousedown 이벤트를 사용하여 포커스 상태를 안보이도록 조치 할 수 있다.
 */
