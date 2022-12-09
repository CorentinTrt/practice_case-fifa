# Practice Case Fifa Score Tracking \_v1.0.0

## How to use it ?

### Copy the project

### Run the project

- This project run with Docker
- Make sure to use docker-compose v2

#### Development

- `$ yarn docker-dev`
  -> That will run a docker-compose script and enable hot-reload

#### Production

- `$ yarn docker-prod`

## Linting & formating

- On this project, there is eslint and stylelint enable with standard rules
- There is also prettier installed and setup, make sure to use prettier as default formater

## Husky

- We are using pre-commit hooks to unsure the respect of linting & formatting rules
- Make sure to have Husky installed (automatic) and running when you make a commit

## Explanations

### Add a match to the history

- We are using a peer system to add match. We need at least 1 authentication code for each team

## Improvements

### + 1 week

- Implement team's logo
- Make data persistants with a Node.Js / Golang backend + mongoDB since we are at the begining of the project and the data structure can change
- Add match details (goals timing, duration with prolongations, penalties, etc.)
- Add team's pages to track perf and infos

### + 1 month

- Bet system with rewards
- Put in place a ligue tournament system with a different ScoreBoard from the ligue and different history
