<template>
  <div class="blog-details container-fluid">
    <div class="row d-flex justify-content-center">
<div class="card col-7 my-3">
  <img class="card-img-top img-fluid" :src="activeBlog.blog.imgUrl">
  <div class="card-body">
    <h6>{{activeBlog.blog.title}}: posted by {{activeBlog.blog.creator.name}}</h6>
    <p class="card-text">{{activeBlog.blog.body}}</p>
  </div>
</div>
</div>

<button v-if="$auth.userInfo.email == activeBlog.blog.creator.email" class="btn bg-primary" @click="edit = !edit">Edit</button>

<button v-if="$auth.userInfo.email == activeBlog.blog.creator.email" class="btn btn-danger" @click="deleteBlog()">Delete</button>

<form v-if="edit" @submit.prevent="editBlog">
  <input type="text" v-model="activeBlog.blog.body"/>
  <button type="submit" v-if="$auth.userInfo.email == activeBlog.blog.creator.email" class="btn btn-primary">Submit</button>
  </form>

<div class="row d-flex justify-content-center">
<h3 class="col-7">Comments</h3>
<Comment v-for="comment in activeComments" :commentData="comment" :key="comment._id"></Comment>
<CreateComment class="col-7" v-if="this.$auth.isAuthenticated"></CreateComment>
</div>
  </div>
</template>


<script>
  import Comment from "../components/Comment.vue"
  import CreateComment from "../components/CreateComment.vue"
export default {
  name: 'blog-details',
  data(){
    return {
      edit: false
    }
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
  methods:{
    editBlog() {
      this.$store.dispatch("editBlog", this.activeBlog.blog)
      this.edit = false
    },
    deleteBlog() {
      this.$store.dispatch("deleteBlog", this.activeBlog.blog)
      this.$router.push({ name: "Home"})
    }
  },
  components:{
    Comment,
    CreateComment
  }
}
</script>


<style scoped>

</style>