import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3333, () => {
  // eslint-disable-next-line
  console.log('🔥 Server listening on port 3333.....');
});
