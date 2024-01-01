<template>
  <div class="filter-item"
    v-for="(filterItem, index) in filterItems"
    :key="index">
    <input 
      type="checkbox"
      :id="filterItem"
      :name="filterItem" 
      :value="filterItem" 
      @change="handleFilter"/>
    <label :for="filterItem"> {{ filterItem }} </label>
  </div>
</template>

<script setup>
  const emits = defineEmits(['handleFilter']);
  const props = defineProps({
    filterItems: {
      type: Array,
      required: true
    }
  })

  const handleFilter = (e) => {
    emits('handleFilter', e.target.value)
  }
</script>

<style scoped>

</style>