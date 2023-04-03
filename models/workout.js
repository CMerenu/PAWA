'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Workout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Workout.belongsTo(models.User, {
        foreignKey: 'userId'
      })
      Workout.belongsTo(models.Plan, {
        foreignKey: 'planId'
      })
    }
  }
  Workout.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      muscleGroup: {
        allowNull: false,
        type: DataTypes.STRING
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'userId',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      planId: {
        type: DataTypes.INTEGER,
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
      modelName: 'Workout',
      tableName: 'Workouts'
    }
  )
  return Workout
}
