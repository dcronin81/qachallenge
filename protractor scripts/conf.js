// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['addToDo.js'],
  useAllAngular2AppRoots: true,
}