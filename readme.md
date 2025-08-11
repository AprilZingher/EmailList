Here's a basic RESTful web application that uses Spring Boot and Angular to track a list of users and add to it.

How to run: Go to the folder, and run `docker compose-up --build`. The Angular server is on port 80, and the Spring Boot server is on port 8080.

In this first version, there's no CSS and nothing except the ability to add a user and set a password. However, it hopefully demonstrates basic principles in both Spring and Angular development. I plan to add CSS as well as functionality to remove users and email users so it can become a basic email list application.

The Spring section is built in Maven, with the Spring Web dependency. There's Users, a UserRepository to store them, the UserController REST controller to send data to the Angular client, and finally the Application generates a few users with a Bean at startup. There's also some Spring Security functionality to ensure only Angular can connect, and to store passwords. However, it's not completely secured; in the future, I hope to add HTTPS so passwords aren't sent over plaintext.

The Angular section (built with the Angular CLI) has a User type, a user-service to take the JSON data from the Spring section, and both user form and user list components, as well as routes to display both the user form and user list. It is deployed via Nginx.

Docker and docker-compose are used to build the site; this was necessary to deploy on AWS, and the AWS site can be found at `http://3.144.175.234`.

Some code was taken from https://www.baeldung.com/spring-boot-angular-web; however, it was significantly altered due to being somewhat outdated (it used version 1 of the Angular CLI, for example).