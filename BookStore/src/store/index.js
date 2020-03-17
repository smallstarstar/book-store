import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import createLogger from 'vuex/dist/logger';
import UserStateInfo from './models/user-store-info';
import TitleStoreInfo from './models/title-store.info';

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        UserStateInfo,
        TitleStoreInfo
    },
    getters,
    plugins: debug ? [createLogger()] : []
})