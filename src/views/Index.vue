<template>
  <div class="box">
    <img
      src="https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00011-2072.jpg"
      class="pic"
      id="pic"
      :style="{'transform': 'translate('+ posX + 'px,' + posY + 'px) translateZ(0px) scale(' + dis + ')  rotate(' + angle + 'deg)'}"
    />
  </div>
</template>

<script>
import AlloyFinger from "../../static/js/alloyfinger";
export default {
  data() {
    return {
      posX: 0,
      posY: 0,
      dis: 1,
      angle: 0,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let that = this;
      let element = document.getElementById("pic");
      this.af = new AlloyFinger(element, {
        rotate: function (evt) {
          console.log("实现旋转");
          that.angle += evt.angle;
        },
        pinch: function (evt) {
          console.log("实现缩放");
          that.dis = evt.zoom;
        },
        pressMove: function (evt) {
          console.log("实现移动");
          that.posX += evt.deltaX;
          that.posY += evt.deltaY;
        },
        tap: function (evt) {
          console.log("单击");
          //点按触发
        },
        doubleTap: function (e) {
          console.log("双击");
          //双击屏幕触发
        },
        longTap: function (e) {
          console.log("长按");
          //长按屏幕750ms触发
        },
        swipe: function (e) {
          //e.direction代表滑动的方向
          console.log("swipe" + e.direction);
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  .pic {
    width: 30rem;
    margin: 2rem auto;
  }
}
</style>