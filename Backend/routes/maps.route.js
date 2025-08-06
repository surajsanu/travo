
import express from 'express';
import {authUser} from '../middlewares/auth.middleware.js';
import {getCoordinates,getDistanceTime,getAutoCompleteSuggestions } from '../controllers/map.controller.js';
import { query } from 'express-validator';

const router = express.Router();
router.get('/get-coordinates',
    query('address').isString().isLength({ min: 3 }),
    authUser,
    getCoordinates
);

router.get('/get-distance-time',
    query('origin').isString().isLength({ min: 3 }),
    query('destination').isString().isLength({ min: 3 }),
    authUser,
    getDistanceTime
)

router.get('/get-suggestions',
    query('input').isString().isLength({ min: 3 }),
    authUser,
    getAutoCompleteSuggestions
)



export default router;
