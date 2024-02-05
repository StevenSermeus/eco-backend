# eco-backend

## Database

The database is a PostgreSQL or Mysql database. The goal is to compare the performance on different type of load.

![database](./database.png)

## How to initialize the database

```bash
# {{database}} is either postgresql or mysql
npx prisma migrate dev --schema ./database/prisma/{{database}}.prisma
```

Mysql change url

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

## API routes

- POST:/api/user
  - body : {email: string}
  - response: {id: uuid, email: string, createdAt: date, updatedAt: date}
- POST:/api/post
  - body { title: string, content: string, userId: uuid}
    - response: {id: uuid, title: string, content: string, userId: uuid, createdAt: date, updatedAt: date}
- GET:/api/post/page
  - query: {start: number, limit: number}
- GET:/api/post/count
  - response: {count: number of all posts in the database}
- POST:/api/comment
  - body {userId: uuid, postId : uuid , content : string}
    - response: {id: uuid, userId: uuid, postId: uuid, content: string, createdAt: date, updatedAt: date}
- POST:/api/reaction
  - body {userId: uuid, postId : uuid , isLike : boolean}
    - response: {id: uuid, userId: uuid, postId: uuid, isLike: boolean, createdAt: date, updatedAt: date}
- GET:/api/stats
  - response: [{
    id: uuid,
    email: string,
    createdAt: date,
    updatedAt: date,
    posts: [
    {
    id: uuid,
    title: string,
    content: string,
    createdAt: date,
    updatedAt: date,
    userId: id,
    _count: {
    comments: number,
    reactions: number
    }
    }
    ]
    },]

For the stats route, the key named \_count is not required to be name like this. Any name is fine as long as you have a list of all user with all their posts and the count of comments and reactions for each post.
