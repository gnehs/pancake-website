<template>
  <div class="container">
    <div id="badge">
      <div class="tag">AD</div>
      <div class="content">
        <h1 class="icon">✨</h1>
        <h1>Pancake Badge</h1>
        <p>Bring the pancake to your repo today!</p>
        <a class="action" href="https://github.com/gnehs/made-with-pancake-badge" target="_blank">
          <i class="bx bxl-github"></i>
          <span>Get your own badge</span>
        </a>
      </div>
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
  padding: 48px
  gap: 24px
  margin: 48px auto
  border-radius: 8px
  align-items: center
  border-radius: 8px
  background-image: linear-gradient(45deg,#0a1a32,#000)
  display: grid
  grid-template-columns: 1fr 1fr
  color: #fff
  position: relative
  @media (max-width: 768px)
    grid-template-columns: 1fr
    justify-content: center
  h1
    font-family: 'Pacifico', cursive
    & + p
      margin-bottom: 24px
  .tag
    position: absolute
    top: 8px
    right: 8px
    padding: 4px 8px
    background-color: #000
    color: #fff
    border: 1px solid #fff
    border-radius: 8px
    font-size: .75rem
    opacity: .5
  .content
    display: flex
    flex-direction: column
    align-items: flex-start
    @media (max-width: 768px)
      grid-template-columns: 1fr
      justify-content: center
      align-items: center
      .action
        display: none
    .icon
      font-size: 3rem
      margin-bottom: 16px
  .badge-items
    display: flex
    flex-wrap: wrap
    justify-content: center
    .badge-item
      width: 180px
      margin: 8px
      cursor: pointer
      transition: all 0.2s ease-in-out
      filter: drop-shadow(0 0 16px rgba(255, 255, 255, 0.2))
      &:hover
        transform: scale(1.1)
    &:has(.badge-item:hover) .badge-item:not(:hover)
      opacity: .5
      transform: scale(.9)
  .badge-items+.action
    display: none
    @media (max-width: 768px)
      display: flex
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
    box-shadow: 0 0 16px rgba(255, 255, 255, 0.1)
    &:hover
      background-color: #000
    &:active
      transform: scale(0.9)
    i
      font-size: 1.5rem
      margin-right: 8px
</style>