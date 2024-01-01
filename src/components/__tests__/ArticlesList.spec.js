import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ArticlesList from '../ArticlesList.vue'

describe('ArticlesList', () => {
  const articlesList = [  
    {title: "Find new ways to travel north", publishDate: "2023-06-03T13:51:50.417Z", category: "news", url: "/articles/4738.html"},
    {title: "When will it become possible to use time travel in order to fix your earlier mistakes?", publishDate: "2023-06-01T12:18:10.317Z", category: "essay", url: "/articles/7256.html"},
    {title: "10 ways to write better text", publishDate: "2023-06-03T09:00:32.200Z", category: "news", url: "/articles/7247.html"},
    {title: "Weekly news", publishDate: "2023-05-29T00:23:15.276Z", category: "news", url: "/articles/1538.html"},
    {title: "In-depth travel guide for Tanzania", publishDate: "2023-05-31T11:12:43.003Z", category: "essay", url: "/articles/2594.html"},
  ]

  it('renders list of articles properly mounted', () => {
    expect(ArticlesList).toBeTruthy()
  }); 
  
  it('renders initial list of articles properly', () => {
    const wrapper = mount(ArticlesList, { 
      props: { 
        articlesList,
        limitOfNumberArticlesToDisplay: 5,
        limitOfDaysToDisplay: 7,
        currentDate: "2023-06-03T13:51:50.417Z",
        filterItems: ['news', 'essay']
      }
    });
  
    expect(wrapper.text()).toContain('Latest Updates')        
    expect(wrapper.findAll('.filter-item')).toHaveLength(2);
    expect(wrapper.findAll('.article-item')).toHaveLength(5);
  });

  it('renders initial list of articles properly when the limit days to diplsay equil 1', () => {
    const wrapper = mount(ArticlesList, { 
      props: { 
        articlesList,
        limitOfNumberArticlesToDisplay: 5,
        limitOfDaysToDisplay: 1,
        currentDate: "2023-06-03T13:51:50.417Z",
        filterItems: ['news', 'essay']
      }
    });
      
    expect(wrapper.findAll('.article-item')).toHaveLength(2);
  });

  it('renders list of users properly after filtering by value "news"', async () => {
    const wrapper = mount(ArticlesList, { 
      props: { 
        articlesList,
        limitOfNumberArticlesToDisplay: 5,
        limitOfDaysToDisplay: 7,
        currentDate: "2023-06-03T13:51:50.417Z",
        filterItems: ['news', 'essay']
      }
    });
      
    await wrapper.find('input[id=news]').setChecked();    
    expect(wrapper.findAll('.article-item')).toHaveLength(3);
  });

  it('renders list of users properly after filtering by value "essay"', async () => {
    const wrapper = mount(ArticlesList, { 
      props: { 
        articlesList,
        limitOfNumberArticlesToDisplay: 5,
        limitOfDaysToDisplay: 7,
        currentDate: "2023-06-03T13:51:50.417Z",
        filterItems: ['news', 'essay']
      }
    });
      
    await wrapper.find('input[id=essay]').setChecked();    
    expect(wrapper.findAll('.article-item')).toHaveLength(2);
  });

  it('renders the list of articles properly if set the interval to 1 day', () => {
    const wrapper = mount(ArticlesList, { 
      props: { 
        articlesList,
        limitOfNumberArticlesToDisplay: 5,
        limitOfDaysToDisplay: 1,
        currentDate: "2023-06-03T13:51:50.417Z",
        filterItems: ['news', 'essay']
      }
    });
      
    expect(wrapper.findAll('.article-item')).toHaveLength(2);
  });

  it('renders message properly if set the current date, which is not represented in any of the articles', () => {
    const wrapper = mount(ArticlesList, { 
      props: { 
        articlesList,
        limitOfNumberArticlesToDisplay: 5,
        limitOfDaysToDisplay: 1,
        currentDate: "2023-06-04T13:51:50.417Z",
        filterItems: ['news', 'essay']
      }
    });
      
    expect(wrapper.findAll('.article-item')).toHaveLength(0);
    expect(wrapper.text()).toContain('Sorry, but there are no articles available between June 4, 2023 and June 4, 2023 for all categories');
  });

  it('renders message properly if set a wrong value for property limit of days that should be display', () => {
    const wrapper = mount(ArticlesList, { 
      props: { 
        articlesList,
        limitOfNumberArticlesToDisplay: 5,
        limitOfDaysToDisplay: 0,
        currentDate: "2023-06-03T13:51:50.417Z",
        filterItems: ['news', 'essay']
      }
    });
      
    expect(wrapper.findAll('.article-item')).toHaveLength(0);
    expect(wrapper.text()).toContain('Please set correct value for property limit of days that should be display');
  });

  it('renders message properly if set a wrong value for maximum number of articles that should be display', () => {
    const wrapper = mount(ArticlesList, { 
      props: { 
        articlesList,
        limitOfNumberArticlesToDisplay: 0,
        limitOfDaysToDisplay: 7,
        currentDate: "2023-06-03T13:51:50.417Z",
        filterItems: ['news', 'essay']
      }
    });
      
    expect(wrapper.findAll('.article-item')).toHaveLength(0);
    expect(wrapper.text()).toContain('Please set correct value for property maximum number of articles that should be display');
  });
})