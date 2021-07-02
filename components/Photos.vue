<template>
  <div>
    <div class="container">
      <h1 class="emoji">📷</h1>
      <h1>珍貴的野生蓬蓬鬆餅</h1>
      <div class="photos">
        <div class="photo" v-for="({src,location,title,url},i) of items" :key="i">
          <img :src="src" />
          <div class="info">
            <div class="title">{{title}}</div>
            <div class="location">{{location}}</div>
          </div>
          <a :href="url.link" target="_blank" class="link">
            <fa :icon="url.icon" />
            {{url.title}}
          </a>
        </div>
        <a
          class="photo new"
          href="https://github.com/gnehs/pancake.gnehs.net/blob/master/CONTRIBUTING.md"
          target="_blank"
        >+ 新增圖片</a>
      </div>
    </div>
  </div>
</template>

<script>
import items from "@/assets/photos.js";
export default {
  data: () => ({
    items
  })
};
</script>
<style lang="sass" >
.photos
    display: grid
    gap: 24px
    grid-auto-rows: auto
    grid-template-columns: repeat(3,1fr)
    margin: 24px 0
    .photo
        box-shadow: 0.1em 0.1em rgb(255 234 185), 0.2em 0.2em rgb(225 100 40)
        border: 2px solid rgb(225 100 40)
        width: 100%
        background-color: #fff
        padding: 12px
        position: relative
        border-radius: 4px
        img
            width: 100%
            border-radius: 4px
        .info
            .title
                font-weight: bold
                font-size: 18px
        .link
            margin-top: 8px
            display: block
            border: 2px solid rgb(225 100 40)
            border-radius: 4px
            padding: 6px 12px
            text-decoration: none
            color: #af4f20
            text-align: center
            background-color: #fff
            cursor: pointer
            &:hover
                color: #fff
                background-color: rgb(225 100 40)
            &:active
                transform: scale(0.95)
        &.new
            text-align: center
            display: flex
            align-items: center
            justify-content: center
            font-size: 24px
            font-weight: bold
            cursor: pointer
            user-select: none
            text-decoration: none
            color: #af4f20
            &:hover
                background-color: rgb(225 100 40)
                color: #fff
            &:active
                transform: translate(.2em,.2em)
                box-shadow: 0 0 rgb(255 234 185), 0 0 rgb(225 100 40)

@media screen and (max-width: 1024px)
    .photos
        grid-template-columns: repeat(2,1fr)
@media screen and (max-width: 768px)
    .photos
        gap: 24px 12px
        grid-template-columns: repeat(1,1fr)
</style>