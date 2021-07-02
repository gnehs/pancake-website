<template>
  <div>
    <div class="container">
      <h1 class="emoji">📝</h1>
      <h1>食客評鑑</h1>
      <div class="users">
        <div class="user" v-for="({name,photo,msg,stars},i) of items" :key="i">
          <div class="header">
            <div class="name">{{name}}</div>
            <div class="stars">
              <fa :icon="['fas','star']" v-for="n in stars" :key="n" style="color: #39b51b" />
              <fa :icon="['far','star']" v-for="n in 5-stars" :key="n" />
            </div>
          </div>
          <div class="message">{{msg}}</div>
          <img class="avatar" :src="photo" />
        </div>
        <a
          class="user new"
          href="https://github.com/gnehs/pancake.gnehs.net/blob/master/add-item.md"
          target="_blank"
        >+ 撰寫評鑑</a>
      </div>
    </div>
  </div>
</template>
<script>
import items from "@/assets/reviews.js";
export default {
  data: () => ({
    items
  })
};
</script>
<style lang="sass">
.users
  display: grid
  gap: 24px
  grid-auto-rows: auto
  grid-template-columns: repeat(3,1fr)
  margin: 24px 0
  .user
    box-shadow: 0.1em 0.1em rgb(255 234 185), 0.2em 0.2em rgb(225 100 40)
    border: 2px solid rgb(225 100 40)
    width: 100%
    background-color: #fff
    padding: 12px
    position: relative
    border-radius: 4px
    &.new
      text-align: center
      display: flex
      align-items: center
      justify-content: center
      font-size: 24px
      font-weight: bold
      cursor: pointer
      user-select: none
      &:hover
        background-color: rgb(225 100 40)
        color: #fff
      &:active
        transform: translate(.2em,.2em)
        box-shadow: 0 0 rgb(255 234 185), 0 0 rgb(225 100 40)
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
      box-shadow: 0.1em 0.1em rgb(255 234 185), 0.2em 0.2em rgb(225 100 40)
      border: 2px solid rgb(225 100 40)
      right: 4px
      bottom: -8px

@media screen and (max-width: 768px)
  .users
    gap: 24px 12px
    grid-template-columns: repeat(2,1fr)
</style>