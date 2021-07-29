

# Pvs

🔎 **Smart, Extensible Build Framework**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io) 
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@pvs/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.



## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.    

Visit [Nx Cloud](https://nx.app/) to learn more.


### GIT HOOKS  

"applypatch-msg": "echo \"[Husky] applypatch-msg\"",
        "pre-applypatch": "echo \"[Husky] pre-applypatch\"",
        "post-applypatch": "echo \"[Husky] post-applypatch\"",
        "pre-commit": "echo \"[Husky] pre-commit\"",
        "pre-merge-commit": "echo \"[Husky] pre-merge-commit\"",
        "prepare-commit-msg": "echo \"[Husky] prepare-commit-msg\"",
        "commit-msg": "echo \"[Husky] commit-msg\"",
        "post-commit": "echo \"[Husky] post-commit\"",
        "pre-rebase": "echo \"[Husky] pre-rebase\"",
        "post-checkout": "echo \"[Husky] post-checkout\"",
        "post-merge": "echo \"[Husky] post-merge\"",
        "pre-push": "echo \"[Husky] pre-push\"",
        "pre-receive": "echo \"[Husky] pre-receive\"",
        "update": "echo \"[Husky] update\"",
        "post-receive": "echo \"[Husky] post-receive\"",
        "post-update": "echo \"[Husky] post-update\"",
        "reference-transaction": "echo \"[Husky] reference-transaction\"",
        "push-to-checkout": "echo \"[Husky] push-to-checkout\"",
        "pre-auto-gc": "echo \"[Husky] pre-auto-gc\"",
        "post-rewrite": "echo \"[Husky] post-rewrite\"",
        "sendemail-validate": "echo \"[Husky] sendemail-validate\"",
        "fsmonitor-watchman": "echo \"[Husky] fsmonitor-watchman\"",
        "p4-changelist": "echo \"[Husky] p4-changelist\"",
        "p4-prepare-changelist": "echo \"[Husky] p4-prepare-changelist\"",
        "p4-post-changelist": "echo \"[Husky] p4-post-changelist\"",
        "p4-pre-submit": "echo \"[Husky] p4-pre-submit\"",
        "post-index-change": "echo \"[Husky] post-index-change\""
