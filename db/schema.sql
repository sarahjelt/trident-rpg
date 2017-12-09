CREATE DATABASE weird_armies_db;
USE weird_armies_db;

CREATE TABLE users (
	id int NOT NULL AUTO_INCREMENT,
	username varchar(50) NOT NULL,
	game_id int,
	PRIMARY KEY (id)
);

CREATE TABLE all_games (
	id int NOT NULL AUTO_INCREMENT,
	first_player varchar(50) NOT NULL,
	second_player varchar(50),
	game_complete boolean NOT NULL,
	first_player_score int NOT NULL,
	second_player_score int NOT NULL,
	turn varchar(50) NOT NULL,
	need_player boolean NOT NULL,
	PRIMARY KEY (id)
)

-- where game_id in users matches id in games
-- where first_player matches username
-- where second_player matches username