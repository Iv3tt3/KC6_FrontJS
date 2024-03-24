# AdPop

Web application built JavaScript and HTML&CSS (without the use of JavaScript libraries or frameworks). It provides functionalities for user authentication, creating and managing advertisements, and displaying advertisement details. The project incorporates features such as notifications, loading spinner during server requests, and token verification for creating or deleting advertisements. Users are only allowed to create or delete advertisements if they are logged in and the advertisement belongs to them. The backend is supported by a JSON server and API provided by sparrest.js, which simulates a real backend environment and adapts to the needs of this project.

## Features

- User authentication with signup and login pages.
- Creation of advertisements with validation checks.
- Deletion of advertisements with token verification.
- Display of advertisement details.

## Installation

## 1- Install Sparrest - Prepare Backend

To set up the backend server using sparrest.js:

- Clone the repository of sparrest.js:

```git clone https://github.com/kasappeal/sparrest.js.git```

- Install dependencies by navigating to the cloned sparrest.js directory and running:

```npm install```

- Start the server:
 
```npm start```

By default, the server will run on port 8000, and you can access it at http://127.0.0.1:8000/.

### Set up example database

- Shout down the server Control C or ^C:

- Repalace the file db.json for the one provided in Adpop repository

- Start the server again

## 2- Install Project

- Clone the repository
- Launch the application using Visual Studio Code's Live Server extension or similar.

# Endpoints
- /index.html: Display ad list
- /addetail.html?adId=<id>: Display ad details and a button to delete ad (if logged in and if they belong to the current user)
- /newad.html: Allow create a new ad. Only accessible if user is logged in.
- /signup.html: To sign up new users.
- /login.html: To login users.