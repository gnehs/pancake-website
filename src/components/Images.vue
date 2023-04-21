<template>
  <div id="images" class="container">
    <h1>珍貴的野生蓬蓬鬆餅</h1>
    <div class="items">
      <div class="item" v-for="({ src, location, title, url, user }, i) of items" :key="i">
        <div class="image">
          <img :src="src" />
        </div>
        <div class="info">
          <div class="title">{{ title }}</div>
          <div class="location">
            <i class="bx bx-map"></i>
            <span>{{ location }}</span>
          </div>
          <div class="interactions">
            <div class="user">
              <i class="bx bx-camera"></i>
              <span>{{ user }}</span>
            </div>
            <div class="spacer" />
            <a :href="url.link" target="_blank" class="link">
              <i class="bx" :class="url.icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import items from '../assets/photos.js'
</script>

<style lang="sass">
.items
	margin: 16px 0
	display: grid
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
	gap: 16px
	width: 100%
	.item
		box-shadow: 0 5px 20px 0 rgba(0,0,0,.1)
		border-radius: 8px
		overflow: hidden
		.image
			width: 100%
			position: relative
			overflow: hidden
			img
				width: 100%
				border-radius: 8px
		.info
			padding: 16px
			padding-top: 12px
			display: flex
			flex-direction: column
			color: #000
			.title
				font-size: 1.5rem
				font-weight: bold
				margin-bottom: 4px
			i
				font-size: 1.2em
				width: 1em
			.interactions
				display: flex
				gap: 4px
				width: 100%
				transition: all .2s ease
				justify-items: center
				align-items: center
				.link
					padding: 6px
					background-color: rgba(255, 255, 255, .75)
					backdrop-filter: blur(10px)
					border-radius: 8px
					text-decoration: none
					transition: all .2s
					display: flex
					align-items: center
					justify-items: center
					&:hover
						transform: translateY(-2px)
						box-shadow: 0 2px 2px 0 rgba(0,0,0,.2)
					&[href*="instagram.com"]
						background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)
						color: #fff
				.user
					text-decoration: none
					display: flex
					align-items: center
					justify-items: center
</style>