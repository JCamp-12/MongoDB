const assert = require('assert');
const User = require('../src/user');

describe('Creating Records', () => {
  it('saves a user', () =>{
    const jason = new User({ name: 'Jason' });

    jason.save();
  });
});