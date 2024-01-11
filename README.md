Simple Todo List project using PERN (Postgresql, Express, React, NodeJS) with React Bootstrap and SASS

![image](https://github.com/bobaec/PERN-todo-list/assets/22423987/2da9fcac-68d1-4b31-8dde-560ff7e5a213)

Stack:<br/>
<b>Postgresql</b>: Learned how to create databases and tables
<br/>
<b>Express & NodeJS</b>: CRUD operations to have get/post/update/delete routes and fetch them from the database
<br/>
<b>React & React Bootstrap && SASS</b>: Front end

Prerequisites: 
- npm
- Postgresql: https://www.postgresql.org/download/

There is an example video shown at the bottom of this README if you just want to functionality.

How to run:

1. git clone this repository with this command: git clone https://github.com/bobaec/PERN-todo-list
2. Run this command in a terminal to run Postgresql: sudo -u postgres psql
   <br/>a. run the two queries (found inside /server/database.sql) in your psql command line
            <br/>i. CREATE DATABASE perntodo;
            <br/>ii. CREATE TABLE todo(....);
4. In a new terminal, cd client
   <br/>a. npm start (localhost:3000 will open up on your browser automatically)
5. In a new terminal, cd server
  <br/>a. npm run server

Missing functionality to be done later (purely frontend):
1. Upcoming
2. Today
3. Calendar
4. Tags

Once you have those running, you should be all set up.

When you have the setup, your web page will look like this:
![image](https://github.com/bobaec/PERN-todo-list/assets/22423987/50a31b93-e371-4d2b-ac89-13d8c12b3615)

Add a todo by clicking the gray box with the plus sign in it.

You'll see a modal open up like:
![image](https://github.com/bobaec/PERN-todo-list/assets/22423987/48d585e0-d31c-44c7-95dd-6c5a633c22cc)

If you fill in the information it will look like:
![image](https://github.com/bobaec/PERN-todo-list/assets/22423987/29f3aa8d-8178-4027-a520-f6796fa8d822)

After adding a few more the sticky wall will look like this:
![image](https://github.com/bobaec/PERN-todo-list/assets/22423987/2da9fcac-68d1-4b31-8dde-560ff7e5a213)

You can also edit and delete todos by clicking onto the todo itself and an Edit Modal should open up:
![image](https://github.com/bobaec/PERN-todo-list/assets/22423987/d62e86f9-155b-4fb0-b435-f16b25cd4467)

You can also use the search function in the side bar, as well as filter by list type.
![image](https://github.com/bobaec/PERN-todo-list/assets/22423987/66ac3b46-40f7-4ce5-af14-ae3231dbaa97)

Example video:
![chrome_b1EOF6f8T5](https://github.com/bobaec/PERN-todo-list/assets/22423987/b80d8980-09d5-4f86-b9b1-e3e55b7a3a07)

