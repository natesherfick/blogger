<template>
  <div class="home">
    <div class="container-fluid">
    <div class="row">
    <h1 class="col-12 text-center">Welcome</h1>
        <blog v-for='blog in blogs' :blogData='blog' :key='blog._id'/>
</div>
</div>
  </div>
</template>




<script>
import Blog from "../components/Blog";
export default {
  name: "home",
  created() {
    this.$store.dispatch("getBlogs")
  },
  computed: {
    blogs() {return this.$store.state.blogs}
  },
  components: {
    Blog
  }
};
</script>
