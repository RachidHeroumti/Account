<template>
  <div class="card--block--container w-f p-3 p-r">
        <span class="fs-4 fw-b px-2">{{title}}</span>
        <div class="d-f ae-c fw-w jc-sb"><slot/></div>
  </div>
</template>

<script>
export default {
    props:{title:{type:String,default:''},width:{type:Number,default:12}}
}
</script>

<style lang="scss" scoped>
    .card--block--container{background-color:#f6f6f691;border-radius:3px;}
</style>