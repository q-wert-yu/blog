<template>
  <div>
    <div class="navagation">
      <a 
      v-for="nav in navList" 
      :key="nav.path"
      
      @click.prevent="$router.push(nav.path)"
      :class="{ active: isActive(nav.path) }"
    >
      {{ nav.name }}
    </a>
    </div>
    <div class="top">
      <router-view :content="list" @addtext="changetext" @del="del"></router-view>
    </div>
    
  </div>
</template>

<script>





export default {
  name: 'App',
  data(){
    return {
        list: JSON.parse(localStorage.getItem('list')) || [],
        navList: [
        { name: '主页', path: '/' },
        { name: '相册', path: '/picture' },
        
        { name: '我的', path: '/log' }
      ]
    }  
  },
  computed: {
    currentPath() {
      return this.$route.path
    }
  },
  methods: {
    changetext(newMesssage) {
      this.list.push(newMesssage)
      localStorage.setItem('list', JSON.stringify(this.list))
      const str=localStorage.getItem('list');
      const obj=JSON.parse(str);
      this.list=obj;
    },
    del(id) {
      const result = confirm('您确定要删除吗？')
      if (result) {
        this.list = this.list.filter(item => item.id !== id)
        localStorage.setItem('list', JSON.stringify(this.list))
        const str=localStorage.getItem('list');
        const obj=JSON.parse(str);
        this.list=obj;
      }
      return
},
    changecolor(e) {
      const a=e.target
      document.querySelectorAll('.b').forEach(item=>{
      item.classList.remove('active');
  })
      a.classList.add('active');
  },
    
    isActive(path) {
      return this.currentPath === path
    },
}
}
</script>

<style scoped>
  .navagation {
    display: flex;
    justify-content: space-around;
    background-color: #333;
    height: 50px;
    line-height: 50px;
    position:fixed;
    top:0;
    left:0;
    right:0;
    opacity: 0.8;
    z-index: 999;
    
  }
  .navagation a:hover {
    background-color: #555;
    font-size: larger;
  }
  .navagation a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    padding: 0 20px;
    
  }
  .navagation .active {
    background-color: #d09a11;
  }
</style>
