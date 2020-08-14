# Game Nyte
![logo](/assets/gameNyte_logo.svg)


Group Final project for Code Fellows Advanced Javascript

## Live deployment
Check out our app out in the wild [here](fill)! 

<hr>

## Table of Contents
- [Game Nyte](#game-nyte)
  - [Live deployment](#live-deployment)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Pain Points](#pain-points)
  - [Getting Started](#getting-started)
  - [Technologies used in this project](#technologies-used-in-this-project)
    - [APIs](#apis)
      - [/Users](#users)
    - [Socket.io](#socketio)
    - [Problem Domain](#problem-domain)
    - [USER STORIES](#user-stories)
  - [Domain Modeling:](#domain-modeling)
    - [Compenent Model](#compenent-model)
  - [Contributing](#contributing)
  - [Authors](#authors)
  - [Acknowledgements](#acknowledgements)
  - [License](#license)

<hr>

## Overview
This app will perfectly simulate an in person “dinner table” style game session virtually by linking multiple people to the same game board with easy to use features that make playing table top games fun!

### Pain Points
*Pandemic has killed the tabletop game community. Access to online tools to play tabletop games are expensive, computer intensive, and complicated. Other competitors to our app are very game/rule specific.*


[Return to the top](#Table-of-Contents)

<hr>


[Return to the top](#Table-of-Contents)

<hr>

## Getting Started
This project is licensed under the free MIT license. As such, if you are interested in getting a version of this project locally for testing or added development, here are the steps needed to get started:
1. Prerequisites:
    - Knowledge of HTML, CSS and JavaScript
    - Experience working with node.js servers
    - Understanding of server-side templating
    - Working knowledge of REST APIs
    - A text editor ([VSCode](https://code.visualstudio.com/download) is recommended)
    - A web browser (We recommend using Google Chrome)
    - A desire to build cools stuff!
2. Clone repo from GitHub [here](fill).
    - On the GitHub repo page, click the `clone or download` button and copy the provided url.
    - In your command-line, or CLI, run this command: `git clone <url goes here>`
3. Inside of the repo on your local machine, install the necessary dependencies and libraries:
    - In your CLI, run the command `npm init` which will initialize the project with `node.js`. If you don't have npm package manager installed, you can download node.js [here](https://nodejs.org/en/download/) which includes npm.
    - Follow the prompts to fill out the `package.json` file that `node.js` will pull from to run the server.
        - <ins>**Important!**</ins> Ensure that your `package.json` has `server.js` listed under the `start` parameter!
    - Install these libraries from npm that are used on this project with the `npm install` command on your CLI (more info below):
     - "base-64": "^0.1.0",
     - "bcrypt": "^5.0.0",
     - "cors": "^2.8.5",
     - "dotenv": "^8.2.0",
     - "express": "^4.17.1",
     - "faker": "^4.1.0",
     - "fs": "0.0.1-security",
     - "http": "0.0.1-security",
     - "jest": "^26.3.0",
     - "jsonwebtoken": "^8.5.1",
     - "mongoose": "^5.9.28",
     - "multer": "^1.4.2",
     - "multer-s3": "^2.9.0",
     - "path": "^0.12.7",
     - "socket.io": "^2.3.0",
     - "superagent": "^6.0.0"

4. You should now have a full copy of this project on your local machine. If you would like to contribute to this project in any way, checkout the [Contributing](#Contributing) section below! 

[Return to the top](#Table-of-Contents)

<hr>

## Technologies used in this project

- [HTML](https://html.spec.whatwg.org/multipage/) - A standard markup language used for web site structure.
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html) - A simple language used to add styling to web documents.
- [JavaScript](http://es6-features.org/#Constants) - A dynamically typed programming language used heavily in front-end development.
- [Dotenv](https://www.npmjs.com/package/dotenv) - An npm package used to create and load environmental variables from a hidden .env file.
- [Express](https://expressjs.com/) - A node.js web application framework.
- [Mongoose](https://www.npmjs.com/package/mongoose) -  Mongoose is an npm package that connects to MongoDB using object modeling, designed to work in an asynchronous environment. 
- [MongoDB](https://www.mongodb.com/) - MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need. 
- [Base64](https://www.npmjs.com/package/base-64) Base64 is a robust base64 encoder/decoder 
- [BCrypt](https://www.npmjs.com/package/bcrypt) A library to help you hash passwords 
- [Jest](https://jestjs.io/) Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
[JSONWebToken](https://jwt.io/introduction/) JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. 
[Multr](https://github.com/expressjs/multer) Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
[Faker](https://github.com/Marak/Faker.js#readme) faker.js contains a super useful generator method Faker.fake for combining faker API methods using a mustache string format.
[RPG Dice Roller](https://greenimp.github.io/rpg-dice-roller/guide/#how-it-works) This library is a JS based dice roller that can roll various types of dice and modifiers, along with mathematical equations.
[React](https://reactjs.org/) React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.
[Redux](https://redux.js.org/) Centralizing your application's state and logic enables powerful capabilities like undo/redo, state persistence, and much more.
[Material UI](https://material-ui.com/) React components for faster and easier web development. Build your own design system, or start with Material Design.




### APIs
- Custom Game Servers that pass through state information via socket.io to multiple clients in the same room. 

Utilizing a modularized express router and socket.io connector, wee are able to update state data in real time to verified, signed-in users attached to the same room. 

#### /Users
  - An authorized api route for protected user data
  ```json
    user {
      "username": "paul",
      "hashedPassword": "*******"
    }
  ```
  - sets a JWT as your bearer header for future authorization. This JWT can be decrypted and checked against user information on the /users route.

### Socket.io
  - utilizing a socket held in our redux state, we can connect X amount of sockets to any room
    - Rooms can be automatically created or joined with a special name that is entered into a front end form
  - This socket listens for state variables to be updated and then sends those state variables to every socket connected to the room. 
  - The front end clients then update their own states to reflect the universal state. 


### Problem Domain

*This app will perfectly simulate an in person “dinner table” style game session virtually by linking multiple people to the same game board with easy to use features that make playing table top games fun!*

### USER STORIES

- As a user, I want to be in control of the rules of the game.
  - You, as the main player can set your game rules how you would like
- As a user, I want to be able to use text commands that will generate a random dice roll.
  - We have the ability to create any chat commands that we feel are pertinent to game mechanics and have them respond in the messages archive
- As a user I would like to roll a variety of dice styles
  - Utilizing RPG Dice Roller we can accomodate any kind of dice roll a game might need
- Stretch: As a user, I want to be able to zoom in and zoom out of the game board.
- As a host user, I want to be able to save my game board visuals for easy access.
  - Utilizing AWS, we can store and load a game board image customized to the room
- As a developer, I want to persist (oauth) logged in user information in a database
  - Utilizing OAuth we can login via discord or create a user
- As a user, I want to be able to message the other players in my game.
- As a host user, I would like to be able to invite others to my friends.
- As a user, I want to be able to join a game when I'm invited.
- As a user, I want to be able to move my piece around the game board.
- As a host user, I want to be able to keep track of player scores.
- As a user, I want to know who's turn it is.


[Return to the top](#Table-of-Contents)


<hr>

## Domain Modeling: 

### Compenent Model

This diagram is a visual representation of the data structure for this project.

![img](/assets/gameNyte_wireframe-02.jpg)


[Return to the top](#Table-of-Contents)

<hr>

## Contributing

If you would like to contribute to this project, open up an issue on the project's [GitHub](https://github.com/Racial-Equity-Habit-Builder/REHB).
- Use the `bug` flag for any problems using the application.
- Use the `enhancement` flag if you have a recommendation on something to improve
- Use the `question` flag if you simply have questions about the development of this project.

[Return to the top](#Table-of-Contents)

<hr>

## Authors

* Dave Wolf - Full-stack Javascript Developer [GitHub](https://github.com/d-d-wolfe)
* David Palagashvili - Full-stack Javascript Developer [GitHub](https://github.com/Davidoffili)
* Paul Depew - Full-stack Javascript Developer [GitHub](https://github.com/PaulDepew)
* Marlene Rinkler - Full-stack Javascript Developer [GitHub](https://github.com/https://github.com/marlene-rinker)
* Garhett Morgan - Full-stack Javascript Developer [GitHub](https://github.com/GarhettM)
*  Ashley Biermann - Full-stack Javascript Developer [GitHub](https://github.com/ashleybiermann)

[Return to the top](#Table-of-Contents)

<hr>

## Acknowledgements

This section goes out to 

[Return to the top](#Table-of-Contents)

<hr>

## License

See the attached [LICENSE](LICENSE) file for details.

[Return to the top](#Table-of-Contents)

<hr>
