import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      name: "zbw",
      age: 24,
      gender: "男"
    },
    count: 1
  },
  getters: {
    countPlus: state => {
      return state.count + 1;
    }
  },
  mutations: {
    changeName(state, name) {
      state.userInfo.name = name;
    },
    changeAge(state, age) {
      state.userInfo.age = age;
    },
    changeGender(state, gender) {
      state.userInfo.gender = gender;
    }
  },
  actions: {
    changeName({commit,dispatch,state}, name) {
       console.log('actions的context',state)
     commit("changeName", state.userInfo.name);
    },
    changeAge({ commit }, age) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit("changeAge", age);
          resolve();
        }, 3000);
      });
    },
    async changeGender({ dispatch, commit }, userInfo) {
      await dispatch("changeAge", userInfo.age).then(() => {
        console.log("年龄更新完毕");
      });
      await commit("changeGender", userInfo.gender);
      dispatch("changeName", userInfo.name);
    }
  }
});
