'use strict';

import express from 'express';

import router from '../src/router/router';

const app = express();

app.use(express.json());
app.use(router);

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