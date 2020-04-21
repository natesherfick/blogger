<template>
  <div class="blog-details container-fluid">
    <div class="row d-flex justify-content-center">
<div class="card col-7 my-3">
  <img class="card-img-top img-fluid" :src="activeBlog.blog.imgUrl" alt="Card image cap">
  <div class="card-body">
    <h6>{{activeBlog.blog.title}}: posted by {{activeBlog.blog.creator.name}}</h6>
    <p class="card-text">{{activeBlog.blog.body}}</p>
  </div>
</div>
</div>
<div class="row d-flex justify-content-center">
<h3 class="col-7">Comments</h3>
<Comment v-for="comment in activeComments" :commentData="comment" :key="comment._id"></Comment>
</div>
  </div>
</template>


<script>
  import Comment from "../components/Comment.vue"
export default {
  name: 'blog-details',
  data(){
    return {}
  },
  mounted(){
    this.$store.dispatch("getBlog", this.$route.params.blogId)
  }, 
  computed:{
    activeBlog() {
      return this.$store.state.activeBlog
      console.log(this.$store.state.activeBlog);
      
    },
    activeComments() {
      return this.$store.state.activeBlog.comments
    },
  },
  methods:{},
  components:{
    Comment
  }
}
</script>


<style scoped>

</style>