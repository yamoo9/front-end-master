/**
 * 작성자: yamoo9 <yamoo9@naver.com>
 */
const fs = require('fs')
const path = require('path')
const cmd = require('node-cmd')

const srcDir = path.join(__dirname, '..', 'src')
const stylusDir = path.join(srcDir, 'stylus')

// 빌드 모드 상태 변수
let isProduction = process.env.NODE_ENV === 'production'

/**
 * Stylus 컴파일 함수
 */
const compileStylus = () => {
	const hasSourcemap = !isProduction ? `--sourcemap-inline` : ''
	cmd.run(`npx stylus ${hasSourcemap} ./src/stylus/entry.styl -o ./src/css`)
}
// 초기 Stylus 컴파일 실행
compileStylus()

// 개발 모드에서만: Stylus 파일 변경 감지 시, 컴파일 재실행
if (!isProduction) {
	fs.watch(
		stylusDir,
		{
			recursive: true,
		},
		(type, filename) => {
			compileStylus()
		}
	)
}
