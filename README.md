## api-cucumberjs-example

This project is contain API testing scenario using CucumberJS for PINTU technical assessment purposes

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
