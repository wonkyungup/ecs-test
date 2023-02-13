import { users } from '@/assets/users'

const state = {
    tab: 0,
    userList: users
}

const getters = {
}

const mutations = {
    SET_CUR_TAB (state, payload) {
        state.tab = payload
    }
}

const actions = {
    setCurTab({ commit }, payload) {
        commit('SET_CUR_TAB', payload)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
