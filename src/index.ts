import express from 'express';
import './db/mongoose';
import {postRouter} from './routers/post';
import {getRouter} from './routers/get';
import {deleteRouter} from './routers/delete';
import {patchRouter} from './routers/patch';
import {defaultRouter} from './routers/default';

const app = express();

app.use(express.json());
app.use(postRouter);
app.use(getRouter);
app.use(deleteRouter);
app.use(patchRouter);
app.use(defaultRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
