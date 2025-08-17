<script setup>
const props = defineProps({
  /** 'beta' | 'new-framework' | 'legacy' */
  kind: { type: String, default: 'beta' },

  /** Only used by “new-framework” message (label shown in text) */
  framework: { type: String, default: 'React 19' },

  /** Links for cross-nav between newest/legacy pages */
  latestHref: { type: String, default: '' }, // used in kind='legacy'
  legacyHref: { type: String, default: '' }, // used in kind='new-framework'

  /** Slack channel link in the Beta notice */
  slackHref: {
    type: String,
    default: 'https://sch-chat.slack.com/archives/C04P0GYTHPV'
  }
})
</script>

<template>
  <!-- Matches VitePress ::: warning markup & styles -->
  <div class="warning custom-block">
    <p class="custom-block-title">
      📣
      <span v-if="kind==='beta'">Beta</span>
      <span v-else-if="kind==='new-framework'">New framework</span>
      <span v-else-if="kind==='legacy'">Legacy</span>
      <span v-else>Note</span>
    </p>

    <!-- Beta -->
    <template v-if="kind==='beta'">
      <p>New and ready to use. Feel free to start using it and let us know if you run into any issues.</p>
      <p>
        If you encounter bugs or other issues, please report it to the WARP team:
        <a :href="slackHref" target="_blank" rel="noopener">#warp-design-system</a>.
      </p>
    </template>

    <!-- New framework (latest doc) -->
    <template v-else-if="kind==='new-framework'">
      <p>
        You’re viewing the latest version of this component, built for <strong>{{ framework }}</strong>.
      </p>
      <p v-if="legacyHref">
        On an older framework? See the <a :href="legacyHref">legacy documentation</a>.
      </p>
    </template>

    <!-- Legacy page -->
    <template v-else-if="kind==='legacy'">
      <p>
        You’re viewing the <strong>legacy</strong> version of this component.
      </p>
      <p v-if="latestHref">
        We recommend upgrading—see the <a :href="latestHref">latest documentation</a>.
      </p>
    </template>

    <!-- Optional: allow extra lines via slot -->
    <slot />
  </div>
</template>
