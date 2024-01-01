<template>
  <div>
    {{ JSON.stringify(filterItems) }}
  </div>
</template>

<script setup>
  const props = defineProps({
    filterItems: {
      type: Array,
      required: true
    }
  })
</script>

<style scoped>

</style>