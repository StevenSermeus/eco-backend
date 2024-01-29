# eco-backend

## Database

The database is a PostgreSQL or Mysql database. The goal is to compare the performance on different type of load.

![database](./database.png)

## Language and Framework

For the moment, we will test the following languages and frameworks but later, I would like to also test without ORM. So that we can compare the performance of the ORM.

- Python - Django - django-orm
- Node.js - Express - prisma
- PHP - Laravel - Eloquent (Not now)
- Java - Spring - Hibernate
- go - gorm
- C# - .NET Core - nttframework (Not now)
- Rust - Actix - diesel (Not now)

## Data to be measured

- Power consumption
- CPU usage
- Memory usage
- Iteration number
- Time to first byte

## Variations

For each language and framework, we will test the following variations:

- Database used
- Scenario (50/50, read heavy, write heavy)
- OS if time permits
