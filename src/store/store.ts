import { createStore } from 'vuex';

interface State {
    token: string | null;
}

const store = createStore<State>({
    state: {
        token: null,
    },
    mutations: {
        setToken(state, token: string) {
            state.token = token;
        },
    },
    getters: {
        isAuthenticated(state) {
            return state.token !== null;
        },
    },
});

export default store;