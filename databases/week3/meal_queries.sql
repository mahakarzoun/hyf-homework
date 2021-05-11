use mealSharing;
SELECT * FROM meal;

-- Add a new meal
INSERT into meal (title, description, location, `when` , max_reservations, price)
 values
('Chicken Alfredo', ' creamy Chicken Alfredo wih homemade pasta is a perfect dinner for you and your partner ', 'aarhus' , '2021-05-01 18:30:00', 4 , 120 ),
('Msakhan', 'try a delicious traditional  dish  from palestine with roasted chicken , onion and homemade bread', 'aarhus' , '2021-05-02 18:00:00', 3 , 120 ),
('Seafood Paella', 'enjoy rice dish packed with seafood that loaded with flavor', 'aarhus' , '2021-05-02 18:00:00', 3 , 120 ),
('knafeh', 'a cheesy sweet that melt into your mouth', 'aarhus' , '2021-05-04 14:00:00', 6 , 40); 

-- Get a meal with any id, fx 1
SELECT * from meal
where id = 1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
SELECT * from meal;
update meal
set price = 150
where id = 3;

-- Delete a meal with any id, fx 1
DELETE FROM meal
WHERE id = 1;

