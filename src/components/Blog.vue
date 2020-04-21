<template>
  <div class="Blog col-4 my-2" @click="selectBlog()">
<div class="card bg-light">
  <img class="card-img-top img-fluid" :src="blogData.imgUrl">
  <div class="card-body">
    <h6>{{blogData.title}}: posted by {{blogData.creator.name}}</h6>
    <p class="card-text">{{blogData.body}}</p>
  </div>
</div>

  </div>
</template>


<script>
export default {
  name: 'Blog',
  props: ["blogData"],
  data(){
    return {}
  },
  mounted:{}, 
  computed:{},
  methods: {
    selectBlog() {
      this.$store.commit("setActiveBlog", {});
      this.$router.push({
        name: "blog-details",
        params: {blogId: this.blogData._id}
      })
    }
  },
  components:{}
}
</script>


<style scoped>

</style>