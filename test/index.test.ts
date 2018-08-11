import request = require('supertest');
import { server } from './../src/index';

describe('Test the root path', () => {
    afterAll(() => {
        server.close();
    });

    test('It should response the GET method', (done) => {
        request(server).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});
