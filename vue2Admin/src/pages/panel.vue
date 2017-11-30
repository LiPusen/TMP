<template>
  <div class="g-main">
    <el-button @click="show('left')">靠左</el-button>
    <el-button @click="show('right')">靠右</el-button>
    <el-button @click="show('middle')">居中</el-button>
    <el-button @click="show('width')">自定义宽度</el-button>
    <el-button @click="show('height')">自定义高度</el-button>
    <el-button @click="show('title')">更改title</el-button>
    <el-button @click="show('titleColor')">自定义title颜色</el-button>
    <el-button @click="show('color')">自定义色调</el-button>

    <v-panel :show-panel.sync="left" position="left" >
      <div style="height:200px;">4555555555555555555555555555555</div>
      <div style="height:200px;">4555555555555555555555555555555</div>
      <div style="height:200px;">4555555555555555555555555555555</div>
      <div style="height:200px;">4555555555555555555555555555555</div>
      <div style="height:200px;">4555555555555555555555555555555</div>
      <div style="height:200px;">4555555555555555555555555555555</div>
      <div style="height:200px;">4555555555555555555555555555555</div>
    </v-panel>
    <v-panel :show-panel.sync="right"></v-panel>
    <v-panel :show-panel.sync="middle" position="middle"></v-panel>
    <v-panel :show-panel.sync="width" position="middle" width="700px"></v-panel>
    <v-panel :show-panel.sync="height" position="middle" width="700px" height="70%"></v-panel>
    <v-panel :show-panel.sync="title" position="middle" width="700px" title="这是新传的title"></v-panel>
    <v-panel :show-panel.sync="titleColor" position="middle" width="700px" height="70%" titleColor="#9b59b6"></v-panel>
    <v-panel :show-panel.sync="color" position="middle" width="700px" color="#9b59b6" titleColor="#fff"></v-panel>
    <br>
    <br>
    <br>
    <br>


    <el-button @click="show('btn')">扩展按钮</el-button>
    <el-button @click="show('hideSave')">隐藏保存按钮</el-button>
    <el-button @click="show('hideCancel')">隐藏取消按钮</el-button>
    <el-button @click="show('clickSave')">点击保存按钮事件</el-button>

    <v-panel
      :show-panel.sync="btn"
      position="middle"
      width="700px"
      height="70%"
      color="#9b59b6"
      titleColor="#fff"
      :btn="btnArr">
    </v-panel>
    <v-panel :show-panel.sync="hideSave" position="middle" width="700px" color="#9b59b6" titleColor="#fff" :is-save="false"></v-panel>
    <v-panel :show-panel.sync="hideCancel" position="middle" width="700px" color="#9b59b6" titleColor="#fff" :is-cancel="false"></v-panel>
    <v-panel :show-panel.sync="clickSave" position="middle" width="700px" color="#9b59b6" titleColor="#fff" @save="save()"></v-panel>
  </div>

</template>

<script>
    export default {
        data() {
            return {
              btnArr: [
                {
                  type: 'info',
                  size: '',
                  text: '编辑',
                  callback: function () {
                    alert('编辑')
                  }
                },
                {
                  type: 'danger',
                  size: '',
                  text: '删除',
                  callback: function () {
                    alert('删除')
                  }
                },
                {
                  type:'warning',
                  size: '',
                  text: '增加',
                  callback: function () {
                    alert('增加')
                  }
                }
              ],
              left: false,
              right: false,
              middle: false,
              width: false,
              height: false,
              title: false,
              color: false,
              titleColor: false,
              btn: false,
              hideSave: false,
              hideCancel: false,
              clickSave: false
            }
        },
        created() {

        },
        methods: {
          show: function (type) {
            this[type] = true
          },
          save: function () {
            this.$alert('保存成功！', {
              confirmButtonText: '确定',
              callback: () => {
                this.clickSave = false
              }
            });
          }
        }
    }
</script>

<style scoped lang="less">

</style>
