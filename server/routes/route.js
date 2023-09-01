import express from 'express';
import { getAllNews, getTopHeadlinesByCountry, getNewsBySearch } from '../controller/controller.js';

const router = express.Router();

router.get('/news', getAllNews);
// router.get('/news', getTopHeadlinesByCountry);
// router.get('/news', getNewsBySearch);

export default router;
