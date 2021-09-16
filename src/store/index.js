import { createStore } from 'vuex';
import { getEntityList } from '../api';

export const store = createStore({
    state: {
        list: [],
        likes: new Set()
    },
    actions: {
        async getEntityList({ state }) {
            const { response } = await getEntityList()

            state.list = response
        },
        setLike({ state }, id) {
            if (state.likes.has(id))
                state.likes.delete(id)
            else
                state.likes.add(id)

        }
    }
})