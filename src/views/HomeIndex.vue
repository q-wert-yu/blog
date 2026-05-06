<template>
  <div class="index">
    <h1>欢迎来到我的博客</h1>
    <div  v-if="loginUser" class="content">
      <div class="header">
        <InputText :content="content" @addtext="addtext" @content="transform" ></InputText>
      </div>
      <div class="body">
        <div class="text" v-for="(item) in myMessages" :key="item.id">
          <p>{{item.text}}</p>
          <p class="time">{{item.time}}</p>
          <button class="del" @click="del(item.id)">删除</button>
        </div>
      </div>
  
    </div>
    <div class="h3" v-else>
      <h3>请先去【我的】页面登录</h3>
    </div>
  </div>
</template>

<script>
import InputText from '../components/InputText.vue';
export default {
  components: {
    InputText

},
props: {
  content: Array
},
data() {
  return {
    
  }
},
  computed: {
    myMessages() {
      // 1. 没登录 → 返回空数组
      if (!this.loginUser) return []
      
      // 2. 登录了 → 从所有留言里过滤自己的
      return this.content.filter(item => {
        return item.userId === this.loginUser.id
      })
    }
  },

  created() {
    // 只拿登录信息
    this.loginUser = JSON.parse(localStorage.getItem("loginUser"))
  },
methods: {
  
  addtext(newMessage) {
    this.$emit('addtext', newMessage)
      
  } ,  
    del(id) {
      this.$emit('del', id)
     
    }

    
}
}
</script>

<style>
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  .index {
  height:1000px;
  width: 100%;
  margin: 0;
  padding: 0;
  background: url(../assets/indexbg.jpg) center/cover no-repeat ;
 
}
  
  .index h1{
    position:relative;
    color: 	#fff8e1;
    text-align: center;
    font-size: 50px;
    top: 300px;
    text-shadow:  0 2px 8px rgba(0,0,0,0.6);  
  }
  .content{
    position: relative;
    top:900px;
    width: 100%;
    height: 900px;
    background-color: #fff;
  }
  .header{
    height: 100px;
    background-color: #333;
    text-align: center;
    color: #fff;
    font-size: 30px;
    line-height: 200px;
  }
  .text{
    position: relative;
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    background-color: #e3f2fd;
    box-shadow: 0 2px 8px rgba(0,0,0,0.6);
  }
  .text p{
    margin: 10px 0;
    font-size: 20px;
    line-height: 30px;
    /* #f5f5f5 */
  }
  .text .time {
    position: absolute;
    bottom:2px;
    right:65px;
    font-size: 15px;
    color: #999;
  }
  .text button{
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: #e8f5e9;
    border: none;
    border-radius: 5px;
    color: #999;
    padding: 5px 10px;
    font-size: 16px;
    cursor: pointer;
  }
  .text button:hover{
    background-color: #ccc;
    color: #333;
  }
  .h3{
    position:relative;
    top:200px;
    left:650px;
  }
 
  
</style>