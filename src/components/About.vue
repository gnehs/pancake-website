<template>
  <div class="container">
    <h1>關於蓬蓬鬆餅</h1>
    <div id="about">
      <div class="about-box">
        <h2 class="title">什麼是蓬蓬鬆餅？</h2>
        <p>蓬蓬鬆餅，有些人也稱其為「舒芙蕾鬆餅」，是又輕又鬆軟的美味鬆餅，搭配上美味沾醬與配料可說是人間美味，歡迎大家一起來品嚐。</p>
      </div>
      <div class="about-box">
        <h2 class="title">是什麼成就了蓬蓬鬆餅的美味？</h2>
        <p>
          每一塊珍貴的蓬蓬鬆餅都是由蓬蓬鬆餅小精靈親手製作的，由於材料取得不易加上小精靈非常稀少，要吃到蓬蓬鬆餅可說是難上加難，因此每一塊蓬蓬鬆餅都是珍貴且獨一無二的。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass">
.container:has(#about)
  margin: 64px auto
  h1
    margin-bottom: 16px
#about
  display: grid
  grid-template-columns: 1fr 1fr
  grid-gap: 24px
  @media screen and (max-width: 768px)
    grid-template-columns: 1fr
  .about-box
    padding: 16px 24px
    border-radius: 8px
    box-shadow: 0 5px 20px 0 rgba(0,0,0,.1)
    position: relative
    overflow: hidden
    .title
      font-size: 24px
      font-weight: 700
    p
      margin-bottom: 0
      line-height: 1.5
    &::before
      content: "🥞"
      position: absolute
      bottom: 0
      right: calc(var(--size) / 4)
      --size: 90px
      width: var(--size)
      height: var(--size)
      font-size: var(--size)
      color: #000
      opacity: .1
</style>
