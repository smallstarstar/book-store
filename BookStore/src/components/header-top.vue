<template>
  <div>
    <van-nav-bar :title="titleInfo.name">
      <van-icon name="plus" slot="right" />
       <van-icon name="search" slot="right" />
    </van-nav-bar>
  </div>
</template>

<script>
import rxEvent from "pubsub-js";
import EventKeys from "../common/event-keys";
export default {
  data() {
    return {
      titleInfo: {}
    };
  },
  mounted() {
    this.titleInfo = this.$store.getters.titleInfo;
    rxEvent.subscribe(EventKeys.TITILE_INFO, (name, val) => {
      this.titleInfo = val;
    });
  },
  destroyed() {
    rxEvent.unsubscribe(EventKeys.TITILE_INFO, true);
  }
};
</script>

<style scoped>
.van-nav-bar {
  background-color: #f2784b !important;
}
.van-nav-bar__title {
    color: #fff !important;
}
.van-icon::before {
    display: inline-block;
    font-size: 20px;
    color: #fff;
    margin-left: 10px;
}
</style>