<template>
  <div class="log-page">
    <h2>用户登录 / 注册</h2>

    <div>
      <input v-model="username" placeholder="请输入账号" />
    </div>
    <div>
      <input v-model="password" type="password" placeholder="请输入密码" />
    </div >
    <div class="button">
      <button @click="login">登录</button>
      <button @click="register">注册</button>
      <button @click="logout">退出登录</button>

    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    // 登录
    login() {
      let users = JSON.parse(localStorage.getItem("users")) || [];
      let user = users.find(u => 
        u.username === this.username && u.password === this.password
      );

      if (user) {
        // 保存完整用户信息（含id）
        localStorage.setItem("loginUser", JSON.stringify(user));
        alert("登录成功！主页将显示你的留言");
      } else {
        alert("账号或密码错误");
      }
    },

    // 注册（带唯一ID）
    register() {
      let users = JSON.parse(localStorage.getItem("users")) || [];
      let hasUser = users.some(u => u.username === this.username);

      if (hasUser) {
        alert("账号已存在");
        return;
      }

      let newUser = {
        id: Date.now(), // 唯一ID
        username: this.username,
        password: this.password
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      alert("注册成功！");
    },

    // 退出
    logout() {
      localStorage.removeItem("loginUser");
      alert("已退出登录");
    }
  }
};
</script>

<style scoped>
  .log-page
    {
    min-height: 100vh; 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 300px;
    background-color:  #e8f5e9;
  }

  input {
    margin-bottom: 20px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    width: 300px;
  }

  button {
    margin-bottom: 20px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #4caf50;
    color: #fff;
    cursor: pointer;
  }

  button:hover {
    background-color: #3e8e41;
  }
  .button {
    display: flex;
    justify-content: space-between;
    gap:30px;
  }
</style>