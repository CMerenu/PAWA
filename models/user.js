'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Plan, {
        foreignKey: 'userId'
      })
      User.hasMany(models.Workout, {
        foreignKey: 'userId',
        as: 'owner'
      })
    }
  }
  User.init(
    {
      firstName: {
        allowNull: false,
        type: DataTypes.STRING
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING
      },
      userName: {
        allowNull: false,
        type: DataTypes.STRING
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING
      },
      state: {
        allowNull: false,
        type: DataTypes.STRING
      },
      passwordDigest: {
        allowNull: false,
        type: DataTypes.STRING
      },
      profileImage: {
        allowNull: true,
        type: DataTypes.STRING
      },
      plans: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: true,
        onDelete: 'CASCADE',
        references: {
          model: 'plans',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'Users'
    }
  )
  return User
}
