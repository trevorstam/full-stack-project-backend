'use strict';

import express from 'express';

//middleware
import notFound from './middleware/404';
import errorHandler from './middleware/error';

import router from '../src/router/router';

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extend: true}));

app.use(router);
app.use(notFound);
app.use(errorHandler);

app.use(express.static('public'));

let server;

module.exports = {
  app,
  start: (port) =>{
    server = app.listen(port, () => console.log(`listening on port ${port}`));
  },
  stop: ()=>{
    server.close(()=>{
      console.log('Server has been stopped');
    });
  },
};