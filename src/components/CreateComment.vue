<template>
  <div class="CreateComment">
<form @submit.prevent="createComment()">
  <div class="form-group">
<input type="text" class="form-control" id="body" placeholder="What are your thoughts?" v-model="newComment.body" required>

  </div>
</form>

  </div>
</template>


<script>
export default {
  name: 'CreateComment',
  data(){
    return {
      newComment: {},
    }
  },
  mounted:{}, 
  computed:{
    activeBlogId() {
      return this.$store.state.activeBlog.blog._id
    }
  },
  methods:{
    createComment() {
      this.newComment.creatorEmail = this.$auth.userInfo.email
      this.newComment.blogId = this.activeBlogId
      this.$store.dispatch("postComment", this.newComment)
    }
  },
  components:{}
}
</script>


<style scoped>

</style>