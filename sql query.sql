DROP TABLE IF EXISTS user_stats;
DROP TABLE IF EXISTS answers;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS themes;
DROP TABLE IF EXISTS users;

DROP SEQUENCE IF EXISTS user_id_seq;
DROP SEQUENCE IF EXISTS theme_id_seq;
DROP SEQUENCE IF EXISTS question_id_seq;
DROP SEQUENCE IF EXISTS answer_id_seq;
DROP SEQUENCE IF EXISTS user_stats_id_seq;

CREATE SEQUENCE user_id_seq;
CREATE SEQUENCE theme_id_seq;
CREATE SEQUENCE question_id_seq;
CREATE SEQUENCE answer_id_seq;
CREATE SEQUENCE user_stats_id_seq;

CREATE TABLE users (
  id INT DEFAULT nextval('user_id_seq') PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE themes (
  id INT DEFAULT nextval('theme_id_seq') PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE questions (
  id INT DEFAULT nextval('question_id_seq') PRIMARY KEY,
  theme_id INT REFERENCES themes(id),
  question_text TEXT NOT NULL,
  correct_answer INT NOT NULL
);

CREATE TABLE answers (
  id INT DEFAULT nextval('answer_id_seq') PRIMARY KEY,
  question_id INT REFERENCES questions(id),
  answer_text TEXT NOT NULL
);

CREATE TABLE user_stats (
  id INT DEFAULT nextval('user_stats_id_seq') PRIMARY KEY,
  user_id INT REFERENCES users(id),
  points INT DEFAULT 0,
  questions_answered INT DEFAULT 0,
  average_response_time INT DEFAULT 0
);

-- Inserting data into 'themes' with explicit IDs
INSERT INTO themes (id, name) VALUES
(1, 'Science'),
(2, 'History'),
(3, 'Literature');



-- Inserting additional questions and answers for 'Science'
INSERT INTO questions (id, theme_id, question_text, correct_answer) VALUES
(4, 1, 'What is the primary gas in the Earth''s atmosphere?', 4),
(5, 1, 'Which planet is known as the Red Planet?', 12),
(6, 1, 'What is the boiling point of water in Celsius?', 16);
-- ... additional science questions ...

INSERT INTO answers (id, question_id, answer_text) VALUES
(4, 4, 'Nitrogen'),
(5, 4, 'Oxygen'),
(6, 4, 'Carbon Dioxide'),
(7, 4, 'Hydrogen'),
(12, 5, 'Mars');
-- ... additional answers for science questions ...

-- Inserting additional questions and answers for 'History'
INSERT INTO questions (id, theme_id, question_text, correct_answer) VALUES
(14, 2, 'In what year did World War II begin?', 40),
(15, 2, 'Who was the first Emperor of Rome?', 44),
(16, 2, 'Which ancient civilization built the pyramids?', 48);
-- ... additional history questions ...

INSERT INTO answers (id, question_id, answer_text) VALUES
(40, 14, '1939'),
(41, 14, '1914'),
(42, 14, '1945'),
(43, 14, '1929'),
(44, 15, 'Augustus');
-- ... additional answers for history questions ...

-- Inserting additional questions and answers for 'Literature'
INSERT INTO questions (id, theme_id, question_text, correct_answer) VALUES
(24, 3, 'What is the longest novel ever published?', 72),
(25, 3, 'Who wrote ''To Kill a Mockingbird''?', 76),
(26, 3, 'In which city is Charles Dickens'' ''A Tale of Two Cities'' set?', 80);
-- ... additional literature questions ...

INSERT INTO answers (id, question_id, answer_text) VALUES
(72, 24, 'Remembrance of Things Past'),
(73, 24, 'War and Peace'),
(74, 24, 'Infinite Jest'),
(75, 24, 'Ulysses'),
(76, 25, 'Harper Lee');
-- ... additional answers for literature questions ...

