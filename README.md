# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


# My Notes

Hurdles faced:

* The scroll bar appearing on other pages causes the menu to be pushed to the same width as the scroll bar. Using a getScrollbarWidth function, the overshot distance from the scrollbar width is compensated for.

## Deploying to github pages
https://github.com/gitname/react-gh-pages

## Setting up Firebase
`npm i firebase`
1. https://console.firebase.google.com/u/0/
1. Create a project
1. Leave everything as default

## Configuring Firebase

### Connect to React
1. Project Overview -> Settings -> Project Settings
1. Your Apps -> click the `</>` button
1. Register your app
1. In your code, create a file called `firebase-config.js` and copy the firebase SDK to there from the website
1. Within the console again, Build -> Firestore Database -> Create database
1. Set Region and 'Start in production mode'

### Start Firestore Database
1. Requires following code in the firebase-config:
```
import {getFirestore} from "@firebase/firestore"
export const db = getFirestore(app);
```