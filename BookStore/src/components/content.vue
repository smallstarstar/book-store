<template>
  <div>
    <div class="body">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div v-for="(item, index) in jobList" :key="index" class="content_item">
          <van-panel
            :title="item.title"
            :desc="item.company + ' ' + item.status"
            :status="item.slary"
          >
            <div class="content">
              <div>
                <van-tag>{{item.address}}</van-tag>
                <van-tag>{{item.year}}</van-tag>
                <van-tag>{{item.generated}}</van-tag>
              </div>
            </div>
            <div class="person_info">
              <van-image
                v-if="item.person.img"
                round
                width="2rem"
                height="2rem"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
              <div
                style="width:30px;height:30px;border-radius: 50%;text-align: center;line-height:30px;
              background: #f2784b;color:#fff"
                v-if="!item.person.img"
              >{{item.person.peronName[0]}}</div>
              <span style="font-size:12px; padding: 0px 5px;color: #333">{{item.person.peronName}}</span>
              <span style="font-size:12px;;color: #333;position:relative;top:-3px">.</span>
              <span style="font-size:12px; padding: 0px 5px;color: #333">{{item.person.job}}</span>
            </div>
          </van-panel>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
import { jobList } from "../../config/data";
export default {
  data() {
    return {
      jobList: jobList,
      loading: false,
      finished: false
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      console.log('===========')
    }
  }
};
</script>
<style scoped>
.body {
  background-color: #ddd;
  height: 100%;
}
.content_item {
  margin-bottom: 5px;
}
.content_item:last-child {
  margin-bottom: 100px;
}
.van-panel,
.van-cell {
  background-color: #fff;
}
.van-panel__content {
  padding: 10px;
}
.van-cell:not(:last-child)::after {
  border-bottom: none;
}
.van-cell {
  padding: 5px 16px;
}
.content {
  margin-top: -15px;
}
.van-panel__header-value {
  color: #f2784b;
}
.person_info {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
}
</style>