DROP  DATABASE mealSharing;
CREATE  DATABASE mealSharing;
USE  mealSharing;

CREATE TABLE `meal` (
  `id` int  unsigned auto_increment  primary key ,
  `title` varchar(255) NOT NULL ,
  `description` text NOT NULL ,
  `location` varchar(255) NOT NULL ,
  `when` datetime NOT NULL ,
  `max_reservations` int NOT NULL ,
  `price` decimal ,          
  `created_date` datetime NOT NULL default NOW()
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `reservation` (
  `id` int unsigned auto_increment  primary key ,
  `number_of_guests` int NOT NULL  ,
  `meal_id` int unsigned NOT NULL   ,
  `created_date` DATETIME NOT NULL  default NOW() ,
  `contact_phonenumber` varchar(255)  NOT NULL,
  `contact_name` varchar(255) NOT NULL ,
  `contact_email` varchar(255)  NOT NULL,
  CONSTRAINT `fk_meal_reservation` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `review` (
  `id` int  unsigned auto_increment  primary key ,
  `title` varchar(255) NOT NULL ,
  `description` text null ,
  `meal_id` int unsigned NOT NULL ,
  `stars` int,
  `created_date` datetime NOT NULL default CURRENT_TIMESTAMP(),
  CONSTRAINT `fk_meal_review` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
