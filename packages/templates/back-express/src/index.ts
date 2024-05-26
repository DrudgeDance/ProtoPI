import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000; // default port to listen
const DOMAIN = 'localhost';

// _req means it's not USED.  This is a typescrpt: strict mode thing
app.get('/', ( _req: Request, res: Response) => {     
  res.send('Hello World!');
});

app.listen(PORT, 
  () => {
    console.log(`Server running on http://${DOMAIN}:${PORT}`);
  }
);
