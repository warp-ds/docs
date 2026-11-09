<template>
  <footer class="footer">
    <div class="footer-column logo-column">
      <div class="footer-logo">
        <WarpLogo />
      </div>
    </div>
    <div class="footer-column">
      <h3 class="footer-column-title">Collaborate</h3>
      <a class="footer-link" :href="`${baseUrl}about/help/requests/new-component/`">Request new component</a>
      <a class="footer-link" :href="`${baseUrl}about/help/requests/component-changes/`">Request component changes</a>
    </div>
    <div class="footer-column">
      <h3 class="footer-column-title">Help</h3>
      <a class="footer-link" :href="`${baseUrl}about/help/faq/`">FAQ</a>
      <a class="footer-link" :href="`${baseUrl}about/help/support/`">Support</a>
      <a class="footer-link" :href="`${baseUrl}about/help/report-bugs/`">Report bugs/errors</a>
    </div>
  </footer>
</template>

<script setup>
const baseUrl = import.meta.env.BASE_URL;

import WarpLogo from '../src/warp-logo.svg';
</script>

<style scoped>
/* Quiet footer: the logo on the left, two link columns, aligned with the content area (not the sidebar) */
.footer {
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  width: 100%;
  padding: 40px 24px 48px;
  border-top: 1px solid var(--vp-c-divider);
  background-color: #ffffff;
  overflow: hidden;
}

html.dark .footer {
  background-color: var(--vp-c-bg-alt);
}

/* faint star field from the Warp brand assets */
.footer::before {
  content: '';
  position: absolute;
  inset: auto 0 0;
  height: 104px;
  background: url('/stars-background.svg') no-repeat center/cover;
  opacity: 0.6;
  pointer-events: none;
}

.footer-column {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.footer-logo {
  width: 96px;
}

.footer-column-title {
  margin: 0 0 4px;
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  color: var(--vp-c-text-1);
}

.footer-link {
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  transition: color var(--warp-duration) var(--warp-ease);
}

.footer-link:hover {
  color: var(--vp-c-brand-1);
}

.footer-link:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
  border-radius: 4px;
}

@media (min-width: 640px) {
  .footer {
    grid-template-columns: 2fr 1fr 1fr;
    padding: 48px 48px 56px;
  }
}

@media (min-width: 960px) {
  .has-sidebar ~ .footer {
    width: calc(100% - var(--vp-sidebar-width, 300px));
    margin-left: var(--vp-sidebar-width, 300px);
  }
}
</style>
