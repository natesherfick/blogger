<template>
  <div class="about text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <p>{{ profile.email }}</p>

<Blog v-for="blog in profileBlogs" :blogData="blog" :key="blog._id"></Blog>

  </div>
</template>


<script>
import Blog from "../components/Blog.vue"
export default {
  name: "Profile",
  created(){
      this.$store.dispatch("getProfile");
      this.$store.dispatch("getProfileBlogs")
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    profileBlogs() {
      return this.$store.state.profileBlogs;
    }
  },
  components: {
    Blog
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
