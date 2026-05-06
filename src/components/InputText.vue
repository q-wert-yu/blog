<template>
   <div class="upload-box">
    <input type="text" v-model="text" @keyup.enter="add()" placeholder="说点儿什么吧" style="flex:1; border:none; outline:none; padding:4px;">
    
   
    
    <button class="submit" @click="add()">发表</button>
    
   
  </div>
</template>

<script>

  
export default {
  props: {
    content: Array,
  },
  data() {
    return {
      text: ''
    }
  },
 
  methods: {
  add(){
    if(this.text.trim() === ''){
      alert('请输入内容');
      return;
    }
    const loginUser = JSON.parse(localStorage.getItem("loginUser"));
    console.log(this.text);
    const date = new Date();
    const time=date.toLocaleString();
    
    const newMsg = {
    text: this.text,
    time,
    userId: loginUser ? loginUser.id : null ,
    id: Date.now()
    }; 
  this.$emit("addtext", newMsg);
  this.text = '';
  }

}
}


</script>

<style>

    .upload-box {
      display: flex;
      align-items: center;
      border: 1px solid #e5e5e5;
      border-radius: 4px;
      margin:10px auto;
      
      padding: 8px;
      width: 400px;
      background: #fff;
    }

   
    #file-input {
      display: none;
    }

    
    .upload-btn {
      width: 32px;
      height: 32px;
      background: url('https://img.icons8.com/fluency/48/camera.png') center/cover no-repeat;
      cursor: pointer;
      margin-left: 8px;
    }


</style>