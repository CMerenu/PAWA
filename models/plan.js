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
      image: {
        allowNull: true,
        type: DataTypes.STRING
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'userId',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      workouts: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: true,
        onDelete: 'CASCADE',
        references: {
          model: 'workout',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Plan',
      tableName: 'Plans'
    }
  )
  return Plan
}
