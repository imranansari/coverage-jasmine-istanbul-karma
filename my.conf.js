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

    reporters: ['progress', 'coverage', 'tap'],
    preprocessors: { '*.js': ['coverage'] },

    singleRun: true,
  
    coverageReporter: {
      type: 'text'
    },
    
    tapReporter: {
      outputFile: './tap-unit.tap',
      disableStdout: true
    }
  });
};
