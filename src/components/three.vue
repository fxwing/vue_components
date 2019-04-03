<template>
  <div>
    <div>{{value}}</div>
    <button @click="handleSync">测试子组件使用 v-model</button>
    <div>父组件 provide 传递的值 {{this.parent}}</div>
  </div>
</template>

<script>

export default {
  data() {
    return {};
  },
  inject: ['parent'],
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
