/* istanbul ignore file */

const { config } = require('./package.json');

module.exports = {
	verbose: true,
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$':
			'<rootDir>/__mocks__/file-mock.js',
		'\\.(s?css)$': 'identity-obj-proxy'
	},
	setupFiles: ['<rootDir>/enzyme.setup.js', './test-utils/setup-jest.js'],
	coveragePathIgnorePatterns: [
		'test-utils',
		'scripts.node-release-tasks',
		'.json',
		'server/routes',
		'lib/fixtures',
		'lib/constants',
		'types',
		'config'
	],
	collectCoverage: true,
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100
		}
	},
	transformIgnorePatterns: ['node_modules/(?!ps-react-bootstrap)'],
	testURL: `http://${config.hostname}`
};
