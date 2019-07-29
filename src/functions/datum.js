import aquameta from 'aquameta';
import serverless from 'serverless-http';

const app = aquameta();

export const handler = serverless(app);
