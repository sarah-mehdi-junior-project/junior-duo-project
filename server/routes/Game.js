import express from 'express';
import { createGame,getMyGames,deleteGame } from '../controllers/Game.js';

const router=express.Router();


router.post('/',createGame);
router.get('/',getMyGames);
router.delete('/:id',deleteGame);




export default router;