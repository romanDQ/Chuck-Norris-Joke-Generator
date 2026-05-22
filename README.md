# Chuck Norris Joke Generator

A small React + Redux app that fetches Chuck Norris jokes from the public
[chucknorris.io](https://api.chucknorris.io) API. Click **Generate Random Joke**
for a random one, or pick a category to get a joke from that category.

![status](https://img.shields.io/badge/status-demo-2e7d32)
![react](https://img.shields.io/badge/react-18-61dafb)
![redux](https://img.shields.io/badge/redux-classic%20%2B%20thunk-764abc)

## Tech stack

- **React 18** (functional components + hooks)
- **Redux** + **redux-thunk** for state and async actions
- **Material UI v5** for the component library and theming
- **axios** for HTTP requests
- **Create React App** (`react-scripts`) for the build toolchain

## Getting started

Requires Node 18+ and npm.

```bash
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Script | Description |
| --- | --- |
| `npm start` | Run the app in development mode with hot reload. |
| `npm run build` | Build an optimised production bundle into `build/`. |
| `npm run eject` | Eject from Create React App (one-way operation). |

## Project structure

```
src/
├── App.jsx                  # Top-level component: layout, theme, joke display
├── index.js                 # Entry point: creates the store and React root
├── components/
│   ├── RandomJoke.jsx       # "Generate Random Joke" button
│   └── CategoryList.jsx     # Category buttons grid
├── Redux/
│   ├── actions/
│   │   ├── actions.jsx      # Thunks: getRandomJoke, getCategoryJoke, getCategories
│   │   └── constants.jsx    # Action type constants
│   └── reducers/
│       ├── index.jsx        # combineReducers root
│       └── reducers.jsx     # categoriesReducer + randomJokeReducer
├── styles/                  # Plain CSS for layout and the category grid
└── img/Chuck.jpg            # Avatar image
```

## State shape

```ts
{
  categories: {
    items: string[],     // e.g. ["animal", "career", "dev", ...]
    isLoading: boolean,
    error: string | null,
  },
  randomjoke: {
    text: string,        // the current joke
    isLoading: boolean,
    error: string | null,
  },
}
```

Each slice has its own reducer (`categoriesReducer`, `randomJokeReducer`).
A `*_REQUEST` action sets `isLoading` to `true`; the matching success or
error action resets it.

## Data flow

```
[User] -- click --> [Component]
                       │  dispatch(thunk)
                       ▼
                   [Thunk action]
                       │  dispatch(REQUEST)
                       │  axios.get(...)
                       │  dispatch(SUCCESS | ERROR)
                       ▼
                   [Reducer] -> new state
                       │
                       ▼
                [useSelector re-render]
```

## API

| Endpoint | Used in |
| --- | --- |
| `GET https://api.chucknorris.io/jokes/random` | `getRandomJoke` |
| `GET https://api.chucknorris.io/jokes/random?category={c}` | `getCategoryJoke` |
| `GET https://api.chucknorris.io/jokes/categories` | `getCategories` |

The base URL is centralised in `src/Redux/actions/actions.jsx` as `API_BASE`.

## Accessibility

- The joke container is an `aria-live="polite"` region so screen readers
  announce new jokes when fetched.
- Loading state uses `aria-busy` on the joke region and an `aria-label` on the
  spinner.
- Errors are surfaced through `role="alert"` MUI `<Alert>` components.

## Possible next steps

- Migrate Redux to `@reduxjs/toolkit` (`createSlice` + `createAsyncThunk` or
  RTK Query) and delete the constants/actions/reducers boilerplate.
- Replace Create React App with **Vite** for faster builds.
- Convert the codebase to **TypeScript** for compile-time guarantees on the
  state shape.

## License

This project is for learning purposes. The Chuck Norris jokes themselves come
from the free public [chucknorris.io](https://chucknorris.io) API.
