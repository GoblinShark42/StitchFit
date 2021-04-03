const path = require('path');
const express = require('express');
const app = express();

// const apiRouter = require('./routes/dummyRoute');

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
 * define route handlers
 */

app.use('/', (req, res) => {
  // DId you mean something like this ALex? 
  res.status(200).json('Shit is working');  
})

// app.use('/api', apiRouter);



//catch-all error handler 
app.use((req, res) => res.sendStatus(404));

//global error handler 
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
  };
  const errorObj = Object.assign({}, defaultErr, err);
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