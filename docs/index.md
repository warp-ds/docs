---
layout: home
---

<script setup>
const baseUrl = import.meta.env.BASE_URL
import ClassesCard from './src/css-classes-card.svg';
import IconsCard from './src/icons-card.svg';
import ColorsCard from './src/colors-card.svg';
import TokensCard from './src/tokens-card.svg';
import heroSVG from './src/warp-hero.svg';
import FoundationsSVG from './src/foundations.svg';
import CompSVG from './src/components.svg';
import PatternsSVG from './src/patterns.svg';
const cardData = {
  CardType1: [
    {
      title: 'CSS classes',
      href: 'foundations/css-classes/unocss',
      image: { component: ClassesCard, alt: 'A paper with two curly braces.' },
      description: 'Explore how to use pre-defined utility-first CSS classes',
    },
    {
      title: 'Icons',
      href: 'components/icons',
      image: { component: IconsCard, alt: 'Three talk bubbles that are smiling and have closed eyes' },
      description: 'Browse our library of UI icons',
    },
    {
      title: 'Colors',
      href: 'foundations/css-classes/background-color#quick-reference',
      image: { component: ColorsCard, alt: 'Two abstract shapes in grey and black colors, one bigger than the other' },
      description: 'Get quick access to predefined color palettes for backgrounds, text, and border',
    },
    {
      title: 'Tokens',
      href: 'foundations/tokens/intro/',
      image: { component: TokensCard, alt: 'Two abstract shapes in grey and black colors, one bigger than the other' },
      description: 'Discover design tokens for managing color, typography, and spacing',
    },
  ],
  CardType2: [
    {
      title: 'Foundations',
      description: 'Guidelines for colour, typography, icons, illustrations, and more.',
      href: 'foundations',
      image: { component: FoundationsSVG, alt: 'Icon representing foundations.' },
    },
    {
      title: 'Components',
      description: 'Elements that can be combined to build great experiences.',
      href: 'components',
      image: { component: CompSVG, alt: 'Icon representing components.' },
    },
    {
      title: 'Patterns',
      description: 'Guidelines and recommendations for solving recurring user tasks.',
      href: 'patterns',
      image: { component: PatternsSVG, alt: 'Icon representing patterns.' },
    },
  ],
};
</script>

<div class="VPHero has-image VPHomeHero">
  <div class="container">
    <div class="main">
      <h1 class="name"><span class="clip">Vend’s Design System</span></h1>
      <p class="tagline">Design, build and ship coherent experience with WARP</p>
      <div class="actions">
        <div class="action">
          <a class="vp-font-size-4 brand" href="get-started">Get Started →</a>
        </div>
      </div>
    </div>
    <div class="image">
      <div class="image-container">
        <heroSVG class="VPImage image-src" />
      </div>
    </div>
  </div>
</div>

<!-- Cards for CardType2 -->
<cards class="cards cols3to1">
  <card v-for="card in cardData.CardType2" :key="card.title" class="card type2">
    <div>
      <component :is="card.image.component" :aria-label="card.image.alt" style="height:86px;width:86px;margin:0 auto 20px;" />
      <h2 class="card-title vp-font-size-2">{{ card.title }}</h2>
      <p class="card-description">{{ card.description }}</p>
      <a :href="card.href" class="card-link">Explore {{ card.title.toLowerCase() }} <span class="vpi-arrow-right link-text-icon"></span></a>
    </div>
  </card>
</cards>

<!-- Cards for CardType1 -->
<cards class="cards cols4to1">
  <card v-for="card in cardData.CardType1" :key="card.title" class="card type1">
    <h3 class="card-title custom-heading">
      <a :href="card.href" class="card-link">{{ card.title }}</a>
    </h3>
    <div class="card-image">
      <component :is="card.image.component" :aria-label="card.image.alt" class="card-image" />
    </div>
    <p class="card-description">{{ card.description }}</p>
  </card>
</cards>

<div class="banner-container">
  <div class="banner-content-wrapper">
    <div class="banner-icon-column">
      <img src="/collaborate-icon.svg" alt="Collaborate icon" class="banner-icon"/>
    </div>

  <div class="banner-column">
    <h2 class="banner-title">Collaborate</h2>
    <p class="banner-content">Contributing to the WARP design system, requesting new components or adjustments to existing ones.</p>
    <a href="collaborate/request-new-component" class="banner-link collaborate">
      Collaborate with us
      <span class="vpi-arrow-right link-text-icon"></span>
    </a>
  </div>

  <div class="banner-icon-column">
      <img src="/get-in-touch-icon.svg" alt="Get in touch icon" class="banner-icon"/>
   </div>

   <div class="banner-column">
      <h2 class="banner-title">Get in touch</h2>
      <p class="banner-content">Need help or support? The best way to get in touch with the team is through Slack.</p>
      <div class="slack-section">
        <img src="/slack-icon.svg" alt="Slack icon" width="24px" class="slack-icon"/>
        <a href="https://sch-chat.slack.com/archives/C04P0GYTHPV" target="_blank" class="banner-link">#warp-design-system</a>
      </div>
    </div>
  </div>
</div>

<style scoped>
/* Cards styling */
.cards {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 640px) {
  .cards.cols4to1{
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (min-width: 960px) {
  .cards.cols2to1{
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 960px) {
  .cards.cols3to1{
    grid-template-columns: repeat(3, 1fr);
  }
}
/* Title setups, these should probably live in custom.css if we wanna reuse these */
 .vp-font-size-1 {
  font-size: var(--vp-font-size-1);
  line-height: var(--vp-line-height-1);
}

 .vp-font-size-2 {
  font-size: var(--vp-font-size-2);
  line-height: var(--vp-line-height-2);
}
.vp-font-size-3 {
  font-size: var(--vp-font-size-3);
  line-height: var(--vp-line-height-3);
}
.vp-font-size-4 {
  font-size: var(--vp-font-size-4);
  line-height: var(--vp-line-height-4);
}

.card{
  display: flex;
  position: relative;
  xborder: 1px solid var(--vp-c-card-border, transparent);
}
.card:hover{
  x--vp-c-card-border: var(--vp-c-brand-1)
}
.card.type1 {
  flex-direction: column;
}
.card.type2{
  flex-direction: row;
  background-color: var(--vp-c-bg-soft);
  justify-content: space-between;
  align-items: center;
  min-height: 280px;
  gap: 20px;
  padding: 40px;
}

.card-title {
  position: static;
  border-top: 0;
  margin-top: 0;
  padding-top: 0;
}
.card.type1 .card-title{
  padding: 16px 16px 0 16px;
}
.card.type1 .card-description{
  padding: 0px 16px 16px 16px;
}
.card.type2 .card-image svg {
  width: 100%;
  max-width: 100%;
  max-height: 220px
}
.card.type1 .card-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height:150px;
}

.card.type1 .card-image svg {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
}
/* need to override the h2 coming from md styling */
h2.card-title {
  border-top: 0;
}
.card-link {
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: bold;
  display: block;
}

.card-link::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.card.type1 .card-image {
  order: -1;
  background-color: var(--vp-c-bg-soft);
}

/* Banner styling */
.vp-doc.container .banner-container {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  padding: 0 23px;
}


.banner-container {
  background-color: var(--vp-c-bg-soft);
}

.banner-content-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 40px;
  padding-bottom: 40px;
  width: 100%;
  gap: 8px;
  align-items: start;
}

@media (min-width: 640px) {
  .banner-content-wrapper {
    padding: 40px 20px;
    grid-template-columns: .25fr 1.75fr .25fr 1.75fr;
  }
}

@media (min-width: 960px) {
  .banner-content-wrapper {
    padding: 40px 112px;
  }
}

@media (min-width: 1600px) {
  .banner-content-wrapper {
    padding: 40px 213px;
  }
}

@media (min-width: 1800px) {
  .banner-content-wrapper {
    padding: 40px 335px;
  }
}

.banner-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.banner-icon-column {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 640px) {
  .banner-icon-column {
    margin-top: 10px;
  }
}

.banner-icon {
  width: 60px;
  height: 60px;
}

.banner-title {
  margin: 0;
  border-top: none;
  font-size: 36px;
  font-weight: 700;
}

.banner-content {
  font-size: 18px;
}

@media (min-width: 960px) {
  .banner-content {
    max-width: 40ch;
  }
}

.vp-doc p {
  margin-top: 6px;
}


.vpi-arrow-right::after {
  content: '→';
  font-size: 16px;
  margin-left: 8px;
  vertical-align: middle;
  display: inline-block;
}

.banner-link {
  margin-top: 16px;
  text-decoration: none;
  color: var(--vp-c-brand-1);
}

.banner-link.collaborate {
  text-decoration: underline;
}

.banner-link:hover {
  text-decoration: underline;
}

.slack-section {
  display: flex;
  align-items: center;
}

.slack-icon {
  margin-right: 6px;
  align-self: flex-end;
}

.VPHero {
  margin-top: calc((var(--vp-nav-height) + var(--vp-layout-top-height, 0px)) * -1);
  padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 48px) 0px 24px;
  position: relative; /* Ensure the pseudo-element is positioned relative to this */
}

.VPHero::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100px;
  right: -100px;
  bottom: 0;
  background-image: url('/stars-background.svg');
  background-repeat: repeat-x;
  background-position: bottom;
  z-index: -1;
}

.VPHero.has-image .container {
  text-align: center;
}

.VPHero .container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1152px;
}

.VPHero .main {
  position: relative;
  z-index: 10;
  order: 2;
  flex-grow: 1;
  flex-shrink: 0;
}

.VPHero.has-image .name,
.VPHero.has-image .text {
  margin: 0 auto;
}

.VPHero .name {
  color: var(--vp-home-hero-name-color);
}

.VPHero .name,
.VPHero .text {
  max-width: 392px;
  letter-spacing: -0.4px;
  line-height: 40px;
  font-size: 32px;
  font-weight: 700;
  white-space: pre-wrap;
}

.VPHero .clip {
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: var(--vp-home-hero-name-color);
}

.VPHero.has-image .tagline {
  margin: 0 auto;
}

.VPHero .tagline {
  padding-top: 8px;
  max-width: 392px;
  line-height: 28px;
  font-size: 18px;
  font-weight: 500;
  white-space: pre-wrap;
  color: var(--vp-c-text-2);
}

.VPHero.has-image .actions {
  justify-content: center;
}

.VPHero .actions {
  display: flex;
  flex-wrap: wrap;
  margin: -6px;
  padding-top: 24px;
}

.VPHero .action {
  flex-shrink: 0;
  padding: 6px;
}

.VPHero .image {
  order: 1;
  margin: -76px -24px -48px;
}

.VPHero .image-container {
  position: relative;
  margin: 0 auto;
  width: 320px;
  height: 320px;
}

.VPHero .image-src {
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  max-width: 100%;
  width: 100%;
  transform: translate(-50%, -50%);
}

@media (min-width: 640px) {
  .VPHero {
    padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 80px) 0px 24px;
  }

  .VPHero .name,
  .VPHero .text {
    max-width: 576px;
    line-height: 56px;
    font-size: 48px;
  }

  .VPHero .tagline {
    padding-top: 12px;
    max-width: 576px;
    line-height: 32px;
    font-size: 20px;
  }

  .VPHero .actions {
    padding-top: 32px;
  }

  .VPHero .image {
    margin: -108px -24px -48px;
  }

  .VPHero .image-container {
    width: 392px;
    height: 392px;
  }

}

@media (min-width: 960px) {
  .VPHero {
    padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 80px) 0;
  }

  .VPHero.has-image .container {
    text-align: left;
  }

  .VPHero .container {
    flex-direction: row;
  }

  .VPHero.has-image .main {
    max-width: 592px;
  }

  .VPHero .main {
    order: 1;
    width: calc((100% / 3) * 2);
  }

  .VPHero.has-image .name,
  .VPHero.has-image .text {
    margin: 0;
  }

  .VPHero .name,
  .VPHero .text {
    line-height: 64px;
    font-size: 56px;
  }

  .VPHero.has-image .tagline {
    margin: 0;
  }

  .VPHero .tagline {
    line-height: 36px;
    font-size: 24px;
  }

  .VPHero.has-image .actions {
    justify-content: flex-start;
  }

  .VPHero .image {
    flex-grow: 1;
    order: 2;
    margin: 0;
    min-height: 100%;
  }

  .VPHero .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transform: translate(-32px, -32px);
  }

  .VPHero .image-bg {
    max-width: 495px;
    width: 100%;
  }


}

.dark .VPHero .image-bg {
  --vp-home-hero-image-background-image: linear-gradient(135deg, rgba(4, 121, 144, 0.25) 0%, rgba(138, 105, 156, 0.25) 100%);
  --vp-home-hero-image-filter: blur(32px);
}

</style>
