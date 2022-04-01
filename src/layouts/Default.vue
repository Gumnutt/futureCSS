<template>
  <div class="layout">
    <header class="wrapper header">
      <strong>
        <g-link class="logo" to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/about/">About</g-link>
        <g-link class="nav__link" to="/articles/">Articles</g-link>
      </nav>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;600;700&display=swap");
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}
.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  text-decoration: none;
  font-family: "Nunito", sans-serif;
}
.nav__link {
  margin-left: 20px;
  color: black;
  text-decoration: none;
}
.nav__link.active {
  background-color: var(--yellow);
  border-radius: 9999px;
  padding: 0.3rem 0.7rem;
  font-weight: bold;
}
</style>
