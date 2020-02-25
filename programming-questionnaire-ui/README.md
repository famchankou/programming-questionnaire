# Programming Questionnaire UI

Frontend part for Questionnaire sandbox app

- React
- Redux
- Redux-thunk
- Formik
- Highcharts

### Installation

Questionnaire requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd programming-questionnaire-ui
$ npm install -d
$ npm start
```

### Documentation

For view documentation run command

```sh
$ cd programming-questionnaire-ui
$ npm run docs
```

After that open index.html in generated docs folder

### Deploy

This is example for deploying using Netlify (https://www.netlify.com/)

- First you need to sign up.
- After login press button "New site from GIT"
- Then choose GitHub
- Pick programming-questionnaire repo
- Pick branch to deploy, Build command (npm run build) and Publish directory (programming-questionnaire-ui/build)
- After that go to the settings, Build & Deploy and Edit build settings
- Change base directory to 'programming-questionnaire-ui'
