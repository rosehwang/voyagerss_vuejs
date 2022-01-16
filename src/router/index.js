import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 동적 라우트 1번 
let routes = [];
function loadRoutes(){
    const context = require.context("./views", true, /\.js$/);
    return context.keys()
        .map(context)
        .map(m=> m.default)
}

const resourceRoutes = loadRoutes();
resourceRoutes.forEach((route) => {
  routes.push(route[0]);
});

// 동적 라우트 2번 
// const routeFileList = require.context("./views", true, /\.js$/);
// let routes = [];
// routeFileList.keys().forEach(key => {
//     let fileName = key.split('.js')[0];
//     let filePath = `./views/${fileName.split('/')[1]}`;
//     const routePath = require(`${filePath}`);
//     routes = routes.concat(routePath.default);
// });
// routes.push({path: '*', component: Error});


// const requireAuth = (to, from, next) => {
//     !!store.state.access_token ? next() : next(`/login?returnPath=${encodeURIComponent(from.path)}`)
// }
//
// const requireManager = (to, from, next) => {
//
//     // 액세스토큰이 있으면
//     if (!!store.state.access_token) {
//         // 권한이 ADMIN 이면
//         if (!!store.state.account.roles && !!(store.state.account.roles.includes('ADMIN') ))
//             return next()
//         else {
//             alert('권한이 없습니다.')
//             return next('/')
//         }
//     } else
//         return next(`/login?returnPath=${encodeURIComponent(from.path)}`)
// }

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
