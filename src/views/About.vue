<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="(item) in list" :key="item">{{item}}</div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      list:[1,2]
    }
  },
  created() {
    console.log(this.$route.params.id);

  },
  mounted(){
    // Object.defineProperty  不能通过数组下标修改数组  不能监听对象新加属性  只能监听已经声明的
    const arr=[...this.list]
    arr[1]=3;
    this.list=arr;
    // 测试通过下标修改数组  不可以修改
    // this.list[1]=3
    // this.$set(this.list,1,3)
  },
  beforeRouteEnter (to, from, next) {
    console.log(to, from);
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next();
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to, from);
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    next();
  },
  beforeRouteLeave (to, from, next) {
    console.log(to, from);
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    next();
  }
}
</script>

