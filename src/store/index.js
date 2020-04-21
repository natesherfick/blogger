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
    profileBlogs: [],
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
    setProfileBlogs(state, blogs) {
      state.profileBlogs = blogs
    }

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

    async getProfileBlogs({ commit, dispatch }) {
      try {
        let res = await api.get('profile/blogs/')
        commit('setProfileBlogs', res.data)
      } catch (error) {
        console.error(error)
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
    async createBlog({dispatch, commit}, newBlog) {
      try {
      let res = await api.post("blogs", newBlog)
      dispatch("getBlogs")
      }
      catch (error) {
        console.error(error);
      }
    },
    async editBlog({dispatch, commit}, editedBlog) {
      try {
      let res = await api.put("blogs/" + editedBlog._id, editedBlog)
      dispatch("getBlog", editedBlog._id)
      }
      catch (error) {
        console.error(error);
      }
    },
    async deleteBlog({dispatch, commit}, blog) {
      try {
      await api.delete("blogs/" + blog._id)
      dispatch("getBlogs")
      }
      catch (error) {
        console.error(error);
      }
    },

    async postComment({dispatch, commit}, newComment) {
      try {
      let res = await api.post("comments", newComment)
      dispatch("getBlog", newComment.blogId)
      }
      catch (error) {
        console.error(error);
      }
    },
    async editComment({commit, dispatch}, editedComment) {
      try {
      let res = await api.put("comments/" + editedComment._id, editedComment)
      dispatch("getBlog", editedComment.blogId)
      }
      catch (error) {
        console.error(error);
      }
    },
    async deleteComment({commit, dispatch }, comment) {
      try {
        let res = await api.delete("comments/" + comment.id);
        dispatch("getBlog", comment.blogId)
      } catch (error) {
        console.error(error);
      }
    },
  },
});
