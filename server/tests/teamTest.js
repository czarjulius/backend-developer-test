import { expect } from 'chai';
import { describe } from 'mocha';
import supertest from 'supertest';
import server from '../../server';


const api = supertest(server);
let token;
let id;
describe('tests for Team controller', () => {
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

  describe('/POST add Team', () => {
    it('should create a new team', (done) => {
      const team = {
        name: 'chelsea',
      };
      api.post('/team/add/')
        .set('x-access-token', token)
        .send(team)
        .end((err, res) => {
          id = res.body._id;
          expect(res.status).to.equal(201);
          expect(res.body).to.have.property('status');
          expect(res.body.status).to.equal(201);
          done();
        });
    });
  });
 
  describe('/PUT  Team', () => {
    it('should change team name', (done) => {
      const team = {
        name: 'chelsea',
      };
      api.put(`/team/update/5d8aaff91d48ff3bf4db6549`)
        .set('x-access-token', token)
        .send(team)
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body).to.have.property('status');
          expect(res.body.status).to.equal(404);
          done();
        });
    });
  });

  describe('/GET all teams', () => {
    it('should get all the teams', (done) => {
      api.get(`/team/view/`)
        .set('x-access-token', token)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.have.property('status');
          expect(res.body.status).to.equal(200);
          done();
        });
    });
  });


  describe('/DELETE  team by id', () => {
    it('should delete a specific team detail', (done) => {
      api.delete(`/team/delete/5d8aa8baf63c2b086c6404bf`)
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
