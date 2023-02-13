import Vue from 'vue'
import Router from 'vue-router'

const STR_MODE_HISTORY = 'history'
const STR_PATH_LOGIN = '/'
const STR_PATH_ANALYTICS= '/analytics'
const STR_NAME_LOGIN = 'login'
const STR_NAME_ANALYTICS = 'Analytics'

Vue.use(Router)

export default new Router({
    mode: STR_MODE_HISTORY,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [
        {
            path: STR_PATH_LOGIN,
            name: STR_NAME_LOGIN,
            component: () => import('@/components/LoginPage.vue')
        },
        {
            path: STR_PATH_ANALYTICS,
            name: STR_NAME_ANALYTICS,
            component: () => import('@/components/Analytics/ViewPage.vue')
        }
    ]
})
