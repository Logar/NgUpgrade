# NgUpgrade [![MIT license](http://img.shields.io/badge/license-MIT-lightgrey.svg)](http://opensource.org/licenses/MIT)

Sample project to upgrade from AngularJS to Angular (ng1 to ng10) using NgUpgrade and Angular CLI. 
The frontend is generated with [Angular CLI](https://github.com/angular/angular-cli). The backend is made from scratch. Whole stack in [TypeScript](https://www.typescriptlang.org).

This project uses a [EAN stack] @See(https://en.wikipedia.org/wiki/MEAN_(software_bundle)):
* [**E**xpress.js](http://expressjs.com): backend framework
* [**A**ngular 2+](https://angular.io): frontend framework
* [**N**ode.js](https://nodejs.org): runtime environment

Other tools and technologies used:
* [Angular CLI](https://cli.angular.io): frontend scaffolding
* [Bootstrap](http://www.getbootstrap.com): layout and styles

## Prerequisites
1. Install [Node.js](https://nodejs.org)
2. Install Angular CLI: `npm i -g @angular/cli`
3. From project root folder install all the dependencies: `npm i`

## Run
### Development mode
Run `ng serve`

## Running tests
Run `ng test` to execute the frontend unit tests via [Karma](https://karma-runner.github.io).

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Running linters
Run `ng lint` to execute the frontend TS linting via [TSLint](https://github.com/palantir/tslint).

Run `npm run lintbe` to execute the backend TS linting via [TSLint](https://github.com/palantir/tslint).

Run `npm run linthtml` to execute the frontend HTML linting via [HTMLHint](https://github.com/htmlhint/HTMLHint).

Run `npm run lintscss` to execute the frontend SCSS linting via [SASS-Lint](https://github.com/sasstools/sass-lint).

## Further help
To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
