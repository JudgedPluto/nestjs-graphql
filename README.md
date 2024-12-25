# Description

This repository contains a financial account management system built with NestJS, GraphQL, and SQLite. The system provides a robust API for handling various banking operations.

# Getting Started

To set up the project locally, follow these steps:

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run start
```

Once the server is running, access the GraphQL Playground interface:

- Local development: `http://localhost:3000/graphql`
- Custom configuration: Replace `localhost` and `3000` with your host and port settings

# Available Operations

The GraphQL Playground provides the following operations:

## Queries

- `getAccount`: Retrieves details of a specific account

## Mutations

- `createAccount`: Creates a new account with the provided details
- `depositAmount`: Deposits funds into a specified account
- `withdrawAmount`: Withdraws funds from a specified account
- `transferAmount`: Transfers funds between accounts
