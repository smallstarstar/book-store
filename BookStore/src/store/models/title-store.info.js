const TitleStoreInfo = {
    state: {
        titleInfo: {}
    },
    mutations: {
        SAVE_TITLEINFO(state, payload) {
            state.titleInfo = payload;
        }
    },
    actions: {
        savetitleInfo({ commit }, payload) {
            commit('SAVE_TITLEINFO', payload)
        }
    }
}
export default TitleStoreInfo;