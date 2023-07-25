import axios from "axios";

export default {
    namespaced: true,
    state: () => ({
        rooms: {},


    }),
    mutations: {
        setRooms(state, rooms) {
            state.rooms = rooms;
        }
    },
    actions: {
        async getRooms({
            commit,
            state
        }) {
            state.isLoading = true;
            try {
                const res = await axios.get("/store/target_rooms/list/");
                if (res.status === 200) {
                    commit("setRooms", res.data);
                }
            } catch (error) {
                console.error(error);
            }
        },
    },
    getters: {
        rooms(state) {
            return state.rooms;
        },
    },
};