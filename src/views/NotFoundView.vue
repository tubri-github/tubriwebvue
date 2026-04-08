<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <router-link to="/">Back to Home</router-link>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: 2rem;
}

.not-found h1 {
  font-size: 6rem;
  font-weight: 700;
  margin: 0;
  color: #1a5632;
}

.not-found p {
  font-size: 1.25rem;
  color: #555;
  margin: 1rem 0 2rem;
}

.not-found a {
  color: #1a5632;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 2px solid #1a5632;
  padding-bottom: 2px;
}

.not-found a:hover {
  opacity: 0.7;
}
</style>