<template>  
  <ArticlesList
    :articlesList="articlesList"
    :isLoading="isLoading"
    :limitOfNumberArticlesToDisplay="limitOfNumberArticlesToDisplay"
    :limitOfDaysToDisplay="limitOfDaysToDisplay"
    :currentDate="currentDate"
    :filterItems="filterItems"
  />
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import ArticlesList from "./components/ArticlesList.vue";

  const articlesList = ref([]);
  const isLoading = ref(true);
  const limitOfNumberArticlesToDisplay = 5;
  const limitOfDaysToDisplay = 7;
  const currentDate = "2023-06-03T13:51:50.417Z";
  const filterItems = ['news', 'essay'];

  onMounted(async () => {
    try {
      articlesList.value = await window.LATEST_ARTICLES;
    } catch(e) {
      console.log(e);
    } finally {
      isLoading.value = false;
    }    
  })
</script>