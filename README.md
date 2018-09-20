# karma-inject-mock-preprocessor
A Karma plugin for injecting mock dependencies.

## How does it work?

For every processed file, the preprocessor will look for a mock file of the same name.

If a mock file exists, the content of the processed file will be replaced by the content of the mock file and then served. If not, the content is served as found.

Please note that any paths in the mock file must be relative to the location of the processed file.

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
