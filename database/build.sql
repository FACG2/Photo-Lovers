BEGIN;

DROP TABLE IF EXISTS posts CASCADE;

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  link VARCHAR NOT NULL,
  tags VARCHAR(50) NOT NULL,
  filePath VARCHAR NOT NULL,
  likes INT NOT NULL,
);

INSERT INTO posts (title, link, tags, filePath, likes) VALUES
('Steve', 'dd', '#jobs', 'ssd', '2');


COMMIT;
