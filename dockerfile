
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 4200
ENTRYPOINT ["java", "-jar", "app.jar"]


ENV RDS_ENDPOINT="postgres.c9ias86s0ev1.us-east-2.rds.amazonaws.com"
ENV RDS_USER="aprilzingher"