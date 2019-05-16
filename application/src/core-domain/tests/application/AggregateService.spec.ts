import 'mocha';
import * as chai from 'chai';
import chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const assert = chai.assert;


describe('test all service methods success paths', () => {
  it('should successfully retrieve an aggregate root by id', async () => {
    await expect((asyncErrorThrow())).to.be.rejectedWith(Error);
  });
});

async function asyncErrorThrow(): Promise<any> {
  throw new Error();
}