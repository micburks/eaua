import aquameta from 'aquameta';
import serverless from 'serverless-http';

const app = aquameta({
  client: {
    url: '.netlify/functions/datum',
    version: 'v1',
    cacheRequestMilliseconds: 5000,
    events: false,
    sessionCookie: 'SESSION_ID',
    rawResponse: true,
  },
});

export const handler = serverless(app);

/*
export const handler = function(event, context, callback) {
  console.log({event, context});
  callback(null, {
    statusCode: 200,
    body: "Hello, World"
  });
} 
*/
