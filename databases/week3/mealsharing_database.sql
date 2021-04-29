DROP  DATABASE mealSharing;
CREATE  DATABASE mealSharing;
USE  mealSharing;

CREATE TABLE `Meal` (
  `id` int  unsigned auto_increment  primary key ,
  `title` varchar(255) NOT NULL ,
  `description` text NOT NULL ,
  `location` varchar(255) NOT NULL ,
  `time` datetime NOT NULL ,
  `max_reservations` int NOT NULL ,
  `price` decimal ,          
  `created_date` datetime NOT NULL default CURRENT_TIMESTAMP()
);

CREATE TABLE `Reservation` (
  `id` int unsigned auto_increment  primary key ,
  `number_of_guests` int NOT NULL  ,
  `meal_id` int unsigned NOT NULL   ,
  `created_date` DATETIME NOT NULL  default CURRENT_TIMESTAMP() ,
  `contact_phonenumber` varchar(255)  NOT NULL,
  `contact_name` varchar(255) NOT NULL ,
  `contact_email` varchar(255)  NOT NULL,
  CONSTRAINT `fk_meal_reservation` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE

);

CREATE TABLE `Review` (
  `id` int  unsigned auto_increment  primary key ,
  `title` varchar(255) NOT NULL ,
  `description` text null ,
  `meal_id` int unsigned NOT NULL ,
  `stars` int,
  `created_date` datetime NOT NULL default CURRENT_TIMESTAMP(),
  CONSTRAINT `fk_meal_review` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
