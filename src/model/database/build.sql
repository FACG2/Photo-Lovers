BEGIN;

DROP TABLE IF EXISTS posts CASCADE;

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  tags VARCHAR(50) ,
  filePath VARCHAR NOT NULL,
  likes INT NOT NULL
);

INSERT INTO posts (title, tags, filePath, likes) VALUES
('What a view', '#sea #houses', 'images/sea.jpg', '2'),
('morning coffe', '#coffe #morning', 'images/coffe.jpg', '5'),
('my garden', '#window #trees #garden', 'images/window.jpg', '0');

COMMIT;
