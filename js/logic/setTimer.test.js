import {assert} from 'chai';
import {setTimer} from './setTimer.js';

describe(`timer`, () => {
  it(`updates timer on tick`, () => {
    assert.equal(6, setTimer(7).tick().time);
    assert.equal(344, setTimer(345).tick().time);
    assert.equal(9001, setTimer(9002).tick().time);
  });
  it(`sets 'done' to true when timer reaches 0`, () => {
    assert.deepEqual(true, setTimer(1).tick().done);
  });
});
