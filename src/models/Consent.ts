import { Association, CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { db } from "../database";
import logger from "../logger";
import User from "./User";

class Consent extends Model<InferAttributes<Consent>, InferCreationAttributes<Consent>> {
  declare id: CreationOptional<string>;
  declare userId: ForeignKey<User['id']>;
  declare enabled: string;
  declare consent: string;

}

Consent.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    // unique: true,
    primaryKey: true
  },
  consent: {
    type: DataTypes.STRING,
    allowNull: false
  },
  enabled: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  userId: {
    type: DataTypes.UUID
  }
}, {
  sequelize: db,
  timestamps: false,
  tableName: 'consents'
});

// Consent.sync({force: true}).
// then(() => {
//   logger.info("User table created");
// })
// .catch(err => {
//   logger.error(`Exception while creating user table: ${err}`);
// })

export default Consent;