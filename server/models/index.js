import { Sequelize } from "sequelize";
import process from "process";
import configFile from "../config/config.json";
import User from "./user.js";

const basename = path.basename(import.meta.url);
const env = process.env.NODE_ENV || "development";
const config = configFile[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );
}

db.User = User(sequelize, Sequelize.DataTypes); 
  
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;