<template>
  <div>
    <div class="article-item">
    <a class="article-item__link"
      :href="articleItem.url"
      :title="articleItem.title"
      target="self"
    >
      <span class="article-item__title">{{ articleItem.title }}</span>
      <span class="article-item__data">{{ formatDate(articleItem.publishDate) }}</span>    
    </a>
  </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    articleItem: {
      type: Object,
      required: true
    }
  })

  const formatDate = (value) => {
    return new Date(value).toLocaleString("en-US", {
      month: "long",
      day: "numeric"
    })
  }
</script>

<style scoped>
  .article-item__link {        
    display: grid;  
    gap: 0.5rem;
    grid-template-columns: auto max-content;
    text-decoration: none;
    color: inherit;
    padding: 5px;
    font-size: 1.2rem
  } 
  
  .article-item__link:hover,
  .article-item__link:focus {
    background: #efefef;
    cursor: pointer;
  }

  .article-item__title {
    overflow: hidden;
    position: relative;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical
  }

  .article-item__data {    
    color: grey;
  }
</style>