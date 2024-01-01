<template>
  <div class="articles-list">
    <h2 class="articles-list__title">Latest Updates</h2>
    <div class="articles-list__container">
      <template v-if="isLoading">
        <p class="preloader">Loading...</p>
      </template>
      <template v-else>
        <!--FiltersList-->
        <div class="articles-list__filters">          
          <FiltersList
            :filterItems="filterItems"
            @handleFilter="handleFilter"        
          />
        </div>
        <p> {{ JSON.stringify(activatedFilters) }} </p>
        <!--ArticlesList-->         
        <div class="article-list__items">             
          <ArticleItem
            v-for="(articleItem, index) in articlesList"
            :articleItem="articleItem"
            :key="index"
          />     
        </div>
      </template>      
    </div>   
  </div>
</template>

<script setup>
  import { ref, computed} from "vue";
  import FiltersList from "../components/FilterList.vue";
  import ArticleItem from "../components/ArticleItem.vue";

  const props = defineProps({
    articlesList: {
      type: Array,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    },
    limitOfNumberArticlesToDisplay: {
      type: Number,
      required: true
    },
    limitOfDaysToDisplay: {
      type: Number,
      required: true
    },
    currentDate: {
      type: String
    },
    filterItems: {
      type: Array
    }
  })

  const activatedFilters = ref([]);

  const handleFilter = (filter) => {
    if(activatedFilters.value.includes(filter)) {
      return activatedFilters.value.splice(activatedFilters.value.indexOf(filter), 1)
    }

    return activatedFilters.value.push(filter)
  }

</script>

<style scoped>

</style>