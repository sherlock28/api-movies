-- CREATE DATABASE moviesdb;
CREATE SCHEMA IF NOT EXISTS schemamovies;

CREATE TABLE IF NOT EXISTS "schemamovies".characters (
   "idCharacters" SERIAL PRIMARY KEY,
   "name" VARCHAR(120) NOT NULL,
   "image" VARCHAR(500),
   "age" INTEGER NOT NULL,
   "gender" VARCHAR(100) NOT NULL,
   "history" VARCHAR(500),
   "created_at" timestamp WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS "schemamovies".movies (
   "idMovies" SERIAL PRIMARY KEY,
   "image" VARCHAR(500),
   "title" VARCHAR(100) NOT NULL,
   "rating" DECIMAL,
   "release" DATE NOT NULL,
   "created_at" timestamp WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS "schemamovies".genders (
   "idGenders" SERIAL PRIMARY KEY,
   "name" VARCHAR(30) NOT NULL,
   "image" VARCHAR(500),
   "created_at" timestamp WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS "schemamovies".users (
	"idUsers" SERIAL PRIMARY KEY,
	"username" VARCHAR(50) NOT NULL,
	"password" VARCHAR(500) NOT NULL,
	"email" VARCHAR(100) NOT NULL,
	"token" VARCHAR(500),
	"deleted" BOOLEAN DEFAULT FALSE,
	"created_at" timestamp WITH TIME ZONE DEFAULT
	CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS "schemamovies".characters_movies (
	"idCharacters_movies" SERIAL PRIMARY KEY,
	"characters_idCharacters" bigint,
	"movies_idMovies" bigint,

	CONSTRAINT fk_characters_idCharacters
      FOREIGN KEY("characters_idCharacters")
	  REFERENCES "schemamovies".characters("idCharacters"),

	CONSTRAINT fk_movies_idMovies
      FOREIGN KEY("movies_idMovies")
	  REFERENCES "schemamovies".movies("idMovies")
);

CREATE TABLE IF NOT EXISTS "schemamovies".movies_genders (
	"idMovies_genders" SERIAL PRIMARY KEY,
	"movies_idMovies" bigint,
	"genders_idGenders" bigint,

	CONSTRAINT fk_movies_idMovies
      FOREIGN KEY("movies_idMovies")
	  REFERENCES "schemamovies".movies("idMovies"),

	CONSTRAINT fk_genders_idGenders
      FOREIGN KEY("genders_idGenders")
	  REFERENCES "schemamovies".genders("idGenders")
);
