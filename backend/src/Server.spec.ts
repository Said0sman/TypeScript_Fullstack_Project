import chai from "chai"
import 'mocha'
import StatusCode from "./configurations/StatusCode";
import app from "./Server"
import chaiHttp from  'chai-http'


chai.use(chaiHttp) // Test Api med Chai
const expect = chai.expect

describe('API Alive Request',() => {
    it('should return"API is Alive with TypeScript!" on call', () => {
        return chai.request(app).get('/')
            .then((response) => {
                expect(response.status).to.equal(StatusCode.OK)
                expect(response.text).to.eql('API is Alive with TypeScript!')
            })
    })
})

