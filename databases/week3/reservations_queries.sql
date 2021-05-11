SELECT * 
FROM mealsharing.reservation;

insert into Reservation(number_of_guests, meal_id,contact_phonenumber,contact_name,contact_email)
values
(2,3,'81788189','maha karzoun','maha.karzoun@gmail.com'),
(3,2,'81654189','thea jensen','thea.jensen@gmail.com'),
(3,4,'81654189','thea jensen','thea.jensen@gmail.com');

-- Get a reservation with any id, 
select * from reservation
where id = 2 ;

-- Update a reservation with any id, fx 1. 
-- Update any attribute fx the title or multiple attributes
update reservation
set number_of_guests = 3 
where id = 2 ;

 -- Delete a reservation with any id, fx 1
delete from reservation 
where id = 3 ;
