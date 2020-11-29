"use strict";
//app.ts - Arquivo com as config gerais da aplicação
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //express - lib para construção de backend
const links_1 = __importDefault(require("./routes/links")); // importa o arquivo de rotas
const cors_1 = __importDefault(require("cors")); //cors link o back com o front
const app = express_1.default(); //cria o app com express
app.use(express_1.default.json()); //define o formato de dados como json
app.use(cors_1.default()); //habilita o cors
app.use(links_1.default); //define as rotas
exports.default = app;
