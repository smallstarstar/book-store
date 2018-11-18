<template>
  <div>
    <div class="container" :class="{opcity:isopcity}">
       <div class="form"> 
          <div class="form-input">
            <el-input placeholder="请输入内容" v-model="userInfo.username">
              <template slot="prepend">账号</template>
           </el-input>
           <!-- 错误的信息 -->
           <div style="color:red;font-size:12px;">{{error.message}}</div>
          </div>
          <br>
          <div class="form-input">
            <el-input placeholder="请输入内容" type="password" v-model="userInfo.password">
              <template slot="prepend">密码</template>
           </el-input>
           <!-- 错误的信息 -->
           <div style="color:red;font-size:12px;">{{errors.password}}</div>
          </div>
         <br>
          <div class="form-input">
            <label for="id">身份:</label>
            <el-select v-model="userInfo.userid" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <br>
            <el-button type="success" @click="gohome">Login</el-button>
          </div>
       </div>
    </div>
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
export default {
  data () {
    return {
         isopcity:false,
         show:false,
         userInfo:{
           username:'',
           password:'',
           userid:''
         },
   options: [{
          value: '员工',
          label: '员工'
        }, {
          value: '管理员',
          label: '管理员'
        }, {
          value: '其他',
          label: '其他'
        }],
        userid:'',
    }
  },
  computed:{
    error(){
      var message,state;
      if(!this.userInfo.username){
        message = '请输入....',
        state = false;
      }
      else {
        message  = '',
        state = true;
      }
      return {
        message,
        state
      }
    },
  errors(){
    var password,state;
      if(this.userInfo.password !== '123456'){
        password = '请输入....',
        state = false;
      }
      else {
        password  = '',
        state = true;
      }
      return {
        password,
        state
      }
    }
  },
  methods:{
    gohome(){
      if(this.error.username!=='shichaoxin' && this.errors.password!== 123456 && this.userInfo.userid!=='管理员'){
        return 
      }
      else {
       this.show = true;
       this.isopcity = true;
       console.log(this.userInfo)
       setTimeout(()=>{
          this.$router.push({
            path:'/contain',
            query:{
              name:this.userInfo.username,
              password:this.userInfo.password,
              userid:this.userInfo.userid
            }
        })
       },3000)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.opcity {
  opacity: .2;
  transition: 1s;
}
.container {
  width:100%;
  height: 100vh;
  background-color: #997;
  /* background-image: url('../assets/img/heart.jpg') */
}
.form {
  width: 30%;
  height: 300px;
  position: relative;
  top:15%;
  left:35%;
   /* background-image: url('../assets/img/heart.jpg');   */
  border:1px solid #999;
  border-radius: 5px;
}
.form-input {
  position: relative;
  top:30px;
}
button {
  width: 100%;
  position: relative;
  top:10px;
}
.dynamic {
  width:30%;
  height:300px;
  position:absolute;
  top:100px;
  left:35%;
}
.spinner {
  margin: 100px auto;
  width: 50px;
  height: 60px;
  text-align: center;
  font-size: 10px;
}
 
.spinner > div {
  background-color:darkred  ;
  /* background-color: #000; */
  height: 100%;
  width: 7px;
  display: inline-block;
  animation: stretchdelay 1.2s infinite ease-in-out;
}
 
.spinner .rect2 {
  animation-delay: -1.1s;
}
 
.spinner .rect3 {
  animation-delay: -1.0s;
}
 
.spinner .rect4 {
  animation-delay: -0.9s;
}
 
.spinner .rect5 {
  animation-delay: -0.8s;
}
 
@-webkit-keyframes stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) } 
  20% { -webkit-transform: scaleY(1.0) }
}
 
@keyframes stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}
</style>
