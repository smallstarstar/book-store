<template>
  <div>
    <!-- 搜索 -->
    <div>
      <van-search v-model="searchKey" shape="round" background="#e2e2e2" placeholder="通过姓名或公司搜索"  @input="onSearch($event)"/>
      <van-tabs v-model="activeName" @click="changeTab($event)">
        <van-tab v-for="(item, index) in messageStauts" :key="index" :title="item">
          <div v-for="(item, index) in messagelist" :key="index" class="message-box">
            <div>
              <van-image
                v-if="item.img"
                round
                width="2rem"
                height="2rem"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
              <div
                style="width:50px;height:50px;border-radius: 50%;text-align: center;line-height:50px;
              background: #f2784b;color:#fff;margin-top:5px"
                v-if="!item.img"
              >{{item.person[0]}}</div>
            </div>
            <div style="margin-top:5px;margin-left:10px">
              <span style="font-size: 15px">{{item.person}}</span>
              <span style="font-size: 12px">{{item.componey}}</span>
              <span style="font-size: 12px">{{item.job}}</span>
              <div style="margin-top:10px;font-size:13px">{{item.message}}</div>
            </div>
            <div v-if="!item.isReading">
              <van-tag
                type="primary"
                style="font-size:10px;position: absolute;right:10px;bottom: 10px;"
              >去交流</van-tag>
            </div>
            <div v-else></div>
            <div style="position: absolute;right:10px;font-size:15px;color: #333;">{{item.date}}</div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { messageServices } from "../api/messae-services";
import { MessageList, MessagStauts } from "../../config/data";
export default {
  data() {
    return {
      searchKey: null,
      activeName: "",
      messagelist: MessageList,
      messageStauts: MessagStauts
    };
  },
  mounted() {},
  methods: {
    changeTab(e) {
      let data = MessageList;
      if (e === 1) {
        this.messagelist = data.filter(e => {
          return e.isReading === true;
        });
      } else if (e === 2) {
        this.messagelist = data.filter(e => {
          return e.isReading === false;
        });
      } else {
        this.messagelist = data;
      }
    },
    onSearch() {
      let keyword = this.searchKey;
      this.messagelist = this.messagelist.filter((e)=>{
        return e.person.includes(keyword) || e.componey.includes(keyword)
      });
    }
  },
  watch: {
    searchKey(val) {
      let data = MessageList;
      if(!val) {
        this.messagelist = data;
      }
    }
  }
};
</script>
<style scoped>
.message-box {
  margin-top: 10px;
  width: 95%;
  height: 60px;
  margin-bottom: 20px;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  position: relative;
  border-bottom: 1px solid red;
}
</style>