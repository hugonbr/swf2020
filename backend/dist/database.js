"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('mysql://root:Kw17v853@#@localhost:3306/swf2020');
exports.default = sequelize;
