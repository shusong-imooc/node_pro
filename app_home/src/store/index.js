import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
    a:0,
    user:{
        name:'shusong',
        pwd:'123456789'
    }
}

const store = new Vuex.Store({
    state,
    getters,
	actions,
	mutations
})

export default store;