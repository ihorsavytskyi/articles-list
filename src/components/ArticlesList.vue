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
            v-for="(articleItem, index) in articleItems"
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
  import { getNewestArticleDate } from "../utils/getNewestArticleDate";
  import { getFirstDateForPeriodToDisplay } from "../utils/getFirstDateForPeriodToDisplay"

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
  const currentDate = (props.currentDate !== '') ? new Date(props.currentDate) : getNewestArticleDate(props.articlesList);
  console.log(currentDate)

  const articleItems = computed(() => {
    let articles = props.articlesList;

    /*get articles for chosen period*/
    articles = articles.filter(article => new Date(article.publishDate) >= getFirstDateForPeriodToDisplay(currentDate, props.limitOfDaysToDisplay) && new Date(article.publishDate) <= new Date(currentDate))

    /*get articles by chosen filter*/
    if(activatedFilters.value.length) {
      articles = articles.filter(article => activatedFilters.value.includes(article.category));
    }  
    
    /*get articles with the sorting by the date of publishing*/
    articles = articles.sort((article1, article2) => {      
      return new Date(article2.publishDate) - new Date(article1.publishDate)
    })

    /*get articles according to limit of number article to display*/
    articles = articles.slice(0, props.limitOfNumberArticlesToDisplay);    
    return articles;
  })

  const handleFilter = (filter) => {
    if(activatedFilters.value.includes(filter)) {
      return activatedFilters.value.splice(activatedFilters.value.indexOf(filter), 1)
    }

    return activatedFilters.value.push(filter)
  }

  console.log(getFirstDateForPeriodToDisplay(currentDate, props.limitOfDaysToDisplay))


</script>

<style scoped>
  .articles-list {
    display: block;
    width: 100%;
    margin: 0 auto;
    max-width: 500px;
  }

  .articles-list__title {    
    text-align: center;
  }

  .articles-list__container {    
    width: auto;
    max-width: 100%;
    padding: 20px 10px;
    border: 1px solid #dfdfdf;
    box-shadow: 0 0 10px 0px rgba(0,0,0,0.2)
  }

  .articles-list__filters {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    gap: 20px;
  }  

  .article-list__items{
    display: grid;
    gap: 5px;
  }
</style>