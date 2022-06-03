import express from 'express';
import { createGame,getMyGames } from '../controllers/Game.js';

const router=express.Router();


router.post('/',createGame);
router.get('/',getMyGames);




export default router;