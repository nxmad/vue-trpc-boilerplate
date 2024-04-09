import { createUWebSocketsHandler } from "trpc-uwebsockets";
import { App } from 'uWebSockets.js';
import { appRouter } from "./router";
import { createContext } from "./context";

const app = App();

/* handle CORS as needed */
app.options('/*', (res) => {
  res.writeHeader('Access-Control-Allow-Origin', "*");
  res.writeHeader('Access-Control-Allow-Headers', "Content-Type");
  res.endWithoutBody();
});

createUWebSocketsHandler(app, '/trpc', {
  router: appRouter,
  createContext,
  // CORS part 2. See https://trpc.io/docs/server/caching for more information
  responseMeta({ ctx, paths, type, errors }) {
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
  },
});

/* dont crash on unknown request */
app.any('/*', (res) => {
  res.writeStatus('404 NOT FOUND');
  res.end();
});

app.listen('0.0.0.0', 3000, () => {
  console.log('Server listening on http://0.0.0.0:3000');
});
