'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Plan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Plan.belongsTo(models.User, {
        foreignKey: 'userId'
      })
      Plan.hasMany(models.Workout, {
        foreignKey: 'planId'
      })
    }
  }
  Plan.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      goal: {
        allowNull: false,
        type: DataTypes.STRING
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING
      },
      likeCount: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      image: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Plan',
      tableName: 'plans'
    }
  )
  return Plan
}
