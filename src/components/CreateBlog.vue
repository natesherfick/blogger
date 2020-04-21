<template>
  <div class="CreateBlog">
<form @submit.prevent="createBlog()">
  <div class="form-group">
    <label for="title">Blog Title</label>
    <input type="text" class="form-control" id="title" placeholder="Enter a blog title" v-model="newBlog.title">
    <label for="body">Post</label>
    <input type="text" class="form-control" id="body" placeholder="What's on your mind?" v-model="newBlog.body">
    <label for="imgUrl">Image</label>
    <input type="url" class="form-control" id="imgUrl" placeholder="Post a valid image url" v-model="newBlog.imgUrl">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

  </div>
</template>


<script>
export default {
  name: 'CreateBlog',
  data(){
    return {
      newBlog: {},
    }
  },
  mounted:{}, 
  computed:{},
  methods:{
    createBlog() {
      this.newBlog.creatorEmail = this.$auth.userInfo.email
      this.$store.dispatch("createBlog", this.newBlog)
    }
  },
  components:{}
}
</script>


<style scoped>

</style>