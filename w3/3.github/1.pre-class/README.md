## Github

- A Platoform for open source projects.
- We can manage our work like team colabration, issues, pull requests from others on github.
- We can also use github pages to deploy our frontend application on github.

## Current Knowledge

1. use github for code management.
2. build project on local
3. use netlify/vercel to deploy oour code to their servers.

### Developer Workflow usecases

#### Usercase 1

1. Manage Code
2. Handle Team Colabration
3. Test our development
4. Deploy our code
   1. Install dependencies
   2. Build Project
   3. deploy it

#### Usercase 2

1. code is deployed, repository is avaiable for few/all people
2. some one notice a bug and raises a issue
3. we create a lable for the issue
4. we assign the issue to a developer
5. he reproduce the issue
6. fix it
7. he raise a PR for the issue
8. we review and merge
9. updated code is deployed
10. the issue is closed

## [Github Actions](https://github.com/features/actions)

- Automate, customize, and execute your software development workflows right in your repository with GitHub Actions.
- You can discover, create, and share actions to perform any job you'd like, including CI/CD, and combine actions in a completely customized workflow.

### What is Github Actions ?

1. Its a platform to atomate developer workflows.
2. Means we do not need to do fix set of activities and the system will take care of most of our tasks.

### Why do we need Github Actions ?

- With this tool we can have few automatic actions to be executed wheneven any changes happen to our code.
- e.g: me changed our code we now want to redeploy it, github actions will do it for us as soon as we pusch it.

### How does it work

1. We create a workfow.yml file
2. It listens to github events
   - PR created
   - PR merged
   - code pushed
   - issue created
3. Workflow we created is triggered for the event.

#### Simple Workflow: CI/CD pipeline

- Steps
  1. commit code
  2. test
  3. build
  4. deploy

### [Demo](https://github.com/riteshf/counter-app-solution)

1. Getting started
   1. Clone any of you gitbub repository
      - e.g.: `git clone https://github.com/riteshf/counter-app-solution.git record`
      - `cd record`
      - `npm i`
   2. On github go to `Actions` and `Setup a Workflow`: Search `Node`

```yml
# This workflow will do a clean installation of node dependencies, cache/restore them, build the source code and run tests across different versions of node
# For more information see: https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs

name: React app

on:
  push:
    branches: ["main"]
  pull_request:
    branches: ["main"]

jobs:
  build:
    runs-on: self-hosted

    strategy:
      matrix:
        node-version: [14.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
          cache: "npm"
      - run: npm i
      - run: npm run build --if-present
      - run: npm test
```
