<template>
  <div class="blog-details">
blog deets

  </div>
</template>


<script>
export default {
  name: 'blog-details',
  data(){
    return {}
  },
  mounted(){
    this.$store.dispatch("getBlog", this.$route.params.blogId)
  }, 
  computed:{},
  methods:{},
  components:{}
}
</script>


<style scoped>

</style>