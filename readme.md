Here's a basic RESTful web application that uses Spring Boot and Angular to track a list of users and add to it.

How to run: In one Terminal window, navigate to ```/path/to/EmailList/``` and run ```mvn spring-boot:run```, then in another, navigate to ```/path/to/EmailList/angularclient``` and run ```ng serve```.

In this first version, there's no CSS and nothing except the ability to add a user. However, it hopefully demonstrates basic principles in both Spring and Angular development. I plan to add CSS as well as functionality to remove users and email users so it can become a basic email list application.

The Spring section is built in Maven, with the Spring Web dependency. There's Users, a UserRepository to store them, the UserController REST controller to send data to the Angular client, and finally the Application generates a few users with a Bean at startup.

The Angular section (built with the Angular CLI) has a User type, a user-service to take the JSON data from the Spring section, and both user form and user list components, as well as routes to display both the user form and user list.

Some code was taken from https://www.baeldung.com/spring-boot-angular-web; however, it was significantly altered due to being somewhat outdated (it used version 1 of the Angular CLI, for example).