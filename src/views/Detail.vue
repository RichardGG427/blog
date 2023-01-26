<template>
  <div class="blog-content-box">
    <div class="wrapper">
      <h1 class="title">nodejs</h1>
      <div class="time">
        <span class="date"> <i class="iconfont icon-date"></i>26.1.2023 </span>
      </div>
      <div class="detail">
        <mavon-editor
          v-model="content"
          defaultOpen="preview"
          :toolbarsFlag="false"
          :subfield="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
