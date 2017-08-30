const test = require('tape');
const supertest = require('supertest');
const app = require('../src/app.js');
// const bodyParser = require('body-parser');

test('test to return all photo', (t) => {
  supertest(app)
      .get('/data')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        // console.log(res.body);
        t.error(err, 'No error');
        t.equal(res.body.length, 5, 'length must be 5');
        t.end();
      });
});

// /like
test('test the number of likes', (t) => {
  var id = '1';
  supertest(app)
  .get(`/like/${id}/`)
  .expect(200)
  .expect('Content-Type', /json/)
  .end((err, res) => {
    // console.log(res.body);
    t.error(err, 'NO error');
    t.equal(res.body, 6, 'should return 6');
    t.end();
  });
});

// /tag
// test('test the tags', (t) => {
//   var tags = 'sea';
//   supertest(app)
//   .get(`tag/${tags}/`)
//   .expect(200)
//   // .expect('Content-Type', /json/)
//   .end((err, res) => {
//     t.error(err, 'no error');
//     console.log(res);
//     t.equal(res.body, 'sea', 'sould return (sea)');
//     t.end();
//   });
// });

test('test the photo by id', (t) => {
  var id = '1';
  supertest(app)
  .get(`/ph/${id}/`)
  .expect(200)
  .expect('Content-Type', /json/)
  .end((err, res) => {
    // console.log(res.body);
    t.error(err, 'NO error');
    t.equal(res.body[0].id, 1, 'should return 6');
    t.end();
  });
});

test('test add photo', (t) => {
  var photo = {title: 'Tasty!',
    tags: '#watermelon #plate #tasty',
    filePath: '/images/watermelon.jpg'
  };
  supertest(app)
  .post(`/addpic`)
  .send(photo)
  .expect(200)
  .expect('Content-Type', /json/)
  .end((err, res) => {
    // console.log(res.body);
    t.error(err, 'NO error');
    t.equal(res.body.title, 'Tasty!', 'should add photo with titel Tasty!');
    t.end();
  });
});

test('test that added like and incremit it', (t) => {
  var id = '1';
  supertest(app)
  .post(`/addlike`)
  .send(id)
  .expect(200)
  .end((err, res) => {
    // console.log(res.body);
    t.error(err, 'NO error');
    t.equal(res.body, 8, 'should add photo with titel Tasty!');
    t.end();
  });
});
