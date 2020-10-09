<template>
  <div class="content-wrapper">
    <div class="wrapper">
      <p class="disclaimer">{{$t('HOME.description')}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.disclaimer {
  width: 700px;
  max-width: 100%;
  padding: 20px;
}
</style>
