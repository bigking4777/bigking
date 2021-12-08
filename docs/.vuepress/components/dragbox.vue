<template>
  <div>
    <div>切换移动函数</div>
    <div class="box" @click="change">切换!</div>
      <DragBox ref="box"></DragBox>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  methods: {
    change(){
      this.$refs.box.transitionFun = !this.$refs.box.transitionFun
    }
  }
}

</script>
<style scoped>
.box{
  width:90px;
  height:40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
}
</style>