CREATE TABLE profilepics (
  id BIGSERIAL PRIMARY KEY,
  imageIndex VARCHAR(255) NOT NULL,
  imageUrl VARCHAR(255) NOT NULL,
  UNIQUE(imageIndex)
);

CREATE TABLE reviews (
  id BIGSERIAL PRIMARY KEY,
  reviewer_name VARCHAR(40) NOT NULL,
  body VARCHAR(255) NOT NULL,
  date date,
  dp VARCHAR(255) NOT NULL REFERENCES profilepics(imageIndex)
);

CREATE TABLE posts (
  id BIGSERIAL PRIMARY KEY,
  paddedId VARCHAR(255) NOT NULL,
  locationAvg VARCHAR(255) NOT NULL,
  valueAvg VARCHAR(255) NOT NULL,
  accuracyAvg VARCHAR(255) NOT NULL,
  commAvg VARCHAR(255) NOT NULL,
  cleanAvg VARCHAR(255) NOT NULL,
  checkinAvg VARCHAR(255) NOT NULL,
  avg VARCHAR(255) NOT NULL,
  reviewSize INT NOT NULL,
  userName VARCHAR(255) NOT NULL,
  reviews_id INT REFERENCES reviews(id),
  userDp VARCHAR(255) NOT NULL REFERENCES profilepics(imageIndex)
);
