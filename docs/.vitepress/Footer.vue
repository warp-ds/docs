<template>
  <footer class="footer">
    <div class="footer-column logo-column">
      <div style="width:122px;">
        <WarpLogo />
      </div>
    </div>
    <div class="footer-column">
      <h3 class="footer-column-title">Collaborate</h3>
      <a class="footer-link" :href="`${baseUrl}collaborate/request-new-component`">Request new component</a>
      <a class="footer-link" :href="`${baseUrl}collaborate/request-component-changes`">Request component changes</a>
    </div>
    <div class="footer-column">
      <h3 class="footer-column-title">Help</h3>
      <a class="footer-link" :href="`${baseUrl}help/faq`">FAQ</a>
      <a class="footer-link" :href="`${baseUrl}help/support`">Support</a>
      <a class="footer-link" :href="`${baseUrl}help/report-bugs`">Report bugs/errors</a>
    </div>
  </footer>
</template>

<script setup>
const baseUrl = import.meta.env.BASE_URL;

import WarpLogo from '../src/warp-logo.svg';
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: var(--vp-c-bg);
  border-top: 1px solid var(--vp-c-gutter);
  width: 100%;
  position: relative;
  z-index: 10;
}

.footer::before,
.footer::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1;
  pointer-events: none;
}

.footer::before {
  bottom: 0;
  height: 104px;
  background: url('stars-background.svg') no-repeat center/cover;
}
/*
.footer::after {
   top: -8px;
  height: 8px;
  background: url('hero-wavy-line.svg') no-repeat center/cover;
  transform: scaleY(-1);
}
*/
.footer-column {
  flex: 1;
  margin: 0 20px;
  z-index: 2;
}

.footer-column-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  text-transform: uppercase;
  margin-bottom: 10px;
}

.footer-link {
  display: block;
  margin-bottom: 8px;
  color: var(--vp-c-text-1);
  font-size: 16px;
}

.footer-link:hover {
  text-decoration: underline;
}

.logo-column {
  display: flex;
  justify-content: flex-start;
}

/* Media Queries */
@media (min-width: 960px) {
  .has-sidebar ~ .footer {
    width: calc(100% - var(--vp-sidebar-width, 300px));
    margin-left: var(--vp-sidebar-width, 300px);
  }
}

@media (min-width: 1440px) {
  .has-sidebar ~ .footer {
    width: calc(100% - ((100% - (var(--vp-layout-max-width) - 64px)) / 2 + var(--vp-sidebar-width) - 32px));
    margin-left: calc((100% - (var(--vp-layout-max-width) - 64px)) / 2 + var(--vp-sidebar-width) - 32px);
  }
}

@media (max-width: 960px) {
  .footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-column {
    margin: 12px 0;
    text-align: left;
    width: 100%;
  }

  .footer-link {
    font-size: 14px;
  }

  .footer-column-title {
    font-size: 12px;
  }
}
</style>