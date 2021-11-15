# readme

1. I added .env file in the root of the project to set enviroment variables of the application.
2. I ran the command "npm run seed" in order to populate data to the database from the seed file.
3. I Created one controller for each Endpoint in the application. Controllers are ubicated in controller folder. This change allows to have a clean and decouple routers file.
4. I Created uses cases per operation in order to clean and decouple business logic using the command pattern.
5. I Created a List of data transfer objects to handle models in the application and decouple data model from business models.
5. I implemented repository pattern to clean a decouple data layer from business layer. This approach allows to have a clean architecture and implement unit testing easly using mock objects.

