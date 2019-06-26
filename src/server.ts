import { ChatServer } from './chat-server';
import { Routes } from './routes/routes';

let app = new ChatServer().getApp();
const route = new Routes(app);
route.getRoutes();

export { app };