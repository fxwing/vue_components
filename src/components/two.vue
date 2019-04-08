<template>
  <div>
    <div>{{msg}}</div>
    <button @click="handleSync">测试.sync</button>
  </div>
</template>

<script>
// 同级组件传值的桥梁
import bridge from "../utils/bridge.js";

export default {
  data() {
    return {};
  },
  props: {
    msg: {
      default: "",
      type: String
    }
  },
  mounted() {
    // 接收one组件的传值
    bridge.$on("oneToTwo", data => {
      console.log(data);
    });
  },
  methods: {
    handleSync() {
      // 通过子组件触发父组件的方法改值
      // this.$emit("changeShow", false);
      // 通过updata:isShow
      this.$emit('update:msg','gaibianTwo')
    }
  }
};
</script>
