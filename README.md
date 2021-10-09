<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![Apache 2.0 License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/sophiabrandt/supertokens-example-nodejs">
    <img src="images/logo.png" alt="Logo">
  </a>

  <h3 align="center">Supertokens.io backend Node.js server with Docker</h3>

  <p align="center">
    <br />
    <a href="https://github.com/sophiabrandt/supertokens-example-nodejs"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/sophiabrandt/supertokens-example-nodejs">View Demo</a>
    ·
    <a href="https://github.com/sophiabrandt/supertokens-example-nodejs/issues">Report Bug</a>
    ·
    <a href="https://github.com/sophiabrandt/supertokens-example-nodejs/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is an example authentication backend using the **[Supertokens.io][supertokens]** Node.js SDK **with Docker**.  
The code is basically a TypeScript port of the [official Supertokens.io Quickstart][quickstart], but with a self-hosted Postgres database. Check the [`docker-compose.yml`](docker-compose.yml) if you're interested.

The project is only used for development and needs to be adjusted for production. For Docker, see:

* [BretFisher/node-docker-good-defaults][dockerdefaults]
* [10 best practices to containerize Node.js web applications with Docker][snykio]

### Built With

- Node.js
- TypeScript
- [Docker/docker-compose][compose]
- [Supertokens.io][supertokens]

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

You'll need:

- Docker, [docker compose CLI v2](https://github.com/docker/compose/tree/v2)
- [GNU make](https://www.gnu.org/software/make/)

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/sophiabrandt/supertokens-example-nodejs.git
   ```

<!-- USAGE EXAMPLES -->

## Usage

Start all docker containers via Makefile:

```sh
make run
```
Alternatively, copy the necessary commands from the [`Makefile`](Makefile).

Example Signup with [curlie](https://curlie.io/):

```sh
curlie post -H "Accept: application/json" -d '{"formFields": [{"id": "email", "value": "test@test.com"}, {"id": "password", "value": "AbcDef678990"}]}' http://localhost:7000/auth/signup
```

Example `json` for logging in:

```json
{
  "formFields": [
    {
      "id ": "email",
      "value ": "test@test.com "
    },
    {
      "id ": "password ",
      "value ": "12334AbCd"
    }
  ]
}
```

The Node.js server implements the [EmailPassword recipe](https://github.com/supertokens/frontend-driver-interface/) and [Session recipe](https://github.com/supertokens/frontend-driver-interface/) from Supertokens.

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/sophiabrandt/supertokens-example-nodejs/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Please update tests if necessary.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the Apache 2.0 License. See [`LICENSE`](LICENSE) for more information.

<!-- CONTACT -->

## Contact

Sophia Brandt - [@hisophiabrandt](https://twitter.com/hisophiabrandt)

Project Link: [https://github.com/sophiabrandt/supertokens-example-nodejs](https://github.com/sophiabrandt/supertokens-example-nodejs)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Supertokens.io][supertokens]

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/sophiabrandt/supertokens-example-nodejs.svg
[contributors-url]: https://github.com/sophiabrandt/supertokens-example-nodejs/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/sophiabrandt/supertokens-example-nodejs.svg
[issues-url]: https://github.com/sophiabrandt/supertokens-example-nodejs/issues
[license-shield]: https://img.shields.io/github/license/sophiabrandt/supertokens-example-nodejs.svg
[license-url]: https://github.com/sophiabrandt/supertokens-example-nodejs/blob/master/LICENSE
[supertokens]: https://supertokens.io
[pnpm]: https://pnpm.js.org/
[quickstart]: https://supertokens.io/docs/emailpassword/quick-setup/overview
[dockerdefaults]: https://github.com/BretFisher/node-docker-good-defaults
[snykio]: https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/
[compose]: https://github.com/docker/compose
