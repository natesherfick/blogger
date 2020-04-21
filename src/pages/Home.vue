<template>
  <div class="home">
    <div class="container-fluid">
    <div class="row">
      <CreateBlog v-if="$auth.isAuthenticated" class="col-6"></CreateBlog>
    <h1 class="col-12 text-center text-light">Posts</h1>
        <blog v-for='blog in blogs' :blogData='blog' :key='blog._id'/>
</div>
</div>
  </div>
</template>




<script>
import Blog from "../components/Blog";
import CreateBlog from "../components/CreateBlog";
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getBlogs")
  },
  computed: {
    blogs() {return this.$store.state.blogs}
  },
  components: {
    Blog,
    CreateBlog
  }
};
</script>
