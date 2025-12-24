# Contribution guidelines

## Pre-requisites

Assuming that Node.js is already installed.

- **Pnpm**: Package manager (required)

## Setup

1. **Install the dependencies.**

   This will install all the dependencies for the frontend project.

   ```bash
   pnpm install
   ```

2. **Environment Variables**

   Copy `.env.example` to `.env` and configure the necessary keys.

   ```bash
   cp .env.example .env
   ```

3. **Start the development server.**

   ```bash
   pnpm dev
   ```

## Development Workflow

1. Fork the repository and create your branch from `main`.
2. Make your changes in a new branch.
3. Ensure your code follows the project's style by running the formatter.

   ```bash
   pnpm format
   ```

4. Create a Pull Request with a clear description of your changes.

> **Note**: This repository focuses on the frontend codebase. The backend codebase is private, so please ensure your contributions are related to the client-side application.
