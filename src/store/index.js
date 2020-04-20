import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    activeBlog: {},
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBlogs(state, blog) {
      state.blogs = blog;
    },
    setActiveBlog(state, activeBlog) {
      state.activeBlog = activeBlog;
    },
  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    async getBlogs({dispatch, commit}) {
      try {
      let res = await api.get("blogs")
      commit("setBlogs", res.data) }
      catch (error) {
        console.error(error);
      }
    },
async getBlog({dispatch, commit}, blogId) {
      try {
      let res = await api.get("blogs/" + blogId)
      commit("setActiveBlog", res.data) }
      catch (error) {
        console.error(error);
      }
    },
  },
});
