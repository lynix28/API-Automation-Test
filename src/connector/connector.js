const supertest = require('supertest');
require('dotenv').config();
const { path } = require('../helper/endpoint-path.js');

const api = supertest(process.env.BASEURL);

module.exports = {
	get: function () {
		return api.get(path.posts);
	},
	post: function (payload) {
		return api.post(path.posts)
			.set('Content-Type', 'application/json')
			.send(payload);
	}
};