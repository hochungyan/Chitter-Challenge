import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import server from '../server.js'

chai.use(chaiHttp);

describe('Server Tests', () => {

    it('status code should return code 200 with GET request', async () => {
        const response = await chai.request(server)
            .get('/getPeeps')
            .send();

        expect(response).to.have.status(200);
    })

})