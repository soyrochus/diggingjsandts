import * as express from 'express';

import { hello } from './services';

const app = express();

app.get('/', (req, res) => {
    res.send(hello());
});

app.listen(3000);
