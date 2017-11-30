<template>
  <button :disabled="disabled" class="v-btn"
     :class="[
      type ? 'v-btn-' + type : '',
      size ? 'v-btn-' + size : '',
      {
        'outline': outline,
        'round': round,
        'is-disabled': disabled
      }
    ]" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: {
      type: {
        type: String
      },
      size: {
        type: String
      },
      outline: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      round: {
        type: Boolean,
        default: false
      }
    },
    data() {
        return {}
    },
    created() {

    },
    methods: {
      handleClick: function (e) {
        console.log(e)
        this.$emit('click', '')
      }
    }
  }
</script>

<style scoped lang="less">
  .v-btn{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #d8dce5;
    color: #5a5e66;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:focus,
    &:hover {
      color: #409EFF;
      border-color: #c6e2ff;
      background-color: #ecf5ff
    }
    &-md{
      padding: 10px 20px;
      font-size: 14px;
      border-radius: 4px
    }
    &-md.round{
      padding: 10px 20px
    }
    &-sm,&-sm.round{
      padding: 9px 15px
    }
    &-xs,&-sm{
      font-size: 12px;
      border-radius: 3px;

    }
    &-xs,&-xs.round{
      padding: 7px 15px
    }
    &-blue{
      color: #fff;
      background-color: #409EFF;
      border-color: #409EFF;
      &:focus,
      &:hover {
        background: #66b1ff;
        border-color: #66b1ff;
        color: #fff
      }
    }
    &-blue.outline{
      color: #409EFF;
      background: #ecf5ff;
      border-color: #b3d8ff;
      &:focus,
      &:hover {
        background: #409EFF;
        border-color: #409EFF;
        color: #fff
      }
    }
    &-red{
      color: #fff;
      background-color: #fa5555;
      border-color: #fa5555;
      &:focus,
      &:hover {
        background: #fb7777;
        border-color: #fb7777;
        color: #fff;
      }
    }
    &-red.outline{
      color: #fa5555;
      background: #fee;
      border-color: #fdbbbb;
      &:focus,
      &:hover {
        background: #fa5555;
        border-color: #fa5555;
        color: #fff
      }
    }
    &-green{
      color: #fff;
      background-color: #67c23a;
      border-color: #67c23a;
      &:focus,
      &:hover {
        background: #85ce61;
        border-color: #85ce61;
        color: #fff
      }
    }
    &-green.outline{
      color: #67c23a;
      background: #f0f9eb;
      border-color: #c2e7b0;
      &:focus,
      &:hover {
        background: #67c23a;
        border-color: #67c23a;
        color: #fff
      }
    }
    &-yellow{
      color: #fff;
      background-color: #eb9e05;
      border-color: #eb9e05;
      &:focus,
      &:hover {
        background: #efb137;
        border-color: #efb137;
        color: #fff
        }
    }
    &-yellow.outline{
      color: #eb9e05;
      background: #fdf5e6;
      border-color: #f7d89b;
      &:focus,
      &:hover {
        background: #eb9e05;
        border-color: #eb9e05;
        color: #fff;
      }
    }
  }
  .v-btn.is-disabled,
  .v-btn.is-disabled:focus,
  .v-btn.is-disabled:hover{
    color: #b4bccc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #e6ebf5
  }
  .v-btn.v-btn-blue.is-disabled,
  .v-btn.v-btn-blue.is-disabled:focus,
  .v-btn.v-btn-blue.is-disabled:hover{
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff
  }
  .v-btn.v-btn-red.is-disabled,
  .v-btn.v-btn-red.is-disabled:focus,
  .v-btn.v-btn-red.is-disabled:hover{
    color: #fff;
    background-color: #fdaaaa;
    border-color: #fdaaaa
  }
  .v-btn.v-btn-green.is-disabled,
  .v-btn.v-btn-green.is-disabled:focus,
  .v-btn.v-btn-green.is-disabled:hover{
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d
  }
  .v-btn.v-btn-yellow.is-disabled,
  .v-btn.v-btn-yellow.is-disabled:focus,
  .v-btn.v-btn-yellow.is-disabled:hover{
    color: #fff;
    background-color: #f5cf82;
    border-color: #f5cf82
  }
  .v-btn.is-disabled.outline,
  .v-btn.is-disabled.outline:focus,
  .v-btn.is-disabled.outline:hover{
    background-color: #fff;
    border-color: #e6ebf5;
    color: #b4bccc
  }
  .v-btn.v-btn-blue.is-disabled.outline,
  .v-btn.v-btn-blue.is-disabled.outline:focus,
  .v-btn.v-btn-blue.is-disabled.outline:hover{
    color: #8cc5ff;
    background-color: #ecf5ff;
    border-color: #d9ecff
  }
  .v-btn.v-btn-red.is-disabled.outline,
  .v-btn.v-btn-red.is-disabled.outline:focus,
  .v-btn.v-btn-red.is-disabled.outline:hover{
    color: #fc9999;
    background-color: #fee;
    border-color: #fedddd
  }
  .v-btn.v-btn-green.is-disabled.outline,
  .v-btn.v-btn-green.is-disabled.outline:focus,
  .v-btn.v-btn-green.is-disabled.outline:hover{
    color: #a4da89;
    background-color: #f0f9eb;
    border-color: #e1f3d8
  }
  .v-btn.v-btn-yellow.is-disabled.outline,
  .v-btn.v-btn-yellow.is-disabled.outline:focus,
  .v-btn.v-btn-yellow.is-disabled.outline:hover{
    color: #f3c569;
    background-color: #fdf5e6;
    border-color: #fbeccd
  }
  .outline:focus,
  .outline:hover{
    background: #fff;
    border-color: #409EFF;
    color: #409EFF
  }
  .round {
    border-radius: 20px;
  }
</style>
