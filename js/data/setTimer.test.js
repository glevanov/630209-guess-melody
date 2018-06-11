import {assert} from 'chai';
import {setTimer} from '../setTimer.js';

describe(`check timer`, () => {
  it(`updates timer on tick`, () => {
    assert.equal(7, setTimer(8).tick());
    assert.equal(348, setTimer(352).tick().tick().tick().tick());
    assert.equal(9001, setTimer(9003).tick().tick());
  });
});
