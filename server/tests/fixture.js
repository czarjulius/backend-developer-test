import { expect } from 'chai';
import { describe } from 'mocha';
import supertest from 'supertest';
import server from '../../server';


const api = supertest(server);
let token;
let id;
describe('tests for Fixture controller', () => {
  it('should get login and return admin token', (done) => {
    const user = {
      email: 'julius@gmail.com',
      password: 'j@123',
    };
    api.post('/user/auth/login')
      .send(user)
      .end((err, res) => {
        token = res.body.token;
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.equal(200);
        done();
      });
  });

  describe('/POST add fixture', () => {
    it('should create a new team', (done) => {
      const fixture = {
        hostTeamId: '5d8aaff61d48ff3bf4db6549',
        awayTeamId: '5d8aab1453b84c119cde51ef',
      };
      api.post('/fixture/add/')
        .set('x-access-token', token)
        .send(fixture)
        .end((err, res) => {
          id = res.body._id;
          expect(res.status).to.equal(201);
          expect(res.body).to.have.property('status');
          expect(res.body.status).to.equal(201);
          done();
        });
    });
  });

  describe('/PUT  Fixture', () => {
    it('should change fixture IDs', (done) => {
      const fixture = {
        hostTeamId: '5d8aaff61d48ff3bf4db6549',
        awayTeamId: '5d8aab1453b84c119cde51ef',
        matchDate:'04-09-2018'
      };
      api.put(`/fixture/update/5d8aaff61d49ff3bf4db6549`)
        .set('x-access-token', token)
        .send(fixture)
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body).to.have.property('status');
          expect(res.body.status).to.equal(404);
          done();
        });
    });
  });

  describe('/GET all fixtures', () => {
    it('should get all the fixtures', (done) => {
      api.get(`/fixture/view/`)
        .set('x-access-token', token)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.have.property('status');
          expect(res.body.status).to.equal(200);
          done();
        });
    });
  });


  describe('/DELETE  fixture by id', () => {
    it('should delete a specific team detail', (done) => {
      api.delete(`/fixture/delete/5d8aa8baf63c2b086c6404bf`)
        .set('x-access-token', token)
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body).to.have.property('status');
          expect(res.body.status).to.equal(404);
          done();
        });
    });
  });
});
