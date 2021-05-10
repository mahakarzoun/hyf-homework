-- CREATE DATABASE school ;
CREATE TABLE `Class` (
`id` int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY ,
`name` varchar(255) NOT NULL,
`begins` date NOT NULL ,
 `ends` date NOT NULL
 );
 
CREATE TABLE `Student` (
`id` int  unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY ,
`name` varchar(255) NOT NULL,
`email` varchar(255) NOT NULL ,
 `phone` varchar(255)  NULL,
 `class_id` int  unsigned NOT NULL ,
 CONSTRAINT `fk_class` FOREIGN KEY (class_id) REFERENCES Class(id)
 );

-- creating index
CREATE index ixd_name 
ON student(name);

-- Add a new column to the class table named status have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE Class
ADD status ENUM('not-started', 'ongoing', 'finished') default 'not-started' NOT NULL;


