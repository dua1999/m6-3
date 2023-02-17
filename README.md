# Project Title : Web Tooling

## Available Scripts

-In the project directory, you can run to download dependencies:

### `npm i`

-In the project directory, to start the app run:

### `npm start`

-Runs the app in the development mode.\

# Tools Used

## prettier

-To enforces a consistent code across the entire codebase.
read more from: https://prettier.io/

## eslint

-To allow addintion of custom rules according to the needs of the project.
read more from: https://www.npmjs.com/package/eslint

## husky

-To help manage scripts.
read more from: https://www.npmjs.com/package/husky

## lint-staged

-executing the command git commit automatically runs the linter against files staged for commit.
read more from: https://www.npmjs.com/package/lint-staged?activeTab=readme

# Git hooks

-trigger actions in response to specific events, so they can help you automate your development lifecycle
This project runs a linter and unit tests before committing to git

# npm Scripts:

### start script

runs react-scripts start

### format script

runs prettier --write .

### lint script

runs eslint --fix .

### test script

runs react-scripts test

### prepare script

runs husky install

### precommit script

runs eslint .

### build script

runs react-scripts build

### eject script

runs react-scripts eject

# Github actions

This projects has three github action files:

## lint-project.yml

This git hub action is to run lint

## test-project.yml

This github action is to run unit testing

## prettier-project.yml

This github action checks the prettier plugin.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
