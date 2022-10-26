<template>
  <div class="container">
    <div id="badge">
      <h1>Pancake badge</h1>
      <p>Bring the badge to your repo today!</p>
      <div class="badge-items">
        <img class="badge-item" v-for="badge of badges" :src="badge" :key="badge" />
      </div>
      <a class="action" href="https://github.com/gnehs/made-with-pancake-badge" target="_blank">
        <i class="bx bxl-github"></i>
        <span>Get your own badge</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      badges: [
        'https://gnehs.github.io/made-with-pancake-badge/flat.svg',
        'https://gnehs.github.io/made-with-pancake-badge/flat-square.svg',
        'https://gnehs.github.io/made-with-pancake-badge/for-the-badge.svg',
        'https://gnehs.github.io/made-with-pancake-badge/plastic.svg',
        'https://gnehs.github.io/made-with-pancake-badge/social.svg',
      ]
    }
  }
}
</script>
<style lang="sass">
#badge
  padding: 24px 0
  margin: 0 auto
  margin-top: 32px
  border-radius: 16px
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  border-radius: 8px
  box-shadow: 0 5px 20px 0 rgba(0,0,0,.1)
  background-color: rgba(0,0,0,.05)
  h1
    text-align: center
    & + p
      text-align: center
      margin-bottom: 24px
  .badge-items
    display: flex
    flex-wrap: wrap
    justify-content: center
    .badge-item
      width: 180px
      margin: 8px
      cursor: pointer
      transition: all 0.2s ease-in-out
      filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.1))
      &:hover
        transform: scale(1.1)
    &:has(.badge-item:hover) .badge-item:not(:hover)
      opacity: .5
      transform: scale(.9)
  .action
    display: flex
    align-items: center
    justify-content: center
    text-decoration: none
    color: #fff
    background-color: #24292f
    padding: 8px 16px
    border-radius: 100em
    margin-top: 32px
    transition: all 0.2s ease-in-out
    &:hover
      background-color: #000
    &:active
      transform: scale(0.9)
    i
      font-size: 1.5rem
      margin-right: 8px
</style>