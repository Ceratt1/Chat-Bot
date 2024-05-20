import express from 'express'
import router from './routers/router'
import routerchat from './routers/routerchatbot';
const app = express();

app.use(router)
app.use(routerchat)
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


export default app;
