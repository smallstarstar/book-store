<template>
  <div>
    <van-tabbar v-model="active" @change="onChange($event)">
      <van-tabbar-item
        v-for="(item, index) in tabbar"
        :key="index"
        :icon="item.icon"
        :info="item.info"
      >{{item.name}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { TabBarList, MessageList } from "../../config/data";
import rxEvent from "pubsub-js";
import EventKeys from "../common/event-keys";
export default {
  data() {
    return {
      active: 0,
      tabbar: TabBarList.tabBar
    };
  },
  created() {
    let data = MessageList.filter((e)=>{
      return e.isReading === false;
    })
    this.tabbar.forEach((e, index) => {
      if(index === 2) {
        e.info = data.length;
      }
    });
    this.$store.dispatch("savetitleInfo", this.tabbar[0]);
  },
  methods: {
    onChange(index) {
      this.$store.dispatch("savetitleInfo", this.tabbar[index]);
      rxEvent.publish(EventKeys.TITILE_INFO, this.tabbar[index]);
      this.$router.push({
        path: this.tabbar[index].path
      });
    }
  }
};
</script>