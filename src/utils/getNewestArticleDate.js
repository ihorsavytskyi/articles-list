export const getNewestArticleDate = (articles) => {
  const newestArticleData = new Date(Math.max(...articles.map(article => new Date(article.publishDate).getTime())));

  return newestArticleData
}