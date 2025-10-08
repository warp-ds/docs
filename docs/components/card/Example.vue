<script setup>
import { wCard, wClickable, wDeadToggle } from '@warp-ds/vue';
import { ref } from 'vue';

const selected = ref(false);
const foo = ref('');

const checkModel = ref(false);
const radioModel = ref('');
</script>

<template>
  <div class="component">
    <h3 class="t4">Default Card</h3>
    <p>
      The card can have any content but it needs to at least have one interactive item.
      Here we are using the Clickable component to give clickable area the same size as the card itself.
    </p>

    <h5>with box-shadow (default)</h5>
    <div class="grid grid-cols-3 gap-24 mb-32 mt-24">
      <w-card class="full-width">
        <article class="p-16">
          <h2 class="h4 font-normal">
            <p><w-clickable @click="console.log('clicked')" class="text-left">Title</w-clickable></p>
          </h2>
        </article>
      </w-card>
      <w-card class="full-width">
        <article class="p-16">
          <h2 class="h4 font-normal">
            <p><w-clickable @click="console.log('clicked')" class="text-left">Title</w-clickable></p>
          </h2>
        </article>
      </w-card>
      <w-card class="full-width">
        <article class="p-16">
          <h2 class="h4 font-normal">
            <p><w-clickable @click="console.log('clicked')" class="text-left">Title</w-clickable></p>
          </h2>
        </article>
      </w-card>
    </div>

    <h5>without box-shadow (using the flat prop)</h5>
    <div class="grid grid-cols-3 gap-24 mb-32 mt-24">
      <w-card flat class="full-width">
        <article class="p-16">
          <h2 class="h4 font-normal">
            <p><w-clickable @click="console.log('clicked')" class="text-left">Title</w-clickable></p>
          </h2>
        </article>
      </w-card>
      <w-card flat class="full-width">
        <article class="p-16">
          <h2 class="h4 font-normal">
            <p><w-clickable @click="console.log('clicked')" class="text-left">Title</w-clickable></p>
          </h2>
        </article>
      </w-card>
      <w-card flat class="full-width">
        <article class="p-16">
          <h2 class="h4 font-normal">
            <p><w-clickable @click="console.log('clicked')" class="text-left">Title</w-clickable></p>
          </h2>
        </article>
      </w-card>
    </div>

    <h3 class="t4">Card containing multiple clickable areas</h3>
    <div class="grid grid-cols-3 gap-24 mb-24">
      <w-card class="full-width">
        <article class="p-16">
          <h2 class="h4 font-normal">
            <p><w-clickable @click="console.log('clicked')" class="text-left">Title</w-clickable></p>
          </h2>
          <a href="#" class="relative z-10">Interactive #2</a>
        </article>
      </w-card>
      <w-card class="full-width">
        <article class="p-16">
          <h2 class="h4 font-normal">
            <p><w-clickable @click="console.log('clicked')" class="text-left">Title</w-clickable></p>
          </h2>
          <a href="#" class="relative z-10">Interactive #2</a>
        </article>
      </w-card>
      <w-card class="full-width">
        <article class="p-16">
          <h2 class="h4 font-normal">
            <p><w-clickable @click="console.log('clicked')" class="text-left">Title</w-clickable></p>
          </h2>
          <a href="#" class="relative z-10">Interactive #2</a>
        </article>
      </w-card>
    </div>

    <p class="mb-32">
      The card component is meant for things like the result list items.
      You are free to use any means of layout and positioning within.
      The card itself requires an interactive item, and the Clickable component works great for that.
      If that is supplied with an href it renders as a link, otherwise it renders as a button.
    </p>

    <h3 class="t4">Toggles in cards</h3>
    <w-card :selected="checkModel" class="w-max mb-16">
      <article class="p-24 flex">
          <w-dead-toggle checkbox v-model="checkModel" :value="true" />
          <w-clickable checkbox :value="true" v-model="checkModel" label-class="ml-12 text-16">Check in a card</w-clickable>
      </article>
    </w-card>
    <div class="flex gap-10 mb-32">
      <w-card :selected="radioModel === 'foo'" class="w-max">
        <article class="p-24 flex">
          <w-dead-toggle radio v-model="radioModel" value="foo" />
          <w-clickable radio value="foo" v-model="radioModel" label-class="ml-12" name="radio-group">Radio in a card - A</w-clickable>
        </article>
      </w-card>
      <w-card :selected="radioModel === 'bar'" class="w-max">
        <article class="p-24 flex">
          <w-dead-toggle radio v-model="radioModel" value="bar" />
          <w-clickable radio value="bar" v-model="radioModel" label-class="ml-12" name="radio-group">Radio in a card - B</w-clickable>
        </article>
      </w-card>
    </div>

    <h4 class="t4">Dead toggles</h4>
    <div class="flex gap-10">
      <w-card flat class="py-4 px-12 flex items-center" :selected="foo === 'foo'">
        <w-dead-toggle radio v-model="foo" value="foo" />
        <div class="ml-12">
          <h5 class="h4 mb-0"><w-clickable radio v-model="foo" value="foo">Purchase foo</w-clickable></h5>
          <p class="mb-0 text-14">470 kr/mnd</p>
        </div>
      </w-card>
      <w-card flat class="py-8 px-12 flex items-center" :selected="foo === 'bar'">
        <w-dead-toggle radio v-model="foo" value="bar" />
        <div class="ml-12">
          <h5 class="h4 mb-0"><w-clickable radio v-model="foo" value="bar">Purchase bar</w-clickable></h5>
          <p class="mb-0 text-14">520 kr/mnd</p>
        </div>
      </w-card>
    </div>
  </div>
</template>

