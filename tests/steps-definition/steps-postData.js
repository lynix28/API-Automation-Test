const { Given, When, Then } = require('@cucumber/cucumber');
const chai = require('chai');
chai.use(require('chai-json-schema'));
const expect = chai.expect;
const { post } = require('../../src/connector/connector.js');
const schema = require('../../src/helper/response-schema/postJsonSchema.json');
const payloadExample = require('../../src/helper/payload-example.js');

Given(
	'A POST API endpoint',
	function () {
		return;
	}
);

When(
	/^I send POST request to \/posts(?: using request)?(?: (.+))?$/,
	async function (payload) {
		if (payload == undefined) payload = payloadExample.post;
		this.response = await post(payload);
		this.payload = payload;
	}
);

Then(
	'I get response HTTP 201 Created',
	function () {
		const response = this.response;
		expect(response.status).to.equal(201);
	}
);

Then(
	'I get response body matches with the Schema for POST request',
	function () {
		const response = this.response;
		expect(response.body).to.be.jsonSchema(schema);
	}
);

Then(
	/^I get response body that has (.*) value that is (.*) String$/,
	function (key, condition) {
		const response = this.response;
		if (condition == 'non-empty') expect(response.body[key]).to.be.exist.and.to.be.a('string').and.to.have.lengthOf.at.least(1);
		if (condition == 'empty') expect(response.body[key]).to.be.exist.and.to.be.a('string').and.to.be.empty;
	}
);

Then(
	/^I get response body that has userId value that is a (.*) Integer$/,
	function (condition) {
		const response = this.response;
		if (condition == 'positive') {
			expect(Number.isInteger(response.body.userId)).to.be.true;
			expect(response.body.userId).to.be.above(0);
		}

		if (condition == 'negative') {
			expect(Number.isInteger(response.body.userId)).to.be.true;
			expect(response.body.userId).to.be.below(0);
		}

		if (condition == 'zero') {
			expect(Number.isInteger(response.body.userId)).to.be.true;
			expect(response.body.userId).to.be.equal(0);
		}
	}
);

Then(
	'I get response body that has a valid key value as inputed payload',
	function () {
		const response = this.response;
		const payload = JSON.parse(this.payload);
		expect(response.body.title).to.be.equal(payload.title);
		expect(response.body.body).to.be.equal(payload.body);
		expect(response.body.userId).to.be.equal(payload.userId);
	}
);