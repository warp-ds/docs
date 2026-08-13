export default {
  async load() {
    const res = await fetch('https://raw.githubusercontent.com/warp-ds/Eikons/refs/heads/main/icon-keywords.json');
    return res.json();
  },
};
