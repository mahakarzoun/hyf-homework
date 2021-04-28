 DROP schema IF EXISTS udemy_db;
create schema udemy_db;
use udemy_db;
CREATE TABLE `students` (
  `id` int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL UNIQUE,
   `total_courses` int-- not sure about this column
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `rating` (
  `id` int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `courses` (
  `id` int  unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `created` DATETIME NOT NULL,
  `last_updated` DATETIME NOT NULL,
  `rating`  int  unsigned  NULL,
  CONSTRAINT `fk_rating` FOREIGN KEY (`rating`) REFERENCES `rating` (`id`),
  `totalStudents`  int  unsigned NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `courses_register` (
`course_id` int unsigned NOT NULL ,
`student_id` int unsigned NOT NULL ,
  CONSTRAINT `fk_course` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_student` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `instructers` (

  `id` int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL ,
   `total_courses` int              -- not sure about this column 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `courses_list` (
`instructer_id` int unsigned NOT NULL ,
`course_id` int unsigned NOT NULL ,
  CONSTRAINT `fk_instructer` FOREIGN KEY (`instructer_id`) REFERENCES `instructers` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_courseList` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `reviews` (
  `id` int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `descreption` varchar(255) NOT NULL,
   `author_id` int unsigned NOT NULL,
CONSTRAINT `fk_author` FOREIGN KEY (`author_id`) REFERENCES `students` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `reviews_record` (
`review_id` int unsigned NOT NULL ,
`course_id` int unsigned NOT NULL ,
  CONSTRAINT `fk_review` FOREIGN KEY (`review_id`) REFERENCES `reviews` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_course4review` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;