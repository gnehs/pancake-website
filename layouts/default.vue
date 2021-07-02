<template>
  <div>
    <Nuxt />
    <footer>
      Created by
      <a href="https://gnehs.net/" target="_blank">gnehs</a> | Powered by
      Nuxt.js
    </footer>
  </div>
</template>
 

<script>
export default {
  data() {
    return {};
  },
  created() {}
};
</script>
<style>
  * {
    box-sizing: border-box;
  }
  html,
  body {
    background-color: rgb(244, 244, 244);
    margin: 0;
    padding: 0;
    min-height: 100%;
  }
  footer {
    opacity: 0.5;
    font-size: 0.7em;
    font-family: "Raleway", sans-serif;
    text-align: center;
    border-radius: 8px;
    margin-top: 32px;
    backdrop-filter: blur(10px);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 8px 0;
  }
  .container {
    max-width: calc(100vw - 20px);
    width: 1200px;
    margin: 0 auto;
  }

  h1 {
    margin: 0;
    text-align: center;
  }
  h1.emoji {
    --size: 72px;
    font-size: 48px;
    background-color: antiquewhite;
    height: var(--size);
    width: var(--size);
    border-radius: 100em;
    line-height: var(--size);
    margin: 0 auto;
  }
</style>