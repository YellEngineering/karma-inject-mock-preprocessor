var fs = require('fs');
var path = require('path');
var assign = require('object-assign');

var createInjectMockPreprocessor = function(config, logger){
	var log = logger.create('preprocessor.inject-mock');

	config = assign({
		relativePathToMocks: './tests/mocks'
	}, config);

	return function(content, file, done){
		log.debug('Processing "%s"', file.originalPath);

		let pathToMock = path.join(path.dirname(file.originalPath), config.relativePathToMocks, path.basename(file.originalPath))

		fs.readFile(pathToMock, 'utf8', function(err, mockContent){
			if(err){
				done(content);
			}
			else{
				log.info('Mock found at "%s"', pathToMock);
				done(mockContent);
			}
		});
	}
};

createInjectMockPreprocessor.$inject = ['config.injectMockPreprocessor', 'logger'];

// PUBLISH DI MODULE
module.exports = {
	'preprocessor:inject-mock': ['factory', createInjectMockPreprocessor]
};
