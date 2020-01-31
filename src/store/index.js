import Vuex from 'vuex'
import Vue from 'vue'
import todos from './modules/todos.js'

//loading vuex
Vue.use(Vuex)


// create store

export default new Vuex.Store({
    modules: {
        todos
    }
})
