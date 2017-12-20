import * as express from 'express';
import { Application, Request, Response } from 'express';
import { resolve } from 'path';

export const app: Application = express();

app.use(express.static(resolve(__dirname, 'src/public')));
app.get('*', (req: Request, res: Response) => {
    res.sendFile(resolve(__dirname, 'src/public/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, (err: Error) => {
    if (err) throw err;
    else console.log('Listening on port ' + port);
});