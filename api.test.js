const fetch = require('node-fetch');

const app = require('./api').app;
const server = require('./api').server;

const BASE_URL = 'http://localhost:3000';

afterAll(async() => {
        await server.close();
    });

test('app module should be defined', () => {
  expect(app).toBeDefined();
});

test('GET / should return 200 (using fetch)', () => {
  return fetch(BASE_URL).then(response => {
    expect(response.status).toBe(200);
  });
});

// you can also use async/await
test('GET / should return 200 (using fetch & async/await)', async () => {
  let response = await fetch(BASE_URL);
  expect(response.status).toBe(200);
});

test('GET /square?string=hello should return 200 and result property in body (fetch)', () => {
  return fetch(BASE_URL + '/square?string=hello')
    .then(response => {
      expect(response.status).toBe(200);
      return response.json();
    })
    .then(rjson => {
      expect(rjson.result).toBeDefined();
    });
});
