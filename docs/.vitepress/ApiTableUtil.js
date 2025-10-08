import mdi from 'markdown-it';

const md = mdi({ html: true });
export const processMarkdown = (text) => {
  try {
    return md.render(text);
  } catch (err) {
    console.error(`Error in Props.vue's markdown when rendering`, { text });
    console.error(err);
  }
};
