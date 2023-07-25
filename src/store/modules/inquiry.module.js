import axios from "axios";

export default {
    namespaced: true,
    state: () => ({
        inquiry: [],
    }),
    mutations: {
        addInquiry(state, inquiryData) {
            state.inquiries.push(inquiryData);
        },
    },
    actions: {
        async addInquiry({
            commit,
            state
        }, formData) {
            try {
                const res = await axios.post("/inquiries/inquiry", formData);
                commit("setInquiry", res.data);

                return res.data;

            } catch (error) {
                throw error;
            }

        },



    },
    getters: {
        inquiry(state) {
            return state.inquiry;
        },
    },
};