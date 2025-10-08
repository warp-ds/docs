<script setup>
import { computed } from 'vue';
import * as apiTable from '../api-table.js';
import OtherTable from './OtherTable.vue';
import PropsTable from './PropsTable.vue';

const props = defineProps({
  type: 'vue' | 'react' | 'elements',
  component: String,
  headerLevel: {
    type: Number,
    default: 4,
  },
});
const data = computed(() => apiTable[props.type || 'react'][props.component]);
</script>

<template>
  <div class="api-table">
    <div v-if="data.required?.length">
      <component :is="`h${headerLevel}`">Required props</component>
      <other-table :headers="['name', 'type', 'default', 'notes']" :data="data.required" />
    </div>    
    <div v-if="data.props?.length">
      <component :is="`h${headerLevel}`">{{data.title || 'Optional Props'}}</component>
      <props-table v-bind="data" />
    </div>
    <div v-if="data.variants?.length">
      <component :is="`h${headerLevel}`">Variants</component>
      <other-table :headers="['main', 'combination', 'notes']" :data="data.variants" />
    </div>
    <div v-if="data.slots?.length">
      <component :is="`h${headerLevel}`">Slots</component>
      <other-table :headers="['name', 'use']" :data="data.slots" />
    </div>
    <div v-if="data.events?.length">
      <component :is="`h${headerLevel}`">Events</component>
      <other-table :headers="['name', 'when']" :data="data.events" />
    </div>
    <other-table v-else-if="data.titles" :headers="data.titles" :data="data.rows" />
  </div>
</template>

<style lang="scss">
.api-table {
  & > * ~ * {
    margin-top: 32px;
  }

  h5 {
    font-size: 14px;
    margin-top: 16px;
  }

  .docs-table {
    width: 100%;
    display: table;

    @media (max-width: 640px) {
      display: block;
    }

    /* we emit p tags because of markdown, for now we just nuke the margin instead of cleaning up the tag */
    p {
      margin: 0;
    }

    tr, th, td {
      border: none;
    }

    thead {
      border-bottom: 1px solid var(--vp-c-divider);

      tr {
        text-transform: uppercase;
        text-align: left;
        color: var(--vp-c-text-2);
      }

      th {
        font-size: 12px;
        padding: 8px 24px;
      }
    }

    tbody {
      vertical-align: top;

      td {
        padding: 16px 24px;
        vertical-align: baseline;

        &:first-of-type {
          font-weight: bold;
        }
      }
    }
    tr {
      font-size: 14px;
    }
    th {
      background: none;
    }
  }

  .annotation {
    font-size: 10px;
    margin-top: 4px;
  }

  .text-12 {
    &,
    * {
      font-size: 12px;
    }
  }
}
</style>
