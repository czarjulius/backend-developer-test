import { expect } from 'chai';
import { describe } from 'mocha';
import supertest from 'supertest';
import server from '../../server';

const api = supertest(server);

describe('tests for user controller', async () => {
  describe('/POST create user', () => {
    it('should create a new user', (done) => {
      const user = {
        userName: 'Julius',
        email: 'jjude@gmail.com',
        password: '123Def@1'
      };
      api.post('/user/auth/signup')
        .send(user)
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body).to.have.property('status');
          expect(res.body.status).to.equal(201);
          done();
        });
    });
  });
});

describe('/POST Login user', () => {
  it('should login a registered user', (done) => {
    const user = {
      email: 'julius@gmail.com',
      password: 'j@123',
    };
    api.post('/user/auth/login')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.equal(200);
        done();
      });
  });
});
