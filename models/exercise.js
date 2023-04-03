'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Exercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Exercise.belongsTo(models.Workout, {
        foreignKey: 'workoutId'
      })
    }
  }
  Exercise.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      set: {
        allowNull: false,
        type: DataTypes.STRING
      },
      rep: {
        allowNull: false,
        type: DataTypes.STRING
      },
      workoutId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        onDelete: 'CASCADE',
        references: {
          model: 'workouts',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Exercise',
      tableName: 'Exercises'
    }
  )
  return Exercise
}
