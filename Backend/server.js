import http from 'http';
import app from './app.js';
import { initializeSocket } from './socket.js';

const server = http.createServer(app);

initializeSocket(server);

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});