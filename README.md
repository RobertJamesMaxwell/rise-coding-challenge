# Articulate Dev Challenge

## Thoughts on the coding challenge

Thanks for the opportunity to work on this challenge! I've chosen to implement the flashcard blocks as my UI component of choice. Definitely got to learn some interesting CSS concepts while working on this, so I enjoyed that. I hope you like it!

## Running the Apps

### Back end

1. `cd server`
1. `npm install`
1. `npm start`

### Front end

1. `cd client/flashcard-blocks-app`
1. `npm install`
1. `npm start`
1. go to `localhost:3000` in the browser

## Refactor Ideas

I'm generally pleased with how this turned out, but there's certainly things I'd consider refactoring, fixing, changing, enhancing, etc, if this were to be further implemented as a production application.

1. Make the SVG flip icon its own reusable component
1. Make the labels/textareas on the form its own reusable component
1. Fix flash of unstyled text (FOUT) on initial page load that comes from the `Lato` google font import
1. Add validations for inputs for creating a new flashcard (right now you can save blank text, probably not a good idea)
1. Add a loading spinner while flashcards load from backend
1. Enable cors only in dev mode by utilizing the process.env in node
1. Add testing
1. Overall CSS strategy. I went with vanilla CSS but structured according to component as opposed to one big CSS file. In a larger application, it might be worth using a pre-processor like LESS/SASS, or adding a dependency like [emotion](https://emotion.sh/docs/introduction) or [styled components](https://styled-components.com/), maybe use [Material UI](https://material-ui.com/). Would want to decide this as team.
1. Other general strategies that would also be decisions I'd want to discuss as a team, weigh pros and cons of before implementing for any particular app: using [Redux](https://react-redux.js.org/) for state management, using GraphQL (with [Apollo](https://www.apollographql.com/)) vs REST for API design, file structure/architecture (barrels, perhaps using Typescript, etc), dependency management (which tools are we using, which versions are we locking, etc)

---

## Welcome to the Articulate Developer Challenge!

### The coding challenge

Your goal is to implement one of Rise's interactive blocks (see [this Rise course](https://rise.articulate.com/share/QNNxptM9l1O6nA-l3BNQdOO-_6dW8prV) for more details).

At a minimum, your implementation should:

1. populate your interactive block's configuration from the provided REST API (see [`/server`](/server))
1. use `react` for your UI components
1. persist your interactive block's UI state by extending the provided REST API

What you choose to implement from there is up to you. :)

### Implementation notes:

- your interactive block implementation should live in the [`/client`](/client) directory and have its own `package.json`, `node_modules`, etc.
- feel free to bootstrap your solution with [create-react-app](https://github.com/facebookincubator/create-react-app) (or whatever tools you prefer)
- the beginnings of a REST API lives in [`/server`](/server) and is reachable at http://localhost:5000
  - the REST API currently uses variables as a makeshift in-memory database

### Getting started

To get the REST API up and running on your dev machine:

1. `cd server`
1. `yarn install` (or `npm install`)
1. `yarn start` (or `npm start`)
