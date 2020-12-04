# mean-users Assignment

This repo has two applications - angular-app (Angular) and node-app (node)

## Installation

clone this repository and install the dependencies : 
 - Open node-app in terminal, and execute following commands

```bash
npm install
```
```bash
npm start
```
  - Open angular-app in terminal, and type command to open in development mode

```bash
npm install
```
```bash
ng serve
```


You can access the application at --> [http://localhost:4200/](http://localhost:4200/).

## Usage - Database

* I have used mongoDB Atlas as databse.


## Usage - Backend
 
node app is running [here](http://localhost:3000/). List of node-express apis are following -->

  

* /users/- POST --> Add user.
* /users/ - GET  --> Get list of users.
* /users/:id - GET  --> Get user details.
* /users/:id - PUT  --> Update user detail.
* /users/:id - DELETE  --> Delete user.
* /images/:image-name - GET  --> GET static image file.
