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

- Queries
  - `getAccount(id)`: Retrieves details of a specific account
- Mutations
  - `createAccount(holderName, amount)`: Creates a new account with the provided details.
  - `depositAmount(id, amount)`: Deposits funds into a specified account.
  - `withdrawAmount(id, amount)`: Withdraws funds from a specified account
  - `transferAmount(from, to, amount)`: Transfers funds between accounts

Each operation returns an account object with the following fields:

```graphql
{
  id: ID!             # Unique identifier of the account
  holderName: String! # Name of the account holder
  amount: Int!        # Current balance in the account
}
```
