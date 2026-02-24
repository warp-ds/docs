<script setup>
import { ref } from 'vue';

const modalRef = ref(null);

const openModal = () => {
  if (modalRef.value) {
    modalRef.value.show = true;
  }
};

const closeModal = () => {
  if (modalRef.value) {
    modalRef.value.show = false;
  }
};
</script>

<template>
  <div class="component">
    <h3 class="h4">Default</h3>
    <div class="flex gap-10">
      <w-button variant="utility" aria-haspopup="dialog" @click="openModal">Show modal</w-button>
      <w-modal ref="modalRef">
        <w-modal-header slot="header" title="Hello Warp!"></w-modal-header>
        <div slot="content">
          <h1 class="h4 mb-16">This is a title for the content area</h1>
          <p>Life as a shorty shouldn't be so rough. Behold the bold soldier control the globe slowly, proceeds to blow, swinging swords like Shinobi. The game of chess, is like a swordfight, you must think first before you move. My beats travel like a vortex through your spine, to the top of your cerebral cortex. I smoke on the mic like smoking Joe Frazier, the hell raiser, raising hell with the flavor.</p>
          <p>I breaks it down to the bone gristle, Ill speaking Scud missile heat seeking, Johnny Blazing. Protect Ya Neck, my sword still remain imperial before I blast the mic, RZA scratch off the serial. Shackling the masses with drastic rap tactics, graphic displays melt the steel like blacksmiths.</p>
        </div>
        <w-modal-footer slot="footer">
          <w-button variant="primary" @click="closeModal">Click me</w-button>
        </w-modal-footer>
      </w-modal>
    </div>
  </div>
</template>
