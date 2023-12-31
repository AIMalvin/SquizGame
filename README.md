# Readme (SquizGame)
## Malvin NOËL CDOF5

## Introduction

So my web application is called SquizGame. It's a learning app where users can practice on a bank of questions. They'll be able to choose between four answers, and only one of them will be correct. They'll be able to evaluate their speed and the number of correct answers. Users can also access their account statistics. They will be able to see how many questions they have answered, and their average response time.

Normally, the project was supposed to be a 4-person affair, but one group member withdrew 3 days beforehand because two other group members weren't working at all. Namely, the project had not been started. I was with Adam NASSIR, Louis-Melchior, and Adrien MONTREER before the group disbanded.

So I decided to make my own project in 3 days. I hope you can take this into account in my rating.

## Database

So the database will be on PostgreSQL. There will be five tables: Answers, Questions, Themes, UserStats, and Users.

![image](https://github.com/AIMalvin/SquizGame/assets/69598452/a06cc28a-340e-4ac8-9dfb-a4bc722ba873)

The database will be set up on PGAdmin 4, where we've created a Squiz Game database with a Squiz Game User, enabling us to connect it to the back-end.

![image](https://github.com/AIMalvin/SquizGame/assets/69598452/67e30a8a-4ace-4a03-bf90-58cfdd289c76)

To insert data, we'll use PGAdmin's query tool. We'll then be able to create tables and question banks.

![image](https://github.com/AIMalvin/SquizGame/assets/69598452/281eb320-bedb-48cd-9d35-c61309242d8b)

## Backend

![image](https://github.com/AIMalvin/SquizGame/assets/69598452/28b1e856-c5b4-4ba2-a60d-c3aba4e2117c)

For the back-end, I used Node.js and Express as well as TypeScript. We created two different folders: a source folder where all the TypeScript files will be stored, and the build folder where the Node.js files will be created automatically. 

To synchronize the back-end and front-end, I'm going to use an advanced web feature, WebSocket.

The Sequelize file will enable the back-end to synchronize the database with the data received from the front-end.

When the user enters his password, it will be encrypted in the database using the Bcrypt library. This protects the user's privacy.

![image](https://github.com/AIMalvin/SquizGame/assets/69598452/17a63a6d-b02d-4fe3-a850-beeace9c75d5)

The back-end is connected to the database.

![image](https://github.com/AIMalvin/SquizGame/assets/69598452/52a4e50a-f9ac-4a9a-b315-87a1ef15df6d)


## Frontend

![image](https://github.com/AIMalvin/SquizGame/assets/69598452/08f38086-2ee2-4dcc-ae86-a92a31a915bd)


For the front-end, I used Angular 17 and ng-bootstrap. I then created various components. The dashboard for the user, a home page for the game's home screen, a screen for playing, a screen for registering, a screen for this login, and the user will have access to statistics and traditional games. 

The problem was that Angular 17 is very recent and documentation is still sparse. That's why the code worked for a while, but after the switch to Angular 17, it didn't work anymore. The connection with the back-end via WebSocket was no longer working.

## The Interface via the Frontend

When the user logs in, he or she is directed to the game's home interface. This interface corresponds to the front-end on-page file.

![image](https://github.com/AIMalvin/SquizGame/assets/69598452/d8a85084-36d2-4436-adc6-efee7943be7e)


Then, if you already have an account, you can log in by clicking on Login.

![image](https://github.com/AIMalvin/SquizGame/assets/69598452/3b548a03-9189-416c-afaa-b9693275e0cc)


On the other hand, if the user doesn't already have an account, this will be automatically detected on the back-end with the WebSocket sent from the front-end to the back-end. And the back-end will be able to detect whether or not the user has already registered. If not, he'll be automatically redirected to the interface to register.

![image](https://github.com/AIMalvin/SquizGame/assets/69598452/6a08c653-6d8c-4fcb-844f-07bcd146c9b9)

The user can then register on the application. This will send the information to the back-end with the WebSocket, which will synchronize the database with the new information.

Once logged in, the user lands on the Dashboard interface. So he can choose whether he wants to play or see his stats.

![image](https://github.com/AIMalvin/SquizGame/assets/69598452/86c97619-75c9-4ca4-a2c3-de35f8dba82b)


When the user clicks on Play, First, he can select a term from these four themes.

![image](https://github.com/AIMalvin/SquizGame/assets/69598452/4fc183f6-eef6-48a2-9f9c-ba03dd225c1c)


After, he'll be able to play the question-and-answer game, with a series of 10 questions in which points will be calculated according to the user's response speed, as well as whether he answers correctly or incorrectly.

![image](https://github.com/AIMalvin/SquizGame/assets/69598452/6d8808d0-e7fd-47fc-b194-4e4182f234d0)

When the game is over, the score is displayed. And the user can start a new game.

![image](https://github.com/AIMalvin/SquizGame/assets/69598452/3bf95f0b-7be7-4b85-b6cf-7028099b74bc)


When the user clicks on statistics of his dashboard, he'll have access to various statistics from the first time he played the game.

![image](https://github.com/AIMalvin/SquizGame/assets/69598452/38375d06-1458-4d30-bc23-3c179ad37e8b)


## Conclusion

On this project, I managed to create a database and connect it to the back-end. One of the main obstacles I encountered was establishing a connection between the frontend and backend using WebSocket. This proved particularly difficult due to the new functionality of standalone modules introduced in Angular 17. At first, I wanted to use HttpClient to connect the backend and frontend, but it didn't work at all with these new modules.

Standalone modules represent a significant departure from Angular's traditional module system, offering a more simplified way of organizing and priming components. However, it also means rethinking conventional methods of integrating services such as WebSocket.

Nevertheless, I was able to propose a functional front-end and a back-end connected to the functional nose drop too.
