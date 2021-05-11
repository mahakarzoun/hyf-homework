SELECT * FROM mealsharing.review;

insert into review (title,description,meal_id,stars)
values 
('cold meal', 'the alfredo was very cold and gooy', 3,2),
('i am in love ', ' kunafa is just so delicious ', 2,5),
 ('good meal', 'the meal was very good', 3,4);

-- Get a review with any id, fx 1
-- Get a reservation with any id, 
select * from review
where id = 2 ;

-- Update a review with any id, fx 1. 
-- Update any attribute fx the title or multiple attributes
update review
set meal_id= 1 
where id = 3 ;

 -- Delete a review with any id, fx 1
delete 
from review 
where id = 2 ;