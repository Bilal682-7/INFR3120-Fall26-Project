LiftLog Workout Tracker - Project Part 1 

About the Project

This is my first part of the INFR3120 Fall26 Project for INFR3120 Web and Scripting Programming at Ontario Tech University.

LiftLog is a gym workout log. I built it with Node.js, Express, EJS and MongoDB. A user can log a workout, see their workouts in a table, edit them and delete them.

This is only the first part, so it works but it is not finished yet. Part 1 is marked individually but i am in group 50

Website Pages
Home (/): The LiftLog name, my logo, the "Log a Workout" button and a table of the 20 most recent workouts.
Log a Workout (/workouts/new): A form to create a workout with the exercise, category, sets, reps, weight, date and notes.
All Workouts (/workouts): A table of every saved workout.
Edit (/workouts/edit): The same form filled in with the saved workout so it can be changed.
Delete: A button in the table that removes a workout after the user confirms.
How It Works
Express handles the routes. I created the project with express-generator --view=ejs.
EJS builds the pages. The header, footer, table and form fields are partials, so I wrote them once and reused them on every page.
MongoDB Atlas stores the workouts and Mongoose is the library the code uses to talk to it.
method-override lets the HTML forms send PUT and DELETE requests, because forms can normally only send GET and POST.
dotenv loads my MongoDB connection string from a .env file. The .env file is in .gitignore, so my password is not on GitHub.

Project Structure
app.js: Express setup, MongoDB connection and routes.
bin/www: starts the server.
models/Workout.js: the workout schema.
routes/index.js: the home page route.
routes/workouts.js: the create, list, edit and delete routes.
views/: the EJS pages, with shared parts in views/partials/.
public/: the CSS file and the logo.

Logo

I made a simple logo on canva by myself downlaoded it as a png and added it to my public/images

Code Sources

I used the INFR3120 course materials (MEAN Stack Development and MongoDB slides, and the JavaScript chapters) as references for Node.js, npm, Express, MongoDB, etc.

I also used some initial inspiration from Assignment 2 to guide me to some code for this project. 

I also used Claude to help form some ideas to help me get started on some parts of code which is mentioned. I created the project with express-generator, entered the files, connected my own MongoDB database, and tested the features. I went through each file so I can explain it.

Other references:

Mongoose documentation: https://mongoosejs.com
EJS documentation: https://ejs.co
express-generator: https://expressjs.com/en/starter/generator.html
method-override: https://www.npmjs.com/package/method-override
Testing

I tested the website in the browser on my computer:

Create: Logged a workout with the form and checked it appeared in the table.
List: Checked the Home page and the All Workouts page.
Edit: Changed a workout and checked the table showed the change.
Delete: Deleted a workout and checked the row was removed.

GitHub and Live Website

I uploaded the project to GitHub and deployed it on Render.

GitHub Repository: https://github.com/Bilal682-7/INFR3120-Fall26-Project

Live Website: https://liftlog-raak.onrender.com/