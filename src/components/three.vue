<template>
  <div>
    <div>{{value}}</div>
    <button @click="handleSync">测试组件 v-model</button>
  </div>
</template>

<script>

export default {
  data() {
    return {};
  },
  props: {
    value: {
      default: "",
      type: String
    }
  },
  mounted() {
    
  },
  methods: {
    handleSync() {
      this.$emit("input", '父子组件双向数据绑定');
    }
  }
};
</script>
