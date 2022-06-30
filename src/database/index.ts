import { Sequelize } from 'sequelize';
import logger from '../logger';

const sequelize = new Sequelize('postgres://postgres:eureka187@localhost:5432/patiti');

sequelize.authenticate().then(() => {
  logger.info('Connection to DB has been established successfully.');
  
})
.catch(err => {
  logger.error(`Unable to connect to the database: ${err}`);
})

export const db = sequelize;

