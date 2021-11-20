<template>
  <div id="intro">
    <div class="header container">
      <h1>蓬蓬鬆餅</h1>
      <h2>天堂般的美味鬆餅</h2>
    </div>
    <div class="spacer" />
    <div class="arrow">
      <i class="bx bx-chevron-down"></i>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass">
#intro
    background-image: url('/img/pancake-bg.jpg')
    background-size: cover
    background-position: center
    background-attachment: fixed
    height: 100vh
    display: flex
    flex-direction: column
    justify-content: flex-end
    &::before
        content: ''
        background-image: linear-gradient(to bottom, rgba(0,0,0,.05) 50%, rgba(0,0,0,.75))
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 0
        width: 100%
        height: 100%

    @media screen and (max-width: 768px)
        justify-content: flex-start
    .header
        color: #fff
        position: relative
        font-size: 48px
        width: 100%
        letter-spacing: 0.2rem
        @media screen and (max-width: 768px)
            margin-top: 64px
            text-align: center
            text-shadow: 0 0.5rem 1rem rgba(0,0,0,0.5)
        h1
            font-weight: 900
            font-size: 2em
            margin: 0
        h2
            font-weight: 700
            font-size: 1em
            margin: 0
    .spacer
        flex: 1
        display: none
        @media screen and (max-width: 768px)
            display: block
    .arrow
        position: relative
        color: #fff
        font-size: 48px
        text-align: center
</style>