import http from 'node:http';
import NodeAdapter from '@web-widget/node';
import WebRouter from '@web-widget/web-router';

const webRouter = new WebRouter();

webRouter.get('/', () => {
  return new Response(JSON.stringify({ message: 'Hello, World!' }), {
    headers: { 'Content-Type': 'application/json' }
  });
});

http.createServer(new NodeAdapter(webRouter).handler).listen(3000);
