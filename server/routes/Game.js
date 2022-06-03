import express from 'express';
import { createGame } from '../controllers/Game.js';

const router=express.Router();


router.post('/',createGame);




export default router;