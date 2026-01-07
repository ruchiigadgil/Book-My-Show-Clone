# BookMyShowClone

## 🎥 Demo

![BMSC Demo](./demo.gif)

▶ Full Video Walkthrough: https://youtu.be/DV1uTM1LrqM

A responsive single-page React application that mimics the BookMyShow UI for browsing movies, viewing details and initiating payments. Built with Create React App, Tailwind CSS and TMDB (The Movie Database) as the data source.

## Table of contents

- Features
- Tech stack
- Prerequisites
- Quick start (development)
- Environment variables
- Scripts
- Notes & troubleshooting
- Contributing
- License

## Features

- Browse movies (data fetched from TMDB API)
- Hero carousel and poster sliders (react-slick)
- Movie detail pages
- Simple payment modal using Razorpay (test key present in code)
- Responsive layout with Tailwind CSS

## Tech stack

- React (Create React App)
- Tailwind CSS
- Axios for API calls
- react-slick + slick-carousel for carousels
- Headless UI for modal/dialogs

## Prerequisites

- Node.js (v16 or later recommended)
- npm (comes with Node.js) or yarn

## Quick start (development)

1. Open a terminal and change to this folder:

```powershell
cd "C:\Users\Ruchi\Book My Show Clone\BMSC\b-m-s-c"
```

2. Install dependencies:

```powershell
npm install
```

3. Start the development server:

```powershell
npm start
```

4. Open the app in a browser (if it doesn't open automatically):

```
http://localhost:3000
```

## Environment variables

The project currently includes a TMDB API key directly in `src/App.js`. For security, it's better to move this into an environment variable.

Create a `.env` file in the `b-m-s-c` folder with:

```
REACT_APP_TMDB_API_KEY=your_tmdb_api_key_here
```

Then update `src/App.js` to use `process.env.REACT_APP_TMDB_API_KEY` instead of the hardcoded value:

```js
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_TMDB_API_KEY;
```

Razorpay: the project includes a Razorpay test key (`rzp_test_I7T5qR7uWvVsLX`) inside `src/PaymentModal/Payment.Component.jsx`. Replace it with your own test or live key as needed and never commit live keys to the repository.

## Scripts

- `npm start` - Start dev server (react-scripts start)
- `npm test` - Run tests (react-scripts test)
- `npm run build` - Build for production
- `npm run eject` - Eject CRA (one-way)

## Notes & troubleshooting

- ESLint errors can stop the dev server from compiling. One known issue in this repo was the use of an undefined global `close` inside `Payment.Component.jsx` — that was fixed to call the local `closeModal` function.
- If you see a Browserslist warning:

  ```text
  Browserslist: caniuse-lite is outdated. Please run:
    npx update-browserslist-db@latest
  ```

  Run the suggested command to update the database.

- If `npm start` fails due to a missing script `dev`, use `npm start` since this project uses CRA (there is no `dev` script by default).

- If ports are occupied (default 3000):

  ```powershell
  $env:PORT=3001; npm start
  ```

- To fix dependency audit issues run:

  ```powershell
  npm audit fix
  # or to force (may introduce breaking changes)
  npm audit fix --force
  ```

## Contributing

If you'd like to contribute, please fork the repo and open a PR. Keep API keys and secrets out of commits — use `.env` and document required variables in this README.

## License

This repository does not include a license file. Add a `LICENSE` if you intend to open-source it.

---

If you'd like, I can:

- Move the TMDB key to `.env` and update `src/App.js` for you.
- Add a `.env.example` file showing required environment variables.
- Scaffold a tiny Express + MongoDB backend for bookings and show how to connect it to this frontend.

Tell me which of the above you'd like me to do next.
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

    
