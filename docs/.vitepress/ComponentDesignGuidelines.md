<script setup>
const props = defineProps({
  name: String,
  link: String,
  links: Array
});
</script>
### Design Guidelines

<p>
  See Figma: <a v-if="link" :href="link" target="_blank">{{ name }}</a>
  <span v-else v-for="item in links" :key="item.name"><br /><a :href="item.link" target="_blank">{{ item.name }}</a></span>
</p>