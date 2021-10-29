const { getJestProjects } = require('@nrwl/jest')

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/mobile/ionic-angular',
    '<rootDir>/apps/web/angular',
    '<rootDir>/libs/web/angular/shared/component',
    '<rootDir>/apps/web/react',
    '<rootDir>/apps/web/vue',
    '<rootDir>/libs/web/angular/shared/directive',
  ],
}
