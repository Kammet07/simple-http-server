import { Router, Request, Response } from 'express';
import { requestLogger } from '../config/winston';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    requestLogger(req);
    res.send('Hola mundo');
});

router.post('/auth', (req: Request, res: Response) => {
    requestLogger(req);
    res.send({ access_token: 'random token' });
});

router.get('/test', (req: Request, res: Response) => {
    requestLogger(req);
    const d = new Date();
    res.send([
        {
            date: new Date(d.setDate(d.getDate() - 1)),
            value: 10,
        },
        {
            date: new Date(),
            value: 20,
        },
    ]);
});

export default router;
