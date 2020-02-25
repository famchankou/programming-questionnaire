# Programming Questionnaire Server

Backend application for Questionnaire sandbox app.
  - PostgreSQL/Sequelize ORM
  - Node.js
  - Express
  - Swagger API Docs
  - Nodemon

### Installation

Questionnaire requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server:

```sh
$ cd programming-questionnaire-server
$ npm install -d
$ npm start
```

For data migration run the following after starting and stopping the server:

```sh
$ npm run seeders:load
```
Note: if flag 'eraseDatabaseOnSync' in the ~/src/app.js is set to true, then all DB Tables and Records
will be flushed on any server restart
Once the app is started for the first time, the sync method in ~/src/app.js will migrate the tables

To open Swagger Docs, start the server and go to http://localhost:8080/api-docs

To run the unit/e2e tests:

```sh
$ npm run test
```