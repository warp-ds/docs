<template>
  <a :href="href" class="card">
    <h3 class="title">{{ title }}</h3>
    <p v-if="excerpt" class="excerpt" v-html="excerpt"></p>
    <p class="date">{{ new Date(date).toDateString() }}</p>
  </a>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
    border: 1px solid var(--vp-c-border);
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    color: var(--vp-c-text-1);
    display: block;
    padding: 1.5rem;
    position: relative;
    text-decoration: none;
    transition: box-shadow .1s ease;
    width: 100%;
}
a {
  color: inherit;
  text-decoration: inherit;
}

.card:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
  transition: ease-in-out 0.2s all;
}

.flex {
  display: flex;
}

.p-12 {
  padding: 1.2rem;
}

.media {
  width: 45%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.details {
  margin-left: 1.2rem;
}

.title {
  margin-top: 0.5rem;
}
</style>
