<script setup>
const pages = [{
  title: "Tokens",
  description: "Introduction to Warp tokens, our structure, supported brands and a token overview.",
  href: "tokens/intro",
},
{
  title: "CSS classes",
  description: "UnoCSS classes for layout and styling on web.",
  href: "css-classes/unocss",
},
{
  title: "Illustrations",
  description: "Figma links to our different brands' illustration libraries.",
  href: "illustrations/",
},
{
  title: "Typography",
  description: "Guidelines on UX Writing, font styles and links to our brand fonts.",
  href: "typography/",
},
{
  title: "Accessibility",
  description: "Requirements, accessibility playbook and useful Figma plugins.",
  href: "accessibility/",
},
{
  title: "Brands",
  description: "Supported brands and brand guidelines.",
  href: "brands/",
},
{
  title: "Data visualization",
  description: "Getting started, chart types, color usage and success criteria.",
  href: "data-visualization/introduction/",
},
{
  title: "Elevation",
  description: "Elevation as a concept, the basics and surface type overview.",
  href: "elevation/",
},
{
  title: "Dark mode",
  description: "Support in WARP and guidance for switching modes in Figma.",
  href: "dark-mode",
},
{
  title: "Motion",
  description: "Guidelines for motion.",
  href: "motion/",
}]
</script>

# Foundations
Foundations are the visual components essential for crafting captivating end-to-end user experiences.

<cards class="grid grid-cols-1 sm:grid-cols-2 gap-12">
  <card
    v-for="page in pages"
    :key="page.title"
    class="flex flex-col border border-gray-200 p-4 rounded-md shadow-sm"
  >
    <h3 class="h4 text-m! static! mt-16! mx-16!">
      <a
        :href="page.href"
        class="block before:content-empty before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 focus:outline-0"
      >
        {{ page.title }}
      </a>
    </h3>
    <p class="m-16! text-s">{{ page.description }}</p>
  </card>
</cards>