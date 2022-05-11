import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favourite from '../views/pages/like';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/detail/:id': Detail,
  '/favourite': Favourite,
};

export default routes;
