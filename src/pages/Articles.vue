<template>
  <Layout>
    <h1>Articles</h1>
    <p>This is the blog page.</p>

    <ItemList :posts="$page.posts.edges" />
  </Layout>
</template>

<script>
import ItemList from "~/components/ItemList.vue"

export default {
  metaInfo: {
    title: "Articles",
  },
  components: {
    ItemList,
  },
}
</script>

<page-query>
  query {
    posts: allArticlePost {
      edges {
        node {
          id
          title
          date (format: "MMMM D, YYYY")
          path
          teaser
        }
      }
    }
  }
</page-query>
