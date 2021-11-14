const { setHeadlessWhen } = require('@codeceptjs/configure');


setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './Tests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
          url: 'https://oranum.com',
      show: true,
      windowSize: '1024x600',
    }
  },
  include: {
      I: './steps_file.js',
      searchHomePage: './pages/search_home_page.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'automationHw',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}