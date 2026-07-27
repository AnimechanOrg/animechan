<br />
<p align="center">
  <a href="https://animechan.io">
    <img src="./public/animechan-logo.png" alt="Animechan Logo" width="150">
  </a>
  <h1 align="center">Animechan</h1>
  <p align="center">
    A free REST API for anime quotes and information
  </p>
  <p align="center">
    <a href="https://animechan.io">Website</a> •
    <a href="https://animechan.io/docs">Documentation</a> •
    <a href="https://github.com/Animechan-API/animechan/discussions/65">Request Anime</a> •
    <a href="https://github.com/Animechan-API/animechan/issues">Report Bug</a>
  </p>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Stars-1400+-FFD700?style=for-the-badge&logo=github&logoColor=white" />
  <img src="https://img.shields.io/badge/Forks-70+-4CAF50?style=for-the-badge&logo=github&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MPL--2.0-blue?style=for-the-badge" />
</p>

---

## About

**Animechan** is a free, open-source REST API that provides developers with access to a vast curated collection of anime quotes and information. Get episode counts, detailed show summaries, character information, and memorable quotes from thousands of anime series.

### Features

- 🎭 **Anime Quotes** — Fetch quotes by anime, character, or get random quotes
- 📺 **Anime Info** — Get anime details, episode counts, and summaries
- 👤 **Character Data** — Access character information from your favorite series
- ⚡ **Fast & Free** — Free tier with 5 requests/hour, 1000 req/hour for supporters
- 📖 **Well Documented** — Comprehensive API docs at [animechan.io/docs](https://animechan.io/docs)

---

## Quick Start

### Base URL

```
https://api.animechan.io/v1
```

### Get a Random Quote

```js
const response = await fetch("https://api.animechan.io/v1/quotes/random");
const quote = await response.json();
console.log(quote);
```

### Response

```json
{
  "status": "success",
  "data": {
    "content": "Whenever I counted on someone, I ended up getting hurt.",
    "anime": {
      "id": 2,
      "name": "Hanasaku Iroha"
    },
    "character": {
      "id": 5,
      "name": "Ohana Matsumae"
    }
  }
}
```

---

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/quotes/random` | GET | Get a random anime quote |
| `/quotes?anime=<name>` | GET | Get quotes from a specific anime |
| `/quotes?character=<name>` | GET | Get quotes from a specific character |
| `/quotes/random?anime=<name>` | GET | Get a random quote from an anime |
| `/quotes/random?character=<name>` | GET | Get a random quote from a character |
| `/quotes?page=<number>` | GET | Paginated list of quotes |

### Example: Quotes by Anime

```js
const response = await fetch("https://api.animechan.io/v1/quotes?anime=ReLIFE");
const quotes = await response.json();
```

### Example: Quotes by Character

```js
const response = await fetch("https://api.animechan.io/v1/quotes?character=Ohana Matsumae");
const quotes = await response.json();
```

---

## Rate Limits

| Tier | Requests per Hour |
|------|-------------------|
| Free | 5 |
| Supporter | 1,000 |

[Become a supporter](https://animechan.io/support) for higher rate limits!

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 15
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Package Manager:** [pnpm](https://pnpm.io/)

---

## Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [MongoDB](https://www.mongodb.com/)
- [pnpm](https://pnpm.io/)

### Setup

1. **Clone the repository**

```bash
git clone https://github.com/your-username/animechan.git
cd animechan
```

2. **Install dependencies**

```bash
pnpm install:all
```

3. **Start MongoDB**

```bash
sudo systemctl start mongod
```

4. **Seed the database**

```bash
pnpm backend:seed
```

5. **Start development server**

```bash
pnpm start:dev
```

The app will be available at `http://localhost:3000`

---

## Contributing

Contributions are welcome! Please read our [Contributing Guidelines](./CONTRIBUTING.md) before submitting a PR.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the [Mozilla Public License 2.0](./LICENSE).

---

<p align="center">
  Made with ❤️ by <a href="https://rockt.dev">Rocktim Saikia</a> and contributors
</p>
