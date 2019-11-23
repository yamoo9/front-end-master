/**
 * 참고: 
 * 	https://parceljs.org/api.html
 * 
 * 작성자: yamoo9 <yamoo9@naver.com>
 */
const Bundler = require('parcel-bundler')
const path = require('path')
const fs = require('fs')

// 빌드 모드 상태 변수
let isProduction = process.env.NODE_ENV === 'production'

/**
 * @type {Object}
 * @summary Parcel 기본 옵션
 */
const defaultOption = {
	outDir: path.join(__dirname, '..', 'dist'),
	cacheDir: '.cache',
	contentHash: false,
	publicUrl: '/',
	detailReport: true,
	cache: true,
	minify: true,
	sourceMaps: true,
	http: true,
}

/**
 * @type {Object}
 * @summary Parcel 개발/배포 옵션
 */
const option = !isProduction
	? // 개발용 옵션
		{
			cache: true,
			minify: false,
			sourceMaps: true,
			watch: true,
		}
	: // 배포용 옵션
		{
			outDir: path.join(__dirname, '..', 'build'),
			cache: false,
			minify: true,
			sourceMaps: false,
			http: true,
		}

// 진입 파일
const entryFilePath = path.join(__dirname, '..', 'src', '*.html')

// 멀티 진입 파일 설정
// 참고: https://github.com/parcel-bundler/parcel/issues/1895#issuecomment-413240162
// 공백으로 구분된 다수의 HTML 엔트리 파일 설정
// const entryFilePath = path.join(__dirname, '..', 'src', 'index.html bookmark.html')
// Glob 문법
// const entryFilePath = path.join(__dirname, '..', 'src', 'pages', '*.html')

// 번들 옵션(병합)
const bundleOptions = Object.assign({}, defaultOption, option)

// 번들러 생성
const bundler = new Bundler(entryFilePath, bundleOptions)

// 초기 번들 실행
bundler.bundle()

module.exports = (req, res, next) => {
	bundler.middleware()
	next()
}
