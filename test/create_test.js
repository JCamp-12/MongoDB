const assert = require('assert');
const User = require('../src/user');

describe('Creating Records', () => {
  it('saves a user', () =>{
    const jason = new User({ name: 'Jason' });

    jason.save()
      .then(() => {
        // Has jason been saved correctly?
        assert(!jason.isNew);
        done();
      });
  });
});