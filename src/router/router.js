import VueRouter from 'vue-router';
import Dashboard from '../view/admin/dashboard';
import Login from '../view/login';
import Home from '../view/user/home';
import NotFound from '../view/404';

const routes = [
        // {
        //     path: '/not-found',
        //     component: NotFound,
        //     name: 'not_found',
        //     meta: {
        //         auth: false
        //     }
        // },
        {
            path: '/',
            component: Home,
            name: 'home',
            meta: {
                auth: false
            }
        },
        {
            path: '/admin/dashboard',
            component: Dashboard,
            name: 'dashboard',
            meta: {
                auth: true
            }
        },
        {
            path: '/login',
            component: Login,
            name: 'login',
            meta: {
                auth: false
            }
        },
    ];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

export default router;