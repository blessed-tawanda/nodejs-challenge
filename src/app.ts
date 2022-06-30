import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import { healthCheckHandler, notFoundHandler } from './routes';
import { json, urlencoded } from "express";

// configurations
dotenv.config();
import { port } from './config';
import logger from './logger';
import './database';
const app = express();

// middleware
app.use(helmet());
app.use(json());
app.use(cors());
app.use(urlencoded({extended: true}));

// routes
app.use('/api/v1/health-check', healthCheckHandler);

app.use(notFoundHandler);


app.listen(port, () => {
  logger.info(`Server Start Up On Port ${port} `);
})