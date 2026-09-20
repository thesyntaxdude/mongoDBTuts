import express from "express";
import errorCenter from "./middleware/errorCentral.js";
const app = express();

app.use(errorCenter);
export default app;
