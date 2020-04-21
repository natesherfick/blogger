<template>
  <div class="Comment col-7 my-1">
    <div class="card p-4">
<p class=""><b>{{commentData.body}}</b></p>
<p>-{{commentData.creator.name}}</p>
<button v-if="$auth.userInfo.email == commentData.creator.email" class="btn bg-primary col-3" @click="edit = !edit">Edit</button>

<button v-if="$auth.userInfo.email == commentData.creator.email" class="btn bg-danger col-3" @click="deleteComment">Delete</button>

<form v-if="edit" @submit.prevent="editComment">
  <input class="col-12" type="text" v-model="commentData.body"/>
  <button type="submit" v-if="$auth.userInfo.email == commentData.creator.email" class="btn btn-primary">Submit</button>
  </form>
</div>


  </div>
</template>


<script>
export default {
  name: 'Comment',
  props: ["commentData"],
  data(){
    return {
      edit: false
    }
  },
  mounted:{}, 
  computed:{},
  methods:{
    editComment() {
      this.$store.dispatch("editComment", this.commentData)
      this.edit = false
    },
    deleteComment() {
            this.$store.dispatch("deleteComment", this.commentData)
    }
  },
  components:{}
}
</script>


<style scoped>

</style>