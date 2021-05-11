
-- Get meals that has a price smaller than a specific price fx 90
use mealsharing;
SELECT * from meal
where price  < 90;

-- Get meals that still has available reservations
SELECT meal.id, meal.title, (meal.max_reservations - COALESCE(SUM(reservation.number_of_guests), 0)) AS available_reservations
FROM meal
LEFT JOIN reservation
ON meal.id = reservation.meal_id
GROUP BY meal.id
having available_reservations > 0
ORDER BY available_reservations;

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
select meal.id , meal.title , round(avg(review.stars)) AS stars_review
from meal 
inner join review
On meal.id = review.meal_id
GROUP BY meal.id
ORDER BY stars;

-- Get reservations for a specific meal sorted by created_date
select reservation.id , meal.title, reservation.contact_name, reservation.number_of_guests,reservation.created_date 
from reservation 
inner join meal
On meal.id = reservation.meal_id
where meal.id = 4
order by reservation.created_date ASC;

-- Sort all meals by average number of stars in the reviews
select meal.id, meal.title, review.description , round(AVG(review.stars)) as rate 
from meal 
inner join review
On meal.id = review.meal_id
GROUP BY meal_id
order by rate desc;