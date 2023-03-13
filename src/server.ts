import express from 'express';
import routes from './routes';

const app = express();

const port = 6969;

app.use(express.json());

app.use(routes);

app.listen(port, () => {
    console.log(`Express running on port: ${port}\n   http://localhost:${port}/`);
});
