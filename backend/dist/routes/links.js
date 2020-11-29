"use strict";
//links.ts - Arquivo com as config das rotas
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const links_1 = __importDefault(require("../controllers/links"));
const router = express_1.Router();
//Verbos HTTP, 'get' pegar, 'post' enviar.
//Rota 1
router.post('/links', links_1.default.postLink);
//Rota 2
router.get('/links/:code', links_1.default.hitLink);
//Rota 3
router.get('/links/:code/stats', links_1.default.getLink);
exports.default = router;
