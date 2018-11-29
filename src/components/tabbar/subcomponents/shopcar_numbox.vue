<template>
    <div>
        <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" :value="initcount" @change="countChanged" ref="numbox" readonly/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
    </div>
</template>
<script>
import mui from "../../../lib/mui/js/mui.min.js";
export default {
  mounted(){
      mui(".mui-numbox").numbox();
      console.log(this.max);
  },
  methods:{
      countChanged(){
       console.log(this.$refs.numbox.value);
      }
  },
  props:["initcount"]
 
}
</script>