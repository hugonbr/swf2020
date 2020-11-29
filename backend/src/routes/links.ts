//links.ts - Arquivo com as config das rotas

import { Router } from 'express';
import linksController from '../controllers/links';

const router = Router();

//Verbos HTTP, 'get' pegar, 'post' enviar.

//Rota 1
router.post('/links', linksController.postLink)

//Rota 2
router.get('/links/:code', linksController.hitLink)

//Rota 3
router.get('/links/:code/stats', linksController.getLink)

export default router;