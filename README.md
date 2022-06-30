# PaTiTi Backend Engineering Challenge

NodeJS Challenge completed using 
  - Typescript
  - Sequelize ORM
  - ExpressJS 
  - postgres

## How to run

Use the command
```
cp .env.example .env
```

Now the .env will be ready for set up add the DATABASE_URL and PORT number in the .env file accordingly

The connection string/DATABASE_URL for postgres db must be in the format

```
postgres://user:pass@example.com:5432/dbname
```

After setting up enviroment variables run the command below to install all necessary packages
```
npm i
```
----
After installing packages successfully run the command below to start the app in dev mode
```
npm run dev
```
----
The app will run on the defined PORT in .env and use the db defined at DATABASE_URL

--------

To build the app run the command below
```
npm run build
```

After building application the build output will be in the dist folder.

This challenge was found [here](https://github.com/anthonyoride/PaTiTi-Backend-Challenge)

The POSTMAN Documentation for application is [here](https://documenter.getpostman.com/view/4626076/UzBvH3vQ)