"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
require("mocha");
const StatusCode_1 = __importDefault(require("./configurations/StatusCode"));
const Server_1 = __importDefault(require("./Server"));
const chai_http_1 = __importDefault(require("chai-http"));
chai_1.default.use(chai_http_1.default); // Test Api med Chai
const expect = chai_1.default.expect;
describe('API Alive Request', () => {
    it('should return"API is Alive with TypeScript!" on call', () => {
        return chai_1.default.request(Server_1.default).get('/')
            .then((response) => {
            expect(response.status).to.equal(StatusCode_1.default.OK);
            expect(response.text).to.eql('API is Alive with TypeScript!');
        });
    });
});
//# sourceMappingURL=Server.spec.js.map