import { db } from "../database";
import { DataTypes, 
  Model,
  ModelDefined,
  Association,
  HasManyAddAssociationMixin,
  HasManyCreateAssociationMixin,
  HasManySetAssociationsMixin,
  HasManySetAssociationsMixinOptions,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  NonAttribute,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationsMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManyHasAssociationsMixin,
  HasManyCountAssociationsMixin
} from "sequelize";
import Consent from "./Consent";

class User extends Model<InferAttributes<User, {omit: 'consents'}>, InferCreationAttributes<User, {omit: 'consents'}>> {
  declare id: CreationOptional<string>;
  declare email: string;
  declare consents?: NonAttribute<Consent[]>

  declare getConsents: HasManyGetAssociationsMixin<Consent>
  declare addConsent: HasManyAddAssociationMixin<Consent, number>;
  declare addConsents: HasManyAddAssociationsMixin<Consent, number>;
  declare setConsents: HasManySetAssociationsMixin<Consent, number>;
  declare removeConsent: HasManyRemoveAssociationMixin<Consent, number>;
  declare removeConsents: HasManyRemoveAssociationsMixin<Consent, number>;
  declare hasConsent: HasManyHasAssociationMixin<Consent, number>;
  declare hasConsents: HasManyHasAssociationsMixin<Consent, number>;
  declare countConsents: HasManyCountAssociationsMixin;
  declare createConsent: HasManyCreateAssociationMixin<Consent, 'userId'>;

  declare static associations: {
    consents: Association<User, Consent>;
  };
} 

User.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  }
}, {
  sequelize: db,
  timestamps: false,
  tableName: 'users'
});

User.hasMany(Consent, {
  sourceKey: 'id',
  foreignKey: 'userId',
  as: 'consents'
});

Consent.belongsTo(User, {
  foreignKey: 'userId'
})

// User.sync({alter: true}).
// then(() => {
//   logger.info("User table created");
// })
// .catch(err => {
//   logger.error(`Exception while creating user table: ${err}`);
// })

export default User;