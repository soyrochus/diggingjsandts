import * as express from 'express';

import { hello } from './services';

const app = express();
const db = new Datastore();

app.get('/', (req, res) => {
    res.send(hello());
});

app.listen(3000);
