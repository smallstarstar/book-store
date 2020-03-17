<template>
  <div>
    <div class="login" :class="{'registor': isopcity}" v-if="!show">
      <van-form @submit="onSubmit">
        <van-field
          class="input"
          v-model="userInfo.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          class="input"
          v-model="userInfo.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />

        <van-field
          v-if="!showLogin"
          class="input"
          v-model="userInfo.phone"
          name="手机号码"
          label="手机号码"
          placeholder="手机号码"
          :rules="[{ required: true, message: '请填写手机号码' }]"
        />
        <van-field
          v-if="!showLogin"
          class="input"
          v-model="userInfo.email"
          name="邮箱"
          label="邮箱"
          placeholder="邮箱"
          :rules="[{ required: true, message: '请填写邮箱' }]"
        />
        <van-field
          v-if="!showLogin"
          readonly
          clickable
          name="picker"
          :value="userInfo.phoneModel"
          label="手机机型"
          placeholder="点击选择手机机型"
          @click="showPickerPhone = true"
        />
        <van-popup v-model="showPickerPhone" position="bottom">
          <van-picker
            show-toolbar
            :columns="phoneModel"
            @confirm="onConfirmPhone"
            @cancel="showPickerPhone = false"
          />
        </van-popup>
        <van-field
          v-if="!showLogin"
          readonly
          clickable
          name="picker"
          :value="userInfo.roleId"
          label="角色"
          placeholder="点击选择角色"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit" v-if="showLogin">提交</van-button>
          <van-button round block type="info" native-type="submit" v-if="!showLogin">提交</van-button>
        </div>
      </van-form>
      <div style="margin: 16px;">
        <van-button round block type="primary" @click="registor()" v-if="showLogin">注册</van-button>
      </div>
    </div>
    <!-- 用户注册 -->
    <!-- 登陆激活动画 -->
    <div v-if="show" class="dynamic">
      <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { userServices } from "../services/user-services";
import rxEvent from "pubsub-js";
import EventKeys from "../common/event-keys";
import { PersnonBasicInfo } from '../models/person-basic-info';

export default {
  data() {
    return {
      isopcity: false,
      show: false,
      userInfo: {},
      showLogin: true,
      columns: ["管理员", "员工", "公司"],
      phoneModel: ["Android", "iOS"],
      showPicker: false,
      showPickerPhone: false,
      timeer: null
    };
  },
  mounted() {
    rxEvent.subscribe(EventKeys.PAARAMS_ERROR, (name, val) => {
      if (val) {
        this.$toast(val.message);
        this.userInfo = {};
      }
    });
  },
  destroyed() {
    clearTimeout(this.timeer);
  },
  methods: {
    async onSubmit() {
      if (this.showLogin) {
        let data = await userServices.userLogin(
          this.userInfo.username,
          this.userInfo.password
        );
        this.loginSuccess(data);
      } else {
        // 用户注册
        let data = await userServices.userRegistor(this.userInfo);
        this.loginSuccess(data);
      }
    },
    loginSuccess(data) {
      let personInfo = new PersnonBasicInfo();
      personInfo.username = data.username;
      personInfo.id = data._id;
      personInfo.roleId = data.roleId;
      this.$store.dispatch("saveuserInfo", personInfo);
      localStorage.setItem("personBasicInfo", JSON.stringify(personInfo));
      this.$toast.success("登录成功");
      this.show = true;
      this.timeer = setTimeout(() => {
        this.$router.push({
          path: "/home"
        });
      }, 3000);
    },
    registor() {
      this.showLogin = false;
      this.isopcity = true;
      this.userInfo = {};
    },
    onConfirm(value) {
      this.userInfo.roleId = value;
      this.showPicker = false;
    },
    onConfirmPhone(value) {
      this.userInfo.phoneModel = value;
      this.showPickerPhone = false;
    }
  }
};
</script>

<style scoped>
.opcity {
  opacity: 0.2;
  transition: 1s;
}
.login {
  width: 90%;
  margin: auto;
  margin-top: 200px;
  padding: 10px;
  border: 1px solid #f2784b;
}
.registor {
  margin-top: 70px;
}
.input {
  margin-bottom: 20px;
}
.dynamic {
  width: 30%;
  height: 300px;
  position: absolute;
  top: 100px;
  left: 35%;
}
.spinner {
  margin: 100px auto;
  width: 50px;
  height: 60px;
  text-align: center;
  font-size: 10px;
}

.spinner > div {
  background-color: darkred;
  height: 100%;
  width: 7px;
  display: inline-block;
  animation: stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
  animation-delay: -1.1s;
}

.spinner .rect3 {
  animation-delay: -1s;
}

.spinner .rect4 {
  animation-delay: -0.9s;
}

.spinner .rect5 {
  animation-delay: -0.8s;
}

@-webkit-keyframes stretchdelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}

@keyframes stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
</style>
