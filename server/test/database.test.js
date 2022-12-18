import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import server from '../server.js';
import PeepModel from '../models/Peeps.js'

chai.use(chaiHttp);

const testPeep = {
    "author": "Yoda",
    "title": "Jedi Master",
    "message": "Fear is the path to the dark side!"

   
};

describe(`Testing requests on the database`, () => {

    beforeEach(async () => {

        await PeepModel.deleteMany()
            .then(() => console.log(`peeps collections Database cleared`))
            .catch(error => {
                console.log(`Error clearing database, collection peeps`);
                throw new Error();
            });

        await PeepModel.insertMany(testPeep)
            .then(() => console.log('Test data inserted into peeps collection database'))
            .catch(error => {
                console.log(`Error inserting data into peeps collection`);
                throw new Error();
            });
    })

    it('should make a /GET request for the peeps collection', async () => {


        const res = await chai.request(server)
            .get('/getPeeps')
            .send()

        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body[0].author).to.be.equals("Yoda");

    })

})