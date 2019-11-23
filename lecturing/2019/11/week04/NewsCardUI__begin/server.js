/**
 * 작성자: yamoo9 <yamoo9@naver.com>
 */

// stylus 컴파일 & 관찰
require('./config/stylus.config')

const liveServer = require('live-server')
const parcelMiddleware = require('./config/parcel.config')

const params = {
	port: 8181,
	host: 'localhost',
	root: './dist',
	open: true,
	file: 'index.html',
	wait: 1000,
	logLevel: 2,
	middleware: [
		parcelMiddleware,
	],
}

liveServer.start(params)
