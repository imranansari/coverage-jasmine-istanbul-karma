module.exports = function(config) {
  config.set({
    basePath: '',
    autoWatch: true,
    frameworks: ['jasmine'],
    files: [
      'sqrt.js',
      'test/spec/*.js'
    ],
    browsers: ['PhantomJS'],

    reporters: ['progress', 'coverage', 'junit'],
    preprocessors: { '*.js': ['coverage'] },

    singleRun: true,
  
    coverageReporter: {
      type: 'text'
    },
    
    junitReporter: {
      outputFile: 'test-results.xml'
    }
  });
};
