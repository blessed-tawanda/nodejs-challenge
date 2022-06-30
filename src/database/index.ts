import mongoose from 'mongoose'
import { dbUrl } from '../config'
import logger from '../logger'

export default mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  logger.info('Database connection successful')
})
.catch((e) => {
  logger.error(`Exception connecting to database ${e}`)
})
