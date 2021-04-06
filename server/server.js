const path = require('path');
const express = require('express');
const app = express();
const SALT_WORK_FACTOR = 5;
const bcrypt = require('bcryptjs');

// cookie-session for creating sessions stored in cookies
const cookieSession = require('cookie-session');
// key for cookie stored here. backend team should try placing other necessary keys in this file if possible
const keys = require('../keys/keys');

// for bcrypt testing purposes
/*
const SALT_WORK_FACTOR = 5;
const bcrypt = require('bcryptjs');
const BCRYPT_TEST_ID = 'Senor Goobly';*/
const wardrobeRouter = require('./routes/wardrobeRoute');
const outfitsRouter = require('./routes/outfitsRoute');
const userRouter = require('./routes/userRoute');
const loginRouter = require('./routes/loginRoute');
const logoutRouter = require('./routes/logoutRoute')
const PORT = 3000;

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * handle requests for static files
 */
app.use(express.static(path.resolve(__dirname, '../client')));

/**
 * This will create a cookie for a client when they get onto our server
 */
app.use(
  cookieSession({
    name: 'goobly-cookie',
    maxAge: 1 * 60 * 60 * 1000, // maxAge is in milliseconds, so 1 * 60 min * 60 sec * 1000 = 1 hr maxAge
    keys: [keys.COOKIE_KEY],
  })
);

app.use('/login', loginRouter);



/** This manually deletes the session and therefore the cookie
 *  Need to connect to logoutRoute and logoutController
 */
app.use('/logout', (req, res) => {
  req.session = null;
  res.redirect('/');
})
//app.use('/logout', logoutRouter);


/**
 * This should obtain the hashed value of the cookie which will match the hashed value in the User table for the hashed user id column
 * */
app.get('/getcookie', (req, res) => {
  // grab the cookie value from the client. it arrives in an object with key value pair { user : hashed_value}
  res.status(200).send(req.session);
});

/**
 * Compare the cookies value (this should be the hashed user id) with the actual user id
 */
app.get('/comparecookie', async (req, res) => {
  // obtains the hashed user id from the client's cookie. It will be stored in req.session.user
  let hashedId = req.session.user;

  // obtain a boolean for whether the user id and hashed user id match
  const valid = await bcrypt.compare('11', hashedId);

  // match not found, the user is not validated
  if (!valid) {
    res.send('not valid');
  }

  // match found, the user is validated
  res.send('valid');
});

/**
 * handle routes
 */
app.use('/wardrobe', wardrobeRouter);
app.use('/outfits', outfitsRouter);
app.use('/users', userRouter)

//catch-all error handler for unknown routes
app.use('*', (req, res) => res.status(404).send('not working'));

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
  };
  const errorObj = Object.assign({}, defaultErr, err);
	console.log("ERROR TYPE: ", err)
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
