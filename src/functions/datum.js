import aquameta from 'aquameta';
import serverless from 'serverless-http';

const app = aquameta();

// export const handler = serverless(app);

export const handler = function(event, context, callback) {
  console.log({event, context});
  callback(null, {
    statusCode: 200,
    body: "Hello, World"
  });
} 
