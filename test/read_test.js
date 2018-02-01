const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the db', () => {
  let jason;

  beforeEach((done) => {
    jason = new User({ name: 'Jason' });
    jason.save()
      .then(() => done())
    });

  it('finds users with a name of jason', (done) => {
    User.find({ name: 'Jason' })
      .then((users) => {
        console.log(users);
        console.log(users[0]);
        assert(users[0]._id);
        done();
      });
  });
});