import { createGenerator } from '@unocss/core';
import { presetWarp } from '@warp-ds/uno';
import { formatCSS } from '@itsy/okay';
import * as classLists from './supported.list.js';

const uno = await createGenerator({ presets: [presetWarp()] });
const cssFor = async (selector) => {
  const result = await uno.parseToken(selector);
  const css = result ? formatCSS(result[0][2]).replaceAll(':', ': ').replaceAll(';', '') : null;
  return [selector, css];
};

const qrTable = (arr) => Promise.all(arr.map(cssFor));

export default {
  async load() {
    const data = {};
    for (const [k, v] of Object.entries(classLists)) {
      data[k] = await qrTable(v);
    }
    return data;
  },
};
