import request = require('supertest');
import { server } from './../src/index';

describe('Test the root path', () => {
    afterAll(() => {
        server.close();
    });

    test('It should response the GET method', (done) => {
        request(server).get('/').then((response: request.Response) => {
            expect(response.status).toBe(200);
            done();
        });
    });
});
