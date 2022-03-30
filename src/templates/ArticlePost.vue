<template>
  <Layout>
    <article>
      <header>
        <span class="post--date">{{ $page.post.date }}</span>
        <h1 class="header--title">{{ $page.post.title }}</h1>

        <p>
          <i>{{ $page.post.timeToRead }}min to read</i>
        </p>
      </header>

      <main class="wrapper content" v-html="$page.post.content"></main>
    </article>
  </Layout>
</template>

<style>
article > header {
  text-align: center;
}

.content {
  --font-size: var(--text-xl);
  --line-height: var(--leading-relaxed);
  --rhythm: calc(var(--font-size) * var(--line-height));
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, calc(var(--rhythm) * 1)) minmax(0, 54ch) minmax(0, calc(var(--rhythm) * 1)) minmax(0, 1fr);
  font-size: var(--font-size);
  line-height: var(--line-height);
  padding-bottom: var(--spacing-40);
}
.content > *:not(hr) {
  grid-column: 3;
}
.content > * + * {
  margin-top: var(--rhythm);
}
.content p {
  color: var(--gray-700);
}
hr {
  grid-column: 2/5;
}
</style>

<page-query>
query Post ($path: String!) {
   post: articlePost (path: $path) {
    id
    title
    date (format: "MMMM D, YYYY")
    timeToRead
    content
    teaser
  }
}
</page-query>
