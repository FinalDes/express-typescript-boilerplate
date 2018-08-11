import request = require('supertest');
import { app } from './../src/index';

describe('Test the root path', () => {
    it('It should response the GET method', () => {
        return request(app).get('/').then( (response: any) => {
            expect(response.statusCode).toBe(200);
        });
    });
});
