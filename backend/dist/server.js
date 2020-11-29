"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("./database"));
database_1.default.sync({ /*force: true*/}); //synca o js com o bd //force destrói a tabela e recria, usa apenas em teste e não em produção
console.log('Database running at 3306');
app_1.default.listen(3001); //back na 3001 e front na 3000.
console.log('Server running at 3000');
