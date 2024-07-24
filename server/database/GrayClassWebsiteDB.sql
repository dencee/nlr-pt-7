START TRANSACTION;

DROP TABLE IF EXISTS side_projects;
DROP TABLE IF EXISTS site_details;
DROP TABLE IF EXISTS student_details;
DROP TABLE IF EXISTS "class";

CREATE TABLE "class"(
class_id SERIAL PRIMARY KEY,
color varchar(10));

CREATE TABLE student_details(
student_id SERIAL PRIMARY KEY,
first_name varchar(100) NOT NULL,
last_name varchar(100) NOT NULL,
city varchar(100) NOT NULL,
state_abv varchar(2) NOT NULL,
class_id int NOT NULL,
FOREIGN KEY(class_id) REFERENCES "class"(class_id)
);

CREATE TABLE site_details(
site_details_id SERIAL PRIMARY KEY,
avatar_img varchar(300) NOT NULL,
about_me varchar(1000) NOT NULL,
linkedin varchar(300) NOT NULL,
github varchar(300) NOT NULL,
twitter varchar(300) NULL,
student_id int NOT NULL,
FOREIGN KEY(student_id) REFERENCES student_details(student_id)
);

CREATE TABLE side_projects(
side_project_id SERIAL PRIMARY KEY,
"name" varchar(300) NOT NULL,
student_id int NOT NULL,
FOREIGN KEY(student_id) REFERENCES student_details(student_id)
);

COMMIT;