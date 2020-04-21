<template>
  <div class="Comment col-7 my-1">
    <div class="card p-4">
<p class=""><b>{{commentData.body}}</b></p>
<p>-{{commentData.creator.name}}</p>
</div>
  </div>
</template>


<script>
export default {
  name: 'Comment',
  props: ["commentData"],
  data(){
    return {}
  },
  mounted:{}, 
  computed:{},
  methods:{},
  components:{}
}
</script>


<style scoped>

</style>