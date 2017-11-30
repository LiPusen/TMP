<template>
  <div class="g-main">
    <div claas="g-main-line">
      <v-button>默认按钮</v-button>
      <v-button type="blue">主要按钮</v-button>
      <v-button type="red">危险按钮</v-button>
      <v-button type="green">警告按钮</v-button>
      <v-button type="yellow">成功按钮</v-button>
    </div>
    <div claas="g-main-line">
      <v-button outline>默认按钮</v-button>
      <v-button type="blue" outline>主要按钮</v-button>
      <v-button type="red" outline>危险按钮</v-button>
      <v-button type="green" outline>警告按钮</v-button>
      <v-button type="yellow" outline>成功按钮</v-button>
    </div>
    <div claas="g-main-line">
      <v-button outline round>默认按钮</v-button>
      <v-button type="blue" outline round>主要按钮</v-button>
      <v-button type="red" outline round>危险按钮</v-button>
      <v-button type="green" outline round>警告按钮</v-button>
      <v-button type="yellow" outline round>成功按钮</v-button>
    </div>
    <div claas="g-main-line">
      <v-button type="blue" size="lg" outline round>默认大小</v-button>
      <v-button type="red" size="md" outline round>中等按钮</v-button>
      <v-button type="green" size="sm" outline round>小按钮</v-button>
      <v-button type="yellow" size="xs" outline round>超小按钮</v-button>
    </div>
    <div claas="g-main-line">
      <v-button disabled>默认按钮</v-button>
      <v-button type="blue" disabled>主要按钮</v-button>
      <v-button type="red" disabled>危险按钮</v-button>
      <v-button type="green" disabled>警告按钮</v-button>
      <v-button type="yellow" disabled>成功按钮</v-button>
    </div>
    <div claas="g-main-line">
      <v-button disabled>默认按钮</v-button>
      <v-button type="blue" disabled outline>主要按钮</v-button>
      <v-button type="red" disabled outline>危险按钮</v-button>
      <v-button type="green" disabled outline>警告按钮</v-button>
      <v-button type="yellow" disabled outline>成功按钮</v-button>
    </div>
  </div>

</template>

<script>
    export default {
        data() {
            return {}
        },
        created() {

        },
        methods: {}
    }
</script>

<style scoped lang="less">

</style>
