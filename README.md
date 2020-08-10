# REHaB
![logo](public/assets/graphics/REHaB_Icon.png)


Group midterm  project for Code Fellows Advanced Javascript

## Live deployment
Check out our app out in the wild [here](https://rehab-cf.herokuapp.com/)! 

<hr>

## Table of Contents
- [Overview](#Overview)
- [Project Scope](#Project-Scope)
- [Functional and non-functional requirements](#Functional-requirements)
- [Getting Started](#Getting-Started)
- [Technologies used in this project](#Technologies-used-in-this-project)
- [Change Log](#Change-Log)
- [Domain Modeling](#Domain-Modeling)
- [Problem Domain](#Problem-Domain)
- [Contributing](#Contributing)
- [Authors](#Authors)
- [Acknowledgements](#Acknowledgements)
- [License](#LICENSE)

<hr>

## Overview
The Racial Equity Habit Builder (REHaB) is an app that allows you to get a text (or email) that prompts you to do one thing each day to further your understanding of power, privilege, supremacy, oppression, and equity.


### What pain point does this web application solve?
It makes it easy to increase your awareness of social injustice.
It helps you get into the habit of doing one thing every day to increase your awareness.
It provides you with a variety of resources so you don’t have to find them yourself.


[Return to the top](#Table-of-Contents)

<hr>

## Project Scope

### What will your product do

- User can signup via text message
- A user can text a command to our number and receive a specified response, based on the command.
- A user will receive their daily streak
- A user will receive a daily action to complete
- A user can share their progress on Twitter

- A dev or admin can manage resources in the database

### What will the product not do

- A user will not recieve the same daily action during the streak.

### Minimum Viable Product

- The User can sign up with a user profile via text
- Confirm Sign up with user
- At a certain time each day, the User is sent an action to do utilizing Twillio
- The User can send back a notice that they have completed their action.
- The number of days in a row that the User completes an action is tracked and sent to them after they send a notice that they completed an action.
- Special response at 21 streak
- The content the User has been sent is tracked so they aren’t sent the same content again in a short amount of time.
- The User can unsubscribe.
- New content can be added to the application.
- Basic Roles. User and Admin


[Return to the top](#Table-of-Contents)

<hr>

## Functional requirements

See [Domain Modeling](#Domain-Modeling) section below

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
2. Clone repo from GitHub [here](https://github.com/Racial-Equity-Habit-Builder/REHB).
    - On the GitHub repo page, click the `clone or download` button and copy the provided url.
    - In your command-line, or CLI, run this command: `git clone <url goes here>`
3. Inside of the repo on your local machine, install the necessary dependencies and libraries:
    - In your CLI, run the command `npm init` which will initialize the project with `node.js`. If you don't have npm package manager installed, you can download node.js [here](https://nodejs.org/en/download/) which includes npm.
    - Follow the prompts to fill out the `package.json` file that `node.js` will pull from to run the server.
        - <ins>**Important!**</ins> Ensure that your `package.json` has `server.js` listed under the `start` parameter!
    - Install these libraries from npm that are used on this project with the `npm install` command on your CLI (more info below):
        - base-64
        - @code-fellows/supergoose
        - supertest
        - dotenv
        - ejs
        - express
        - jest
        - jsdoc
        - mongoose
        - node-cron
        - twilio 
        - twilio-cli
        - body-parser

4. You should now have a full copy of this project on your local machine. If you would like to contribute to this project in any way, checkout the [Contributing](#Contributing) section below! 

5. Sign up for a Twilio account as listed on the Twilio website. Follow the [Twilio documentation](https://www.twilio.com/docs/sms/quickstart/node) 

[Return to the top](#Table-of-Contents)

<hr>

## Technologies used in this project

- [HTML](https://html.spec.whatwg.org/multipage/) - A standard markup language used for web site structure.
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html) - A simple language used to add styling to web documents.
- [JavaScript](http://es6-features.org/#Constants) - A dynamically typed programming language used heavily in front-end development.
- [Dotenv](https://www.npmjs.com/package/dotenv) - An npm package used to create and load environmental variables from a hidden .env file.
- [Express](https://expressjs.com/) - A node.js web application framework.
- [EJS](https://ejs.co/) - A server-side templating language to generate HTML markup with plain JavaScript.
- [Mongoose](https://www.npmjs.com/package/mongoose) -  Mongoose is an npm package that connects to MongoDB using object modeling, designed to work in an asynchronous environment. 
- [MongoDB](https://www.mongodb.com/) - MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need. 
- [Base64](https://www.npmjs.com/package/base-64) Base64 is a robust base64 encoder/decoder 
- [@Code-Fellows/Supergoose](https://www.npmjs.com/package/@code-fellows/supergoose) Combines SuperTest and Mongoose Memory Server to reduce (hopefully) the pain of testing a Mongoose API. Props to John Cokos and JB Tellez for supergoose.
- [Jest](https://jestjs.io/) Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- [JSDoc](https://jsdoc.app/) JSDoc 3 is an API documentation generator for JavaScript, similar to Javadoc or phpDocumentor. You add documentation comments directly to your source code, right alongside the code itself. The JSDoc tool will scan your source code and generate an HTML documentation website for you.
- [Node-cron](https://www.npmjs.com/package/node-cron) The node-cron module is tiny task scheduler in pure JavaScript for node.js based on GNU crontab. This module allows you to schedule task in node.js using full crontab syntax.

- [Twilio](https://www.npmjs.com/package/twilio) The documentation for the Twilio API can be found here. The Node library documentation can be found here.

- [Twilio CLI](https://www.npmjs.com/package/twilio-cli) Unleash the power of Twilio from your command prompt.

- [Body Parser](https://www.npmjs.com/package/body-parser) Node.js body parsing middleware. Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

- [Supertest](https://www.npmjs.com/package/supertest) The motivation with this module is to provide a high-level abstraction for testing HTTP, while still allowing you to drop down to the lower-level API provided by superagent.



### APIs
- ## API ROUTES 

### User Route

#### GET https://rehab-cf.herokuapp.com/api/user

* Provides all the current users along with their attributes, in JSON format, that currently exist on our platform.

This route will require an authorization header that needs to include the phoneNumber:role of the user. This crud operation is limited to the admin role, which ensures that user data, such as their phone number, is protected.

It also provides the hosting individual with a snapshot of the current user base, a nice way to gauge how popular the app is getting.

* Example Response Body :

```

{
    "count": 3,
    "results": [
        {
            "role": "admin",
            "streak": 1,
            "completed": [],
            "preferences": [],
            "settings": [],
            "lastActionTime": null,
            "_id": "5f079bedae09570017a7a77b",
            "phoneNumber": "+1##########",
            "__v": 0
        },
        {
            "role": "user",
            "streak": 0,
            "completed": [],
            "preferences": [],
            "settings": [],
            "lastActionTime": null,
            "_id": "5f07a0541b0daa0f1910cbfe",
            "phoneNumber": "+1##########",
            "__v": 0
        },
        {
            "role": "user",
            "streak": 9,
            "completed": [
                "5f038b9804b3f10017b1ac0e"
            ],
            "preferences": [],
            "settings": [],
            "lastActionTime": 26572278,
            "_id": "5f07a5c7805f4f00176515a8",
            "phoneNumber": "+1##########",
            "__v": 0
        }
    ]
}

```

#### POST https://rehab-cf.herokuapp.com/api/user

* Sample request:
{"phoneNumber": "+1##########", "role": "user"}

This route will create a new user by providing a phoneNumber and assigned role, in the body of the request. Creating a new user is required to begin sending daily tasks and keep track of progress.

* Example User in JSON format:

```

{
    "role": "user",
    "streak": 0,
    "completed": [],
    "preferences": [],
    "settings": [],
    "lastActionTime": null,
    "_id": "5f07a0541b0daa0f1910cbfe",
    "phoneNumber": "+155555555",
    "__v": 0
}

```

#### DELETE https://rehab-cf.herokuapp.com/api/user/:id

###### Required Data:

* Authorization header: {"phoneNumber": "+1##########", "role": "admin"}
* Then the admin identifies the user to be deleted by the user's phone number.

This route will require an authorization header that needs to include the phone number and the role of admin. This operation deletes a user manually.

* Example response:

```

{ id ################# was deleted. }

```

### Resource Route

#### GET https://rehab-cf.herokuapp.com/api/resource

* Gets all the active content stored in the database, currently used for the 21-Day-Challenge.

* Example response object in JSON format:

```

{
    "count": 3,
    "results": [
        {
            "url": "www.eddiemoorejr.com",
            "type": "read",
            "keywords": ["informative", "inspiring", "etc"]
        },
        {
            "url": "www.eddiemoorejr.com",
            "type": "read",
            "keywords": ["informative", "inspiring", "etc"]
        }
    ]
}

```

#### POST https://rehab-cf.herokuapp.com/api/resource

* Allows the admin to add more content for users to explore during the 21 day challenge. This will add one or more resources in JSON format to the resource pool in the database.

* Sample Request:

```

{
    "url": "www.eddiemoorejr.com",
    "type": "read",
    "keywords": ["informative"],
}

```

* Example Response:

```

{
    "url": "www.eddiemoorejr.com",
    "type": "read",
    "keywords": ["informative"],
}

```

#### DELETE https://rehab-cf.herokuapp.com/api/resource/:id

###### Required Data:

* _id of the resource to be deleted.

This route will require an authorization header that needs to include the {"phoneNumber:admin"}. Allows you to delete a specific resource should it become irrelevant to the challenge.

* Example response:

```

{ you have deleted :id }

```

### Twilio Routes

#### POST https://rehab-cf.herokuapp.com/sms

* Example response from twilio in JSON Format:

```

{
    "account_sid": "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "api_version": "2010-04-01",
    "body": "This is the ship that made the Kessel Run in fourteen parsecs?",
    "date_created": "Thu, 30 Jul 2015 20:12:31 +0000",
    "date_sent": "Thu, 30 Jul 2015 20:12:33 +0000",
    "date_updated": "Thu, 30 Jul 2015 20:12:33 +0000",
    "direction": "outbound-api",
    "error_code": null,
    "error_message": null,
    "from": "+15017122661",
    "messaging_service_sid": "MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "num_media": "0",
    "num_segments": "1",
    "price": null,
    "price_unit": null,
    "sid": "SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "status": "sent",
    "subresource_uris": {
        "media": "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Media.json"
    },
    "to": "+15558675310",
    "uri": "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.json"
}

```

### Custom Fonts
- [Google Fonts](https://fonts.google.com/)
  - Oswald (Regular)
  - Montserrat (Regular)
### Links 
[Dr. Eddie Moore Jr.'s 21 Day Racial Equity Habit Building Challenge](https://www.eddiemoorejr.com/21daychallenge)

[Return to the top](#Table-of-Contents)

<hr>

## Change Log

See the attached [CHANGELOG.md](./CHANGELOG.md) file.

[Return to the top](#Table-of-Contents)

<hr>

## Domain Modeling: 

### Database Model

This diagram is a visual representation of the data structure for this project.

![img](docs/REHaB-UML.pdf)


[Return to the top](#Table-of-Contents)

<hr>


## Problem Domain:  

*As a user I would like to be able to be served daily information to track a habit I am trying to build. I want this to be simple and easy to use as well as to track 'how well I am doing' through a streak*

These are the features we wanted at the start of this project. 

1. The User can sign up with a user profile 
2. Confirm Sign up with user
3. At a certain time each day, the User is sent an action to do utilizing Twillio
4. The User can send back a notice that they have completed their action.
5. The number of days in a row that the User completes an action is tracked and sent to them after they send a notice that they completed an action.
6. Special response at 21 streak
7. The content the User has been sent is tracked so they aren’t sent the same content again in a short amount of time.
8. The User can unsubscribe.
9. New content can be added to the application.
10. Basic Roles. user and admin


[Return to the top](#Table-of-Contents)

<hr>

### Possible future implementation of:

- The User can set preferences regarding the content they want to get. (Time, Category, Duration)
- Weighted Choices
- Re-Roll Option
- OAuth Through Facebook
- The User can get their history in a Google Sheet.
- The User can save a reflection/note about the action they completed.

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

* Dave Wolfe - Full-stack Javascript Developer [GitHub](https://github.com/d-d-wolfe)
* David Palagashvili - Full-stack Javascript Developer [GitHub](https://github.com/Davidoffili)
* Paul Depew - Full-stack Javascript Developer [GitHub](https://github.com/PaulDepew)
* Marlene Rinker - Full-stack Javascript Developer [GitHub](https://github.com/https://github.com/marlene-rinker)
* Garhett Morgan - Full-stack Javascript Developer [GitHub](https://github.com/GarhettM)
*  Ashley Biermann - Full-stack Javascript Developer [GitHub](https://github.com/ashleybiermann)

[Return to the top](#Table-of-Contents)

<hr>

## Acknowledgements

This section goes out to Brooke Riggio, Jacob Knaack and Alistair, our biggest supporters.

[Return to the top](#Table-of-Contents)

<hr>

## License

See the attached [LICENSE](LICENSE) file for details.

[Return to the top](#Table-of-Contents)

<hr>