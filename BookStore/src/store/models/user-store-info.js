const UserStateInfo = {
    state: {
        userInfo: {}
    },
    mutations: {
        SAVE_USERINFO(state, userInfo) {
            state.userInfo = userInfo;
        }
    },
    actions: {
        saveuserInfo({ commit }, userInfo) {
            commit('SAVE_USERINFO', userInfo)
        }
    }
}
export default UserStateInfo;