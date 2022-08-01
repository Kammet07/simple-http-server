import express, { Request, Response } from 'express';
import logger, { requestLogger } from './config/winston';
import router from './router/router';
import * as bodyParser from "body-parser";

const app = express();

// app.use(express.json());
app.use(bodyParser.raw())
app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(router);

app.use((req: Request, res: Response) => {
    requestLogger(req);
    return res.status(404).send('Not found');
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    logger.info(`server up on port ${port}`);
});
