<template>
  <ul class="post-list">
    <li v-for="post in posts" :key="post.node.id">
      <g-link class="post" :to="post.node.path">
        <article>
          <span class="post--date">{{ post.node.date }}</span>
          <h2 class="post--title">{{ post.node.title }}</h2>
          <p class="post--description">{{ post.node.teaser }}</p>
        </article>
      </g-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["posts"],
}
</script>

<style>
.post-list {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: var(--spacing-12);
  margin-bottom: var(--spacing-52);
}

.post {
  display: block;
  background: #fff;
  box-shadow: 0px 8px 16px 0px rgb(53 41 112 / 3%);
  margin-bottom: var(--spacing-12);
  padding: var(--spacing-8);
  border-radius: var(--spacing-3);
  color: currentColor;
  text-decoration: none;
}
</style>
