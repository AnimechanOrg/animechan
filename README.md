<br />
<p align="center">
  <a href="https://animechan.io">
    <img src="./public/animechan-logo.png" alt="Animechan logo" width="200" height="200">
  </a>
  <h3 align="center">Animechan</h3>
  <p align="center">
    A free REST API for anime quotes
    <br />
    <a href="https://animechan.io"><strong>animechan.io</strong></a>
    ·
    <a href="https://animechan.io/docs">Docs</a>
    ·
    <a href="https://animechan.io/pricing">Pricing</a>
  </p>
</p>

> [!IMPORTANT]
> This repository is the public issue tracker for Animechan. The API and website source code lives in a private repository, and the code here is an old snapshot that is no longer maintained or deployed. Please don't open pull requests against it.

## Use this repo to

- **Report a bug** in the API or the website: [open an issue](https://github.com/AnimechanOrg/animechan/issues/new)
- **Request an anime** that is missing or has too few quotes: [anime requests](https://github.com/AnimechanOrg/animechan/discussions/65)
- **Suggest a feature**: [open an issue](https://github.com/AnimechanOrg/animechan/issues/new)

For Premium subscription or API key problems, email `animechan@rocktim.dev` instead of opening a public issue, so your key and email address stay private.

## Using the API

No signup or API key is needed. Get a random quote:

```sh
curl https://api.animechan.io/v1/quotes/random
```

```json
{
  "status": "success",
  "data": {
    "content": "Courage is a word of justice. It means the quality of mind that enables one to face apprehension with confidence and resolution. It is not right to use it as an excuse to kill someone.",
    "anime": { "id": 271, "name": "Case Closed", "altName": "Meitantei Conan" },
    "character": { "id": 318, "name": "Ran Mouri" }
  }
}
```

You can also filter quotes by anime or character, page through results, and look up anime details. The free tier allows 100 requests a day. [Premium](https://animechan.io/pricing) raises that to 1,000 requests an hour for $5/month.

See the [documentation](https://animechan.io/docs) for every endpoint.

## License

[MPL-2.0 license](./LICENSE) © 2025 [Rocktim Saikia](https://rocktim.dev)
