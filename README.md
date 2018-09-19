# karma-inject-mock-preprocessor
A Karma plugin for injecting mock dependencies.

## Installation

```bash
npm i -S https://github.com/YellEngineering/karma-inject-mock-preprocessor.git
```

## Configuration

```js
// karma.conf.js
module.exports = function(config) {
	config.set({
		preprocessors: {
			'**/*.js': ['inject-mock']
		},

		injectMockPreprocessor: {
			relativePathToMocks: '.tests/mocks'
		}
	});
}
```

## License

This work is © Yell Limited and is licensed under the [MIT license](https://github.com/YellEngineering/karma-inject-mock-preprocessor/blob/master/LICENSE)
