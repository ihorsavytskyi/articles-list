<template>
  <div class="filter-item"
    v-for="(filterItem, index) in filtersList"
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
    filtersList: {
      type: Array,
      required: true
    }
  })

  const handleFilter = (e) => {
    emits('handleFilter', e.target.value)
  }
</script>

<style scoped>
  .filter-item {
    font-size: 1.2rem;
    gap: 0.3rem;
    display: flex;
    text-transform: capitalize;
  }
</style>