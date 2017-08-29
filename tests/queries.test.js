const test = require('tape');
const queries = require('../src/model/queries/get');

test('get all photos', (t) => {
  queries.getAllPhotos((err, data) => {
    t.equal(err, null, 'error should be null');
    t.equal(Array.isArray(data), true, 'should return an array');
    t.equal('filepath' in data[0], true, 'objects should have a filePath key');
    t.end();
  });
});
