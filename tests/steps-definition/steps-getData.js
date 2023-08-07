const { Given, Then, When } = require('@cucumber/cucumber');
const chai = require('chai');
chai.use(require('chai-json-schema'));
const expect = chai.expect;
const { get } = require('../../src/connector/connector.js');
const schema = require('../../src/helper/response-schema/getJsonSchema.json');

Given(
	'A GET API endpoint',
	function () {
		return;
	}
);

When(
	/^I send GET request to \/posts$/,
	async function () {
		this.response = await get();
	}
);

Then(
	'I get response HTTP 200 OK',
	function () {
		const response = this.response;
		expect(response.status).to.equal(200);
	}
);

Then(
	'I get response body as an Array',
	function () {
		const response = this.response;
		expect(response.body).to.be.an('array');
	}
);

Then(
	'I get response body has at least one element',
	function () {
		const response = this.response;
		expect(response.body).that.is.not.empty;
	}
);

Then(
	'I get response body matches with the Schema for GET request',
	function () {
		const response = this.response;
		expect(response.body).to.be.jsonSchema(schema);
	}
);

Then(
	/^I get response body has (.*) field that is an (.*)$/,
	function (key, type) {
		const response = this.response;
		response.body.forEach(function (element) {
			if (type == 'String') expect(element[key]).to.exist.and.to.be.a(type);
			if (type == 'Integer') expect(Number.isInteger(element[key])).to.be.true;
		});
	}
);

Then(
	/^I get response body has (.*) that is a non-negative Integer$/,
	function (key) {
		const response = this.response;
		response.body.forEach(function (element) {
			expect(element[key]).to.be.at.least(0);
		});
	}
);

Then(
	/^I get response body has unique (.*) values$/,
	function (key) {
		const response = this.response;
		const set = new Set();
		response.body.forEach(function (element) {
			expect(set.has(element[key])).to.be.false;
			set.add(element[key]);
		});
	}
);