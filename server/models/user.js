import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";
import bcrypt from "bcrypt";

class User extends Model {
  // Define association with Comment model
  static associate(models) {
    User.hasMany(models.Comment, { foreignKey: "userId" }); // One user can have many comments
  }
  isValidPassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

// Define the User model
User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    hook: {
      beforeCreate: async (user) => {
        // Hash the user's password before creating the user
        user.password = await bcrypt.hash(user.password, 10);
      },
      beforeUpdate: async (user) => {
        // Hash the user's password before updating the user
        user.password = await bcrypt.hash(user.password, 10);
      }
    },
    modelName: "User",
    timestamps: true, // Automatically manages `createdAt` and `updatedAt`
  },
);

export default User;