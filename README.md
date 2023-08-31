## api-cucumberjs-example

<a href="https://gitlab.com/lynix28/api-cucumberjs-example/-/pipelines"><img alt="pipeline status" src="https://gitlab.com/lynix28/api-cucumberjs-example/badges/master/pipeline.svg" /></a>

This project is contain API testing using CucumberJS

---

Tools:

- CucumberJS for test framework
- Chai for test assertion
- Supertest for HTTP request module

---

How to setup:

- Clone this repository
- Install the dependencies (Need NodeJS & NPM)

   - `npm install`

- Rename the file `env.example` to `.env`

---

How to run:

- For all tests

   - `npm run test`

- For specific feature using tags

   - `npm run test -- --tags "@post"`

---

Report:

- The file report will be generated in HTML and saved to `reports` directory
- Allure report also will generated, open it using this command `npm run report`