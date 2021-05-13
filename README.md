## Setup I did
1. ran `npx create-react-app auth-redux-review` and cd'd into it
2. ran `npm i express express-session massive dotenv bcryptjs redux react-redux axios`
3. built out a `./server/index.js` and `./server/controllers/authController.js`
4. built out database files for getting a user based on email and registering a new user
5. built out `./src/redux/authReducerjs` and `./src/redux/store.js`
6. imported the store to `./src/index.js`
7. set up `./src/App.js` to conditionally show things if we're logged in vs out
8. set up `./src/components/Auth.js` to handle logging in/registering/logging out

## Where to start?
I would recommend looking over the server files just to be acquainted with them but it's basically the same as the previous couple days. The notes begin in the authReducer and will take you through all the frontend files.