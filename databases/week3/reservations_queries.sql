SELECT * 
FROM mealsharing.reservation;
/*insert into reservation(number_of_guests, meal_id, created_date, contact_phonenumber,contact_name,contact_email)
values(2,3,current_timestamp(),'81788189','maha karzoun','maha.karzoun@gmail.com');
insert into reservation(number_of_guests, meal_id, created_date, contact_phonenumber,contact_name,contact_email)
values(3,2,current_timestamp(),'81654189','thea jensen','thea.jensen@gmail.com');*/
/*insert into reservation(number_of_guests, meal_id, created_date, contact_phonenumber,contact_name,contact_email)
values(3,4,current_timestamp(),'81654189','thea jensen','thea.jensen@gmail.com');*/

-- Get a reservation with any id, 
select * from reservation
where id = 2 ;

-- Update a reservation with any id, fx 1. 
-- Update any attribute fx the title or multiple attributes
update reservation
set number_of_guests = 3 
where id = 2 ;

 -- Delete a reservation with any id, fx 1
delete 
from reservation 
where id = 3 ;


