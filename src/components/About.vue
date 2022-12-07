<template>
  <div class="container">
    <div class="warning">
      <p>⚠️ 您的瀏覽器不支援蓬蓬鬆餅網站之部分內容，可能會造成網頁顯示不正常或部分功能異常。</p>
    </div>
    <h1>關於蓬蓬鬆餅</h1>
    <div id="about">
      <div class="about-box">
        <h2 class="title">什麼是蓬蓬鬆餅？</h2>
        <p>
          蓬蓬鬆餅，有些人也稱其為「舒芙蕾鬆餅」，蓬蓬鬆餅是一種美味的甜點鬆餅，通常是圓柱形的，表面有著鬆軟的奶油餡料，口感非常滑順。它的口味有多種選擇，包括巧克力、檸檬、草莓等。這種鬆餅非常受歡迎，尤其是在派對和茶會上，因為它能提供滿足感和清新的口感。蓬蓬鬆餅是用高質量的成分製作而成，因此具有高質感和美味口感，是不可多得的美食。
        </p>
      </div>
      <div class="about-box">
        <h2 class="title">是什麼成就了蓬蓬鬆餅的美味？</h2>
        <p>
          每一塊珍貴的蓬蓬鬆餅都是由蓬蓬鬆餅小精靈親手製作的。蓬蓬鬆餅小精靈是一種非常稀少的生物，它們只居住在神秘的蓬蓬鬆餅森林中。蓬蓬鬆餅小精靈喜歡用最新鮮的食材，搭配上精心挑選的香料，用心製作出每一塊美味可口的蓬蓬鬆餅。它們擁有超凡的烘焙技術，能夠使鬆餅鬆軟酥脆，口感極佳。蓬蓬鬆餅小精靈們十分珍惜自己的作品，每一塊蓬蓬鬆餅都是一件藝術品，充滿了它們的心血。蓬蓬鬆餅和蓬蓬鬆餅小精靈，為您帶來了最精致的美味享受。
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
.warning
  margin: 8px auto
  padding: 8px 24px
  border-radius: 8px
  border: 1px solid #f44336
  box-shadow: 0 5px 20px 0 rgba(0,0,0,.1)
@supports selector(:has(a))
  .warning
    display: none
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
