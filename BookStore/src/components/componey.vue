<template>
  <div>
    <div class="body">
      <div v-for="(item, index) in componeyList" :key="index" class="content_item">
        <van-panel :title="item.name">
          <div class="content">
            <div>
              <van-tag>{{item.address}}</van-tag>
            </div>
            <div>
              <van-tag type="primary">{{item.status}}</van-tag>
              <van-tag type="primary">{{item.number}}</van-tag>
              <van-tag type="primary">{{item.type}}</van-tag>
            </div>
          </div>
          <div class="person_info">
            <van-image
              v-if="item.img"
              round
              width="2rem"
              height="2rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <div
              style="width:30px;height:30px;border-radius: 50%;text-align: center;line-height:30px;
              background: #f2784b;color:#fff"
              v-if="!item.img"
            >{{item.name[0]}}</div>
            <span style="font-size:12px; padding: 0px 5px;color: #333">
              热招:
              <span style="color: green;padding: 0px 2px">java工程师</span>
              等{{item.typejobNumber}}个职位
            </span>
            <van-icon name="arrow" style="position: relative; right:-120px;"/>
          </div>
        </van-panel>
      </div>
    </div>
  </div>
</template>


<script>
import { ComponeyList } from "../../config/data";
export default {
  data() {
    return {
      componeyList: ComponeyList
    };
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
.van-tag--default {
  color: #000 !important;
  background-color: #fff;
}
</style>