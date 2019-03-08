<template>
  <div>
    <div>{{msg}}</div>
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
  methods: {}
};
</script>
