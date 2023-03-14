import express from 'express';
import routes from './routes';
import dbInit from '../database/init';

const app = express();
const port = 6969;
    // Database sync
dbInit();

app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Express running on port: ${port}\nLive: http://localhost:${port}/`);
});
