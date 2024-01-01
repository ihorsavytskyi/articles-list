<template>
  <div>
    {{ JSON.stringify(articleItem) }}
  </div>
</template>

<script setup>
  const props = defineProps({
    articleItem: {
      type: Object,
      required: true
    }
  })
</script>

<style scoped>

</style>