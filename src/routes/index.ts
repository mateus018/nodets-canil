import {Router} from 'express';
import * as PageControler from '../controller/pageController';
import * as SearchControler from '../controller/searchController';
const router = Router();

router.get('/',PageControler.home);
router.get('/dogs',PageControler.dogs);
router.get('/cats',PageControler.cats);
router.get('/fishes',PageControler.fishes);

router.get('/search',SearchControler.search);


export default router;