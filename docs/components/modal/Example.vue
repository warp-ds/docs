<script setup>
import { wButton, wModal } from '@warp-ds/vue';
import { computed, ref, watch } from 'vue';

const showLeft = ref(false);
const showModal = ref(false);

const heightToggle = ref(false);
const demoStyles = computed(() => ({
  '--w-modal-min-height': heightToggle.value ? '100%' : '64%',
  '--w-modal-max-height': '72%',
}));
const changeHeight = () => {
  heightToggle.value = !heightToggle.value;
};
</script>

<template>
  <div class="component">
    <h3 class="h4">Default</h3>
    <div class="flex gap-10">
      <w-button utility @click="showModal = true">Show modal</w-button>
      <w-modal title="Hello Warp!" :style="demoStyles" :left="showLeft" :right="{ 'aria-label': 'Close' }" @dismiss="showModal = false" v-model="showModal" @right="showModal = false">
        <div class="space-x-8">
          <w-button utility @click="changeHeight" small class="mb-32">Modify height</w-button>
          <w-button utility @click="showLeft = !showLeft" small class="mb-32">Toggle the back-button</w-button>
        </div>
        <div v-once>
          <h1 class="h4 mb-16">This is a title for the content area</h1>
          <p>Life as a shorty shouldn't be so rough. Behold the bold soldier control the globe slowly, proceeds to blow, swinging swords like Shinobi. The game of chess, is like a swordfight, you must think first before you move. My beats travel like a vortex through your spine, to the top of your cerebral cortex. I smoke on the mic like smoking Joe Frazier, the hell raiser, raising hell with the flavor.</p>
          <p>I breaks it down to the bone gristle, Ill speaking Scud missile heat seeking, Johnny Blazing. Protect Ya Neck, my sword still remain imperial before I blast the mic, RZA scratch off the serial. Shackling the masses with drastic rap tactics, graphic displays melt the steel like blacksmiths. Perpendicular to the square we stay in gold like Flair, escape from your dragon's lair in particular. Shame on you when you stepped through to The Ol Dirty Bastard straight from the Brooklyn Zoo. Protect Ya Neck, my sword still remain imperial before I blast the mic, RZA scratch off the serial.</p>
          <p>Handcuffed in the back of a bus, forty of us. Rae got it going on pal, call me the rap assassinator, rhymes rugged and built like Schwarzenegger. My beats travel like a vortex through your spine, to the top of your cerebral cortex. Well I'm a sire, I set the microphone on fire, rap styles vary and carry like Mariah.</p>
          <p>Small change, they putting shame in the game. My beats travel like a vortex through your spine, to the top of your cerebral cortex. Shame on you when you stepped through to The Ol Dirty Bastard straight from the Brooklyn Zoo. I come rough, tough like an Elephant tusk. I bomb atomically Socrates' philosophies and hypothesis can't define how I be dropping these mockeries. The rebel, I make more noise than heavy metal. Cash rules everything around me, dollar dollar bill, ya'll. If what you say is true, the Shaolin and the Wu-Tang could be dangerous.</p>
          <p>Perpendicular to the square we stay in gold like Flair, escape from your dragon's lair in particular. The game of chess, is like a swordfight, you must think first before you move. Leave it up to me while I be livin' proof I smoke on the mic like smoking Joe Frazier, the hell raiser, raising hell with the flavor. Step through your section with the Force like Luke Skywalker, rhyme author, orchestrate mind torture. Feeling mad hostile, ran the apostle, flowing like Christ when I speak the gospel. Well I'm a sire, I set the microphone on fire, rap styles vary and carry like Mariah. I grew up on the crime side, the New York Times side, Stayin' alive was no jive.</p>
        </div>
        <template #footer>
          <w-button primary @click="showModal = false">Click me</w-button>
        </template>
      </w-modal>
    </div>
  </div>
</template>
