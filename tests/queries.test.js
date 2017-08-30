const test = require('tape');
const get = require('../src/model/queries/get');
const post = require('../src/model/queries/post');

test('get all photos', (t) => {
  get.getAllPhotos((err, data) => {
    t.equal(err, null, 'error should be null');
    t.equal(Array.isArray(data), true, 'should return an array');
    t.equal('filepath' in data[0], true, 'objects should have a filePath key');
    t.end();
  });
});

test('get photo by id', (t) => {
  var id = 1;
  get.getphotoById(id, (err, data) => {
    t.equal(err, null, 'error should be null');
    t.equal(data.length, 1, 'should retrun an array with only one object');
    t.equal(data[0].id, id, 'should retrun the same id');
    t.end();
  });
});

test('get photos by tag', (t) => {
  var tag = 'sea';
  get.getPhotosByTag(tag, (err, data) => {
    t.equal(err, null, 'error shoul be null');
    if (data.length > 0) {
      t.equal(data[0].tags.includes(tag), true, 'should return a photo with the given tag');
    }
    t.end();
  });
});

test('get number of likes by id', (t) => {
  var id = 1;
  get.getLikesByID(id, (err, data) => {
    t.equal(err, null, 'error should be null');
    t.equal(Number.isInteger(data), true, 'should return the number of likes');
    t.end();
  });
});

test('insert a photo', (t) => {
  var photo = {title: 'Tasty!',
    tags: '#watermelon #plate #tasty',
    filePath: '/images/watermelon.jpg'
  };
  post.addPhoto(photo, (err, data) => {
    t.equal(err, null, 'error should be null');
    t.equal(Number.isInteger(data.id), true, 'should return a number as an Id');
    t.equal(data.title, photo.title, `${data.title} shoul equald ${photo.title}`);
    t.end();
  });
});
