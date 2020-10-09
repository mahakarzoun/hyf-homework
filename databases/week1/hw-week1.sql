USE hyf;
-- 1Find out how many tasks are in the task table
SELECT COUNT(id)
 FROM task;
 
-- 2  find out how many tasks in the task table do not have a valid due date
SELECT COUNT(id) 
FROM task
WHERE due_date IS null;

-- 3  Find all the tasks that are marked as done
SELECT title 
FROM task 
WHERE status_id = 3;

-- 4  Find all the tasks that are not marked as done
SELECT title 
FROM task 
WHERE status_id != 3;

-- 5 Get all the tasks, sorted with the most recently created first
SELECT title AS the_final_task, created  
FROM task 
ORDER BY created DESC;

-- 6 Get the single most recently created task
SELECT title AS the_final_task, created 
FROM task 
ORDER BY created DESC
LIMIT 1;

 -- 7 Get the title and due date of all tasks where the title or description contains database
SELECT title, description, due_date 
FROM hyf.task
WHERE title  LIKE '%database%' OR description LIKE '%database%'  ;

-- 8 Get the title and status (as text) of all tasks
SELECT task.title, status.Name 
FROM status
INNER JOIN task ON task.status_id = status.id;

-- 9 Get the name of each status, along with a count of how many tasks have that status
SELECT status.name AS Progress, COUNT(task.Id) AS Total
 FROM status 
 INNER  JOIN task ON task.status_id = status.Id 
 GROUP BY status.id;

-- 10 get the name of all status, sorted by the status with most task first.
SELECT status.name AS Progress, COUNT(task.id) AS Total
 FROM status 
 JOIN task ON task.status_id=status.Id 
 GROUP BY status.Id
 ORDER BY Total DESC;