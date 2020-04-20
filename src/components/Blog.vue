<template>
  <div class="Blog col-4 my-2">
<div class="card">
  <img class="card-img-top img-fluid" :src="blogData.imgUrl" alt="Card image cap">
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
  methods:{},
  components:{}
}
</script>


<style scoped>

</style>