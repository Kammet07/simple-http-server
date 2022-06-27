import express, { Request, Response } from 'express';
import logger, { requestLogger } from './config/winston';
import router from './router/router';

const app = express();

app.use(express.json());
app.use(router);

app.use((req: Request, res: Response) => {
    requestLogger(req);
    return res.status(404).send('Not found');
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    logger.info(`server up on port ${port}`);
});
