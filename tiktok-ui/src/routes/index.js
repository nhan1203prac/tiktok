import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import HeaderOnly from '../Layout/HeaderOnly';
import Search from '../pages/Search';
import Live from '../pages/live';
import routeConfig from '../config/routes';
const publicRoutes = [
    { path: routeConfig.home, component: Home },
    { path: routeConfig.profile, component: Profile },
    { path: routeConfig.following, component: Following },
    { path: routeConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routeConfig.live, component: Live },
    { path: routeConfig.search, component: Search, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
