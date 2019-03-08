<template>
  <div>
    <div>{{msg}}</div>
    <button @click="handleClick">子传父</button>
    <button @click="handleBroClick">兄弟组件通信</button>
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
    // 子组件通过 $on 接收
    this.$on("homeToOne", data => {
      console.log(data);
    });
  },
  methods: {
    handleClick() {
      // 子传父
      this.$emit("oneToHome", "oneToHome");
    },
    handleBroClick() {
      // 同级组件通信
      bridge.$emit("oneToTwo", "oneToTwo");
    }
  }
};
</script>
