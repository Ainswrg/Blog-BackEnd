import express from 'express';

import mongoose from 'mongoose';

import { registerValidation } from './validations/auth.js';

import checkAuth from './utils/checkAuth.js';
import * as UserController from './controllers/UserController.js';

mongoose
  .connect(
    'mongodb+srv://ainswrg:ainswrg@cluster0.rbbcvgd.mongodb.net/blog?retryWrites=true&w=majority'
  )
  .then(() => console.log('DB OK'))
  .catch((err) => console.log('DB Error: ' + err));

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello');
});

app.post('/auth/register', registerValidation, UserController.register);

app.post('/auth/login', UserController.login);

app.get('/auth/me', checkAuth, UserController.getMe);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('Server listening on 4444');
})