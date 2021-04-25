Use lesson2;

-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT  task.title AS theTask, user.name AS user_name
from task  
 Inner join user_task ON  user_task.task_id = task.id 
 inner join user ON  user.id = user_task.user_id 
 WHERE user.email LIKE '%@spotify.com';

 -- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT  task.id AS taskID , task.title AS not_started_tasks 
From task
 INNER join user_task ON  
 task.id = user_task.task_id -- why the deplicate values 
 INNER join user ON
 user_task.user_id = user.id 
INNER join status ON task.status_id= Status.id 
WHERE user.name = 'Donald Duck' AND status.name = 'not started';

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT  task.id AS taskID , task.title AS septemberTask 
From task
iNNER join user_task ON  
task.id = user_task.task_id -- why the deplicate values 
INNER join user ON
user_task.user_id = user.id 
INNER join status ON task.status_id= Status.id 
WHERE user.name = 'Maryrose Meadows' AND task.created(month) = 'september';