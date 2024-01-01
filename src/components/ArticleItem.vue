<template>
  <div>
    <div class="article-item">
    <a class="article-item__link"
      :href="articleItem.url"
      :title="articleItem.title"
      target="self"
    >
      <span class="article-item__title">{{ articleItem.title }}</span>
      <span class="article-item__published">{{ formatDate(articleItem.publishDate) }}</span>    
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

</style>