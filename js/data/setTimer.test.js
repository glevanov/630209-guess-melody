import {assert} from 'chai';
import {setTimer} from '../setTimer.js';

describe(`timer`, () => {
  it(`updates timer on tick`, () => {
    assert.equal(6, setTimer(8).tick().tick().time);
    assert.equal(344, setTimer(349).tick().tick().tick().tick().tick().time);
    assert.equal(9001, setTimer(9002).tick().time);
  });
  it(`reports 'done' when timer reaches 0`, () => {
    assert.deepEqual({done: true}, setTimer(1).tick());
  });
});
