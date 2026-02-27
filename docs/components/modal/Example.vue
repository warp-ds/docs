<script setup>
import { ref } from 'vue';

const modalRef = ref(null);
const imageModalRef = ref(null);

const openModal = () => {
  modalRef.value?.open();
};

const closeModal = () => {
  modalRef.value?.close();
};

const openImageModal = () => {
  imageModalRef.value?.open();
};

const closeImageModal = () => {
  imageModalRef.value?.close();
};
</script>

<template>
  <div class="component space-y-32">
    <div>
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
    <div>
      <h3 class="h4">With image</h3>
      <div class="flex gap-10">
        <w-button variant="utility" aria-haspopup="dialog" @click="openImageModal">Show modal with image</w-button>
        <w-modal ref="imageModalRef" style="--w-s-color-icon: var(--w-s-color-icon-inverted)">
          <w-modal-header slot="header" title="Look a doggo!">
            <img
              slot="top"
              style="height: 256px; width: 100%; object-fit: cover;"
              src="https://images.unsplash.com/photo-1534361960057-19889db9621e"
              alt="A really nice dog"
            />
          </w-modal-header>
          <div slot="content">
            <p>I bomb atomically, Socrates' philosophies and hypotheses can't define how I be droppin' these mockeries. Lyrically perform armed robbery, flee with the lottery, possibly they spotted me. Battle-scarred Shogun, explosion when my pen hits tremendous. Ultra-violet shine blind forensics. I inspect view through the future see millennium. Killa Beez sold fifty gold, sixty platinum.</p>
          </div>
          <w-modal-footer slot="footer">
            <w-button variant="primary" @click="closeImageModal">OK</w-button>
          </w-modal-footer>
        </w-modal>
      </div>
    </div>
  </div>
</template>
