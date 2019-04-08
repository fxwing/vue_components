<template>
  <div class="home">
    <div>
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    </div>
    <button @click="handleMixinsClick">混入</button>
    <div>{{userInfo.name}}</div>
    <div>{{userInfo.gender}}</div>
    <div>{{userInfo.age}}</div>
    <button @click="changeName('ww')">更改姓名</button>
    <button @click="changeGenderAge">三秒后更改全部个人信息</button>
    <div>vuex getter ==> {{countPlus}}</div>
    <one msg="这是one组件"  @oneToHome="getOneData" ref="one" />
    <two :msg.sync='msg'  :isShow.sync="isShow" v-show="isShow" />
    <!-- <two msg="这是two组件"  @changeShow="changeShow" v-show="isShow" /> -->

    <three v-model="three" />
  </div>
</template>

<script>
import one from "../components/one.vue";
import two from "../components/two.vue";
import three from "../components/three.vue";
import mixins from "../mixins/mixins.js";

import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "home",
  mixins: [mixins],
  components: {
    one,
    two,
    three
  },
  provide: {
    parent: 'pa'
  },
  data() {
    return {
      msg:'two',
      isShow: true,
      three: "three",
    };
  },
  computed: {
    ...mapState(['userInfo']),
    ...mapGetters(["countPlus"])
  },
  mounted() {
    // 触发子组件的方法
    this.$refs["one"].fromHome(111)
    console.log(this.userInfo);
    // 父传子
    this.$refs["one"].$emit("homeToOne", "父组件给子组件传值 home => one");
  },
  methods: {
    // 获取子传父的数据
    getOneData(data) {
      console.log(data);
    },
    ...mapActions(["changeName", "changeGender"]),
    changeGenderAge() {
      this.changeGender({
        name: "zs",
        age: 27,
        gender: "女"
      });
    },
    // changeShow(data){
    //   this.isShow=data;
    // }
  }
};
</script>
