"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('mysql://root:1234@localhost:3306/swf2020');
exports.default = sequelize;
