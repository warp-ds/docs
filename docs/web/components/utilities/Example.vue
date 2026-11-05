<script setup>
import { ref } from 'vue';

const foo = ref('');
</script>

<template>
  <div class="component">
    <h3 class="t4">Usage of clickable Card</h3>
    <w-card style="max-width: 300px;" clickable>
      <img class="h-128 w-full object-cover rounded-tl-16" src="/images/office-warping.png" />
      <w-badge position="top-left">Ukens bolig</w-badge>
      <div class="p-16">
        <p class="text-12">DNB Eiendom</p>
        <p class="text-left">Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.</p>
        <p class="text-14  mb-4">Bøgata 25C, 0655 Oslo</p>
        <p class="font-bold my-8">52 m<span style="font-size: 10px; vertical-align: super;">2</span> Totalpris: 4 869 039 kr</p>
        <p class="text-14  mb-0">Eier (Selveier) <span class="">•</span> Leilighet <span class="">•</span> 2 soverom</p>
      </div>
    </w-card>
    <h3 class="t4 pt-16">Usage of selectable cards</h3>
    <div class="flex gap-16">
      <w-card flat :selected="foo === 'foo'" @click="foo = 'foo'">
        <div class="p-16">
          <h4 class="mb-0">Purchase foo</h4>
          <p class="mb-0 text-14">470 kr/mnd</p>
        </div>
      </w-card>
      <w-card flat :selected="foo === 'bar'" @click="foo = 'bar'">
        <div class="p-16">
          <h4 class="mb-0">Purchase bar</h4>
          <p class="mb-0 text-14">520 kr/mnd</p>
        </div>
      </w-card>
    </div>
  </div>
</template>
