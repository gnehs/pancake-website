<template>
	<div id="comments" class="container">
		<h1>食客評鑑</h1>
		<div class="users">
			<div class="user" v-for="({ name, photo, msg, stars }, i) of items" :key="i">
				<div class="header">
					<div class="name">{{ name }}</div>
					<div class="stars">
						<i class="bx bxs-star" v-for="n in stars" :key="n" style="color: #39b51b" />
						<i class="bx bxs-star" v-for="n in 5 - stars" :key="n" />
					</div>
				</div>
				<div class="message">{{ msg }}</div>
				<img class="avatar" :src="photo" />
			</div>
		</div>
	</div>
</template>

<script setup>
import items from '../assets/reviews.js'
</script>

<style lang="sass">
#comments
	margin-top: 64px
	.users
		display: grid
		gap: 24px
		grid-auto-rows: auto
		grid-template-columns: repeat(4,1fr)
		margin: 24px 0
		@media screen and (max-width: 1024px)
			grid-template-columns: repeat(3,1fr)
		@media screen and (max-width: 768px)
			gap: 24px 12px
			grid-template-columns: repeat(2,1fr)
		@media screen and (max-width: 486px)
			gap: 24px 12px
			grid-template-columns: 1fr
		.user
			box-shadow: 0 5px 20px 0 rgba(0,0,0,.1)
			width: 100%
			background-color: #fff
			padding: 16px 24px
			padding-bottom: 32px
			position: relative
			border-radius: 8px
			.header
				display: flex
				align-items: center
				margin-bottom: 6px
			.name
				font-weight: bold
				flex: 1
				font-size: 18px
			.stars
				color: #ccc
				display: flex
			.avatar
				width: 40px
				height: 40px
				object-fit: cover
				border-radius: 100em
				margin-right: 4px
				position: absolute
				box-shadow: 0 5px 20px 0 rgba(0,0,0,.1)
				right: 4px
				bottom: -8px
</style>