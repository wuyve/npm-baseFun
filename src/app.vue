<template>
  <div class="helloName">
    <input type="text" placeholder="请输入姓名" v-model="yourName" />
    <div v-if="yourName">hello<span class="name">{{yourName}}!</span></div>
  </div>
</template>
<script>
  export default {
    name:'helloName',
    data () {
      return {
        yourName: ''
      }
    },
    methods: {

    },
    created(){
    }
  }
</script>
<style>
</style>