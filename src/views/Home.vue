<template>
  <div class="home">
    <div id="printMe" style="background:red;">
        <p>葫芦娃，葫芦娃</p>
        <p>一根藤上七朵花 </p>
        <p>小小树藤是我家 啦啦啦啦 </p>
        <p>叮当当咚咚当当　浇不大</p>
        <p> 叮当当咚咚当当 是我家</p>
        <p> 啦啦啦啦</p>
        <p>...</p>
        <div class="describle">
          <el-form :model="form" :rules="rules" ref="from" class="demo-ruleForm">
            <el-form-item label="姓名:" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="描述:" prop="describle">
              <el-input
                :disabled="detail"
                type="textarea"
                :rows="4"
                :maxlength="2000"
                placeholder=""
                v-model="form.describle">
              </el-input>
            </el-form-item>
          </el-form>
        </div>
    </div>
    <button v-print="'#printMe'">Print local range</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data(){
    return{
      form: {}
    }
  },
  components: {
    HelloWorld
  }
}
</script>
