<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="handleMixinsClick">混入</button>
    <one msg="这是one组件"  @oneToHome="getOneData" ref="one" />
    <two msg="这是two组件" />
  </div>
</template>

<script>
import one from "../components/one.vue";
import two from "../components/two.vue";
import mixins from "../mixins/mixins.js";

export default {
  name: "home",
  mixins: [mixins],
  components: {
    one,
    two
  },
  mounted() {
    // 父传子
    this.$refs["one"].$emit("homeToOne", "父组件调用子组件方法传值 home => one");
  },
  methods: {
    getOneData(data) {
      console.log(data);
    }
  }
};
</script>
