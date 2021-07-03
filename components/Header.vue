<template>
  <div class="header" :class="{'hide-mouse':hideMouse}">
    <div class="bg" :style="bgStyle"></div>
    <div class="cleanbg" :style="cleanbgStyle">🥞</div>
    <div class="content">
      <h1 class="emoji">🥞</h1>
      <h1>蓬蓬鬆餅</h1>
      <h1 class="subtitle">～世人都愛的美味鬆餅～</h1>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    cleanbgStyle: "opacity: 0",
    bgStyle: "opacity: .25",
    hideMouse: true
  }),
  created() {
    document.onmousemove = e => {
      if (window.scrollY == 0) {
        this.cleanbgStyle = `transform: translate(${e.clientX -
          128}px,${e.clientY - 128}px); background-position: ${-e.clientX +
          128}px ${-e.clientY + 128}px;`;
        this.hideMouse = true;
      } else {
        this.cleanbgStyle = "display:none;";
        this.hideMouse = false;
      }
    };
    document.onscroll = e => {
      if (window.scrollY > 0) {
        this.cleanbgStyle = "display:none;";
        this.bgStyle = "opacity: 1";
        this.hideMouse = false;
      } else {
        this.bgStyle = "opacity: .25";
      }
    };
  }
};
</script> 
<style lang="sass" scoped>
.header
  display: flex
  background-color: #fff
  position: relative
  height: 100vh
  align-items: center
  overflow: hidden
  margin-bottom: 16px
  &.hide-mouse
    cursor: none
    &>*
      cursor: none
  &:active
    .cleanbg
      font-size: 56px
  .content
    width: 100%
    padding: 64px 0
    position: relative
    h1
      font-size: 72px
      text-align: center
      line-height: 1.2em
      text-shadow: 0.05em 0.05em rgb(255 234 185), 0.1em 0.1em rgb(225, 100, 40)
      font-family: "GenJyuuGothicP"
      color: rgb(225, 150, 55)
      &.emoji
        font-size: 96px
        text-shadow: none
        --size: 128px
        background-color: rgba(255,255,255,.4)
      &.subtitle
        font-size: 36px
  .bg,
  .cleanbg
    background-size: cover
    position: absolute
    top: 0
    left: 0
    background-attachment: fixed
    background-image: url('/img/pancake-bg.jpg')
  .bg
    height: 100%
    width: 100%
    transition: opacity .4s ease
    pointer-events: none
  .cleanbg
    --size: 256px
    height: var(--size)
    width: var(--size)
    position: fixed
    top: 0
    left: 0
    border-radius: 100em
    transition: opacity .2s ease
    display: flex
    align-items: center
    justify-content: center
    font-size: 48px
    user-select: none
    transition: font-size .2s ease
@media screen and (max-width: 768px)
  .header
    .cleanbg
      display: none
</style>