<template>
  <div v-if="showPanel" class="g-panel">
    <div
      id="g-panel-layout"
      class="g-panel-layout"
      :style="panelStyle"
      :class="['g-panel-layout-'+position,animate]" >
      <div class="g-panel-layout-heading" :style="headStyle">
        {{title}}
        <span class="close" @click="cancel()">×</span>
      </div>
      <div class="g-panel-layout-body" :style="bodyStyle">
        <slot></slot>
      </div>
      <div class="g-panel-layout-footer" :style="footStyle">
        <el-button v-if="isSave" type="success" size="medium" @click="save()">保存</el-button>
        <el-button v-if="isCancel" type="default" size="medium" @click="cancel()">取消</el-button>
        <template v-if="buttonArr.length>0">
          <template  v-for="btn in buttonArr">
            <el-button :type="btn.type?btn.type:'default'" :size="btn.size?btn.size:'medium'" @click="clickBtn(btn)">{{btn.text}}</el-button>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props: {
      //是否显示面板
      showPanel:{
        type: Boolean,
        default: false
      },
      //宽度
      width: {
        type: String,
        default: '30%'
      },
      //高度
      height: {
        type: String,
        default: '100%'
      },
      //面板内容左边还是右边，默认为右边
      position:{
        type: String,
        default: ''
      },
      //标题
      title: {
        type: String,
        default: '操作'
      },
      //是否显示取消按钮
      isCancel: {
        type: Boolean,
        default: true
      },
      //是否显示保存按钮
      isSave: {
        type: Boolean,
        default: true
      },
      animate: {
        type: String,
        default: ''
      },
      //主色调，默认为白色
      color: {
        type: String,
        default: '#ddd'
      },
      //自定义title字体颜色
      titleColor: {
        type: String,
        default: '#333'
      },
      /*
      * 扩展按钮
      * 数组参数
      * type : 按钮风格 类型:String, 默认值:'default'
      * size : 按钮大小 类型:String, 默认值:'medium'
      * text : 按钮文字 类型:String, 必传
      * event : 按钮事件 类型:String, 默认值:'save'
      * callback : 按钮回调事件 类型:Function
      * */
      btn: {
        type: Array,
        default: function() {
          return []
        }
      }
    },
    mounted() {

    },
    watch:{

    },
    computed: {
      buttonArr() {
        return this.btn ? this.btn : []
      },
      panelStyle() {
        return {
          'width' : this.width,
          'height' : this.height,
          'border' : '1px solid ' + this.color,
          'margin' : this.height == '100%' || 'auto',
          'top' : 0,
          'bottom' : 0
        }
      },
      headStyle() {
        return {
          'color' : this.titleColor,
          'border-bottom' : '1px solid ' + this.color,
          'background-color' : this.color
        }
      },
      bodyStyle() {
        return {
        }
      },
      footStyle() {
        return {
          'border-top' : '1px solid ' + this.color
        }
      }
    },
    methods: {
      cancel: function () {
        console.log('点击了取消按钮')
        this.$emit('update:showPanel', false)
      },
      save: function () {
        console.log('点击了保存按钮')
        this.$emit("save")
      },
      clickBtn: function (btn) {
        console.log('点击了【' + btn.text + '】按钮')
        if (btn.callback) {
          btn.callback()
        }
      }
    }
  }
</script>

<style scoped lang="less">


</style>
