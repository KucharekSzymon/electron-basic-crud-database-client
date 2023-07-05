# Simple client for PostgreSQL DB written in electron

This is a semester project that involved creating a client application specifically designed to interact with a PostgreSQL database. The application enables users to perform all four basic CRUD operations (Create, Read, Update, Delete) on the database.

During the project, I had the opportunity to enhance my JavaScript programming skills while working on this practical application. It allowed me to gain valuable hands-on experience in developing database-driven applications using PostgreSQL.

The project served as a valuable learning experience, enabling me to apply and further develop my JavaScript skills in a real-world scenario. It provided me with a solid foundation in working with databases and reinforced my understanding of fundamental CRUD operations.


## Run Locally

Clone the project

```bash
  git clone https://github.com/KucharekSzymon/simple-postgreSQL-electron-client
```

Go to the project directory

```bash
  cd simple-postgreSQL-electron-client
```

Install dependencies

```bash
  npm install
```

Run docker-compose to create PostgreSQL DB instance

```bash
  docker-compose up -d
```


Start the server

```bash
  npm run start
```


## Tech Stack

 - [Electron](https://www.electronjs.org/)
 - [pg](https://www.npmjs.com/package/pg)
