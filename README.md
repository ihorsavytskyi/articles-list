# ArticlesList Component

Description:
The ArticlesList is a frontend component responsible for displaying a list of latest published articles/pages. 

## Key Features:
- The component displays a list of recently published articles/pages on a website;
- The entries are sorted by publication date, descending (newest at the top);
- Each of item includes title and published date of article/page, and is a URL link to current article/page;
- The component display only pages which have been published less than 7 days ago from current data/date of last pablished article/page or date predefined by user (number of days can be change as a entry property);
- The component allows you to filter content according to the selected filter value (default categories for filtering are news and essay). If the value of the categories for filtering is not passed as an input parameter, then it will be obtained based on the value of the categories of the list of published articles/pages; 
- Initially, the component displays articles of all categories without applying filtering
- The component has responsive design.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
