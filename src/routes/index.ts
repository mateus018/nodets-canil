import {Router} from 'express';
import * as PageControler from '../controller/pageController';
import * as SearchControler from '../controller/searchController';
const router = Router();

router.get('/',PageControler.home);
router.get('/dogs',PageControler.dogs);
router.get('/dogs',PageControler.cats);
router.get('/dogs',PageControler.fishes);

router.get('/search',SearchControler.search);


export default router;