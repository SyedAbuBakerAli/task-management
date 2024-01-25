Tech Stack -> ExpressJs, ReactJs , MongoDB and Cloudinary

for registration user ->  profile picture added at that time of registration 
so change cloudinary config with your cloudinary account 
backend\config\config.env (file path)


To start frontend:- 
step-1) cd frontend 
step-3) npm i (to install dependency)
step-2) npm start 


To start backend:- 
step-1) npm i (to install dependency)
step-2) npm start



Bonus Features Added:-

i) User authentication and authorization to restrict access to tasks.           (Completed)
ii) Task searching capabilities.                                                (Completed)
iii) User profiles with avatars.                                                (Completed)



1) Front-End Requirements:
  
A form to create a new task with fields for title, description, and status.       (Completed)
A list of tasks with the ability to update the status or delete a task.           (Completed)
A filter or dropdown to filter tasks by status                                    (Completed)
(e.g., "All," "To Do," "In Progress," "Done").


2) Back-End Requirements:

API Development: 
Create a RESTful API to handle the CRUD (Create, Read, Update, Delete) tasks.     (Completed)

Data Storage:
Implement a database to store task data (use MongoDB)                             (Completed)

Validation:
Implement server-side validation to ensure that task data is valid.               (Completed)

Error Handling:
Properly handle errors, including sending appropriate error messages              (Completed)
and status codes in response.

