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

#### Implement team's logo

#### Make data persistants with a Node.Js / Golang backend + mongoDB since we are at the begining of the project and the data structure can change

- Allow to replace all the research logic (copyTeamForRanking.ts, etc.) by query to the database (less charge on the user's machine or the backend server)

#### Migrate all calculation logic to backend

#### Improve sorting for ranking

- It's only sorted by wins and goals but the ties case is missing (e.g: 1 win, 1 tie, 1 loose VS 1 win, 2 ties, 0 loose)

#### Restructure utils

- I try to use SOLID principles as much as i can while coding. It's improving reliability but it's increasing the amount of files and the global project complexity. So they needs to be organized well (we can use "action system" like sort, copy, etc OR "data system" like teams, players, etc.)

### + 1 month

#### Improve all calculation, sorting, assigning functions (very ressources consumming)

#### Components optimizations

- Put inputs into component with conditionnal rendering depending of the type

#### Rendering optimizations

- Use `React.lazy()` and `<suspens fallback={loading_animation}></suspens>` to render only component when needed
- Use custom router to render pages conditionnaly
- Very usefull for low connection (like on mobile sometimes)

#### Match details

- Goals timing, duration with prolongations, penalties, etc.

#### Team's pages

- Create pages for team to track performance and more infos

#### Bet system

- Implementing a bet system related to match outcomes

#### Ligue & Tournament

- Create a league with a classic league system (match generation with datetime, leaderboard, etc.)
- Create a tournament system (create tournament with match generation, involved team, etc.)
