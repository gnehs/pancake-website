<template>
	<div id="intro" :class="{ isTop }">
		<div class="header container">
			<div class="icon">🥞</div>
			<h1>蓬蓬鬆餅</h1>
			<h2>～世人都愛的美味鬆餅～</h2>
		</div>
		<div class="spacer" />
		<div class="arrow" @click="scrollNext">
			<i class="bx bx-chevron-down"></i>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Intro',
	data() {
		return {
			isTop: true,
		}
	},
	methods: {
		watchIsTop() {
			this.isTop = window.scrollY < 100
		},
		scrollNext() {
			window.scrollTo({
				top: window.innerHeight,
				behavior: 'smooth'
			})
		},
	},
	mounted() {
		window.addEventListener('scroll', this.watchIsTop)
	},
	unmounted() {
		window.removeEventListener('scroll', this.watchIsTop)
	}
}
</script>

<style lang="sass">
@keyframes background-position
	0%
		background-position: 0 0
	100%
		background-position: 0 var(--pattern-size)
@keyframes arrow-position
	0%,100%
		transform: translateY(0)
	50%
		transform: translateY(-10px)
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
		position: absolute
		--pattern-size: 12px
		--pattern-speed: 5s
		content: ''
		animation: background-position var(--pattern-speed) infinite linear
		background-image: radial-gradient(rgba(0, 0, 0, .25) 20%, rgba(0, 0, 0, .5) 20%)
		background-position: 0 0
		background-size: var(--pattern-size) var(--pattern-size)
		background-attachment: fixed
		top: 0
		left: 0
		right: 0
		bottom: 0
		width: 100%
		height: 100%
		transition: opacity .5s ease-in-out
		opacity: 0
	&.isTop::before
		opacity: 1

	@media screen and (max-width: 768px)
		justify-content: flex-start
	.header
		color: #fff
		position: relative
		font-size: 48px
		width: 100%
		letter-spacing: 0.2rem
		height: 100%
		display: flex
		flex-direction: column
		justify-content: center
		text-align: center
		text-shadow: 0 0.5rem 1rem rgba(0,0,0,0.5)
		transition: text-shadow .5s ease-in-out
		@media screen and (max-width: 768px)
			font-size: 36px
		.icon
			font-size: 2em
		h1
			font-weight: 700
			font-size: 1.5em
			margin: 0
			margin-top: .25em
		h2
			font-weight: 500
			font-size: .75em
			margin: 0
			opacity: 0.85
		.isTop &
			text-shadow: none
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
		animation: arrow-position 2s infinite linear
		cursor: pointer
		text-shadow: 0 0.5rem 1rem rgba(0,0,0,0.5)
		.isTop &
			text-shadow: none
</style>