<h1 align="center">
  Lead Prosper
</h1>

## Description
Lead management system API using tech-stack:
- NestJS
- Prisma ORM (MySQL) 

## Installation
- Update .env file with your database credentials
- Run `npm install` to install dependencies
```bash
$ npm install
```
- Run `npx prisma migrate dev` to install dependencies

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Database Explorer
- Run `npx prisma studio` to open database explorer

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
