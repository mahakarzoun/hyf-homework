Use lesson2;
SELECT * FROM task;
--  Add a task
 insert into task (title, description, created, updated, due_date, status_id)
 values ('learn about REDs', '', now(), now() ,ADDDATE(now(), INTERVAL  10 DAY), '2');
 
 -- Change the title of a task
UPDATE task
SET title = 'write a novel'
WHERE id = 9;   

-- Change a task due date
UPDATE task
SET due_date= ADDDATE(due_date, interval 1 month)  
WHERE id = 19 ;

-- Change a task status
UPDATE task 
SET status_id = 3

-- WHERE title LIKE '%clothes%'; why the sstatement is  uncorrect 
WHERE id = 1;

--  Mark a task as complete
UPDATE task 
SET status_id = 2

-- WHERE title LIKE '%REDs%' can pick a year from the date statement 
WHERE id = 36;
-- delete a task
DELETE  FROM task
WHERE id = 35; 