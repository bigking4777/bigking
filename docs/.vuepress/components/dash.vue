<template>
  <div class="flex">
    <input
      type="text"
      max="100"
      v-model="num"
    >

    <Dashboard
      :value='num*1'
      name='item.name'
    ></Dashboard>

  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 20,
    };
  },

  methods: {},
};
</script>
<style scoped>
.flex{
  display: flex;
  flex-direction: column;
}
</style>