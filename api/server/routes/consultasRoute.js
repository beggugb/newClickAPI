import { Router } from 'express';
import clienteController from '../controllers/clienteController.js';

const router = Router();

router.get('/data/:page/:num/:prop/:latitude/:longitude',clienteController.consulta)
router.get('/item/:id',clienteController.getDetalle)
router.post('/search/lista', clienteController.getSearch);
router.get('/lista/items',clienteController.cajeros)

export default router;