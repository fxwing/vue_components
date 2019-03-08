export default {
  data() {
    return {
      mixins: "mixins"
    };
  },
  methods: {
    handleMixinsClick() {
      console.log("混入组件的值 " + this.mixins);
    }
  }
};
