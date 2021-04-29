
-- Get meals that has a price smaller than a specific price fx 90
use mealsharing;
SELECT * from meal
where price  < 90;

-- Get meals that still has available reservations
select meal.id, max_reservations , sum(max_reservations - number_of_guests) as available_reservations
from meal
inner join reservation 
on  meal.id = reservation.meal_id;

-- Get meals that partially match a title.
 -- Rød grød med will match the meal with the title Rød grød med fløde
 
 select * from meal 
 where title like '% alfredo%';
 
 -- Get meals that has been created between two dates
  select * from meal 
 where DATE(created_date) between '2021-04-30' AND '2021-05-01' ;
 
 -- Get only specific number of meals fx return only 5 meals
   select * from meal 
   limit 2;
   
   -- Get the meals that have good reviews
select meal.id , meal.title ,  review.stars
from meal 
inner join review
On meal.id = review.meal_id
where review.stars > 3 ;

-- Get reservations for a specific meal sorted by created_date
select meal.id , meal.title ,  reservation.created_date as reservation_in_april
from reservation 
inner join meal
On meal.id = reservation.meal_id
where month(reservation.created_date) = 4
order by reservation.created_date ASC;

-- Sort all meals by average number of stars in the reviews
select meal.id, meal.title, review.description , AVG(review.stars ) as rate 
 -- doesnt work when adding as decimal (10,2) in or out the avg() 
from meal 
inner join review
On meal.id = review.meal_id
GROUP BY meal_id
order by rate desc;
