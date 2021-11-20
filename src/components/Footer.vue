<template>
  <div id="footer">
    <div class="container">
      <div class="logo">蓬蓬鬆餅</div>
      <div class="social">
        <a href="https://github.com/gnehs/pancake.gnehs.net" target="_blank">
          <i class="bx bxl-github"></i>
        </a>
      </div>
    </div>
  </div>
</template>
 
<style lang="sass">
#footer
    padding: 20px 0
    background-color: #f5f5f5
    margin-top: 64px
    .container
        display: flex
        justify-content: space-between
        align-items: center
        .logo
            font-size: 1.5rem
            font-weight: bold
            color: #000
            margin-right: 20px
        .social
            display: flex
            a
                color: #fff
                background-color: #24292f
                padding: 8px
                display: flex
                align-items: center
                justify-content: center
                border-radius: 32%
                text-decoration: none
                transition: all 0.2s ease-in-out
                &:hover
                    background-color: #000
                &:active
                    transform: scale(0.9)
                i
                    font-size: 1.5rem
</style>