<template>
  <div class="home">
    <div>
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <button @click="handleMixinsClick">混入</button>
    <div>{{userInfo.name}}</div>
    <button @click="changeName('zs')">更改姓名</button>
    <div>{{userInfo.gender}}</div>
    <div>{{userInfo.age}}</div>
    <div>vuex getter ==> {{countPlus}}</div>
    <button @click="changeGenderAge">三秒后更改年龄和性别</button>
    <one msg="这是one组件"  @oneToHome="getOneData" ref="one" />
    <two msg="这是two组件" />
  </div>
</template>

<script>
import one from "../components/one.vue";
import two from "../components/two.vue";
import mixins from "../mixins/mixins.js";

import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "home",
  mixins: [mixins],
  components: {
    one,
    two
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    }),
    ...mapGetters(["countPlus"])
  },
  mounted() {
    console.log(this.userInfo);
    // 父传子
    this.$refs["one"].$emit(
      "homeToOne",
      "父组件调用子组件方法传值 home => one"
    );
  },
  methods: {
    // 获取子传父的数据
    getOneData(data) {
      console.log(data);
    },
    ...mapActions(["changeName", "changeGender"]),
    changeGenderAge() {
      this.changeGender({
        age: 27,
        gender: "女"
      });
    }
  }
};
</script>
