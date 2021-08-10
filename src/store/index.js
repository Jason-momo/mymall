import {createStore} from 'vuex'
import getters from "@/store/getters";
import actions from "@/store/actions";
import mutations from "@/store/mutations";

const state = {}
export default createStore({
    state,
    getters,
    actions,
    mutations
})
