import { Router, Request, Response } from 'express';
import reposJSON from '../../data/repos.json';

export const repos = Router();

let data: any = null;
let data2: any = reposJSON;

// const https = require('https');
//
// let url = 'https://www.reddit.com/r/popular.json';
// let url = 'https://api.github.com/users/silverorange/repos';
// I used the top url as a test, and my code seems to work with that. But when I try to use the url that I actually need,
// I get "Unexpected token R in JSON at position 2", which I don't know how to solve. I tried looking it up,
// and as far as I can tell, there seems to be a demand for a "user-agent" in the header.
// I tried to replace the provided res.header and provide a user-agent, but that didn't work either...
//
// https
//   .get(url, (res: any) => {
//     let body = '';
//     res.on('data', (chunk: any) => {
//       body += chunk;
//     });
//     res.on('end', () => {
//       try {
//         let json = JSON.parse(body);
//         data = json;
//         // do something with JSON
//       } catch (error: any) {
//         console.log(error);
//       }
//     });
//   })
//   .on('error', (error: any) => {
//     console.error(error.message);
//   });

repos.get('/', async (req: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');
  // res.header('user-agent', 'silverorange');
  res.status(200);

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  res.json({ data, data2 });
});
