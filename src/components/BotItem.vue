<template>
  <div class="bot-item">
    <h3 class="bot-item__name">{{ bot.name }}</h3>
    <img class="bot-item__avatar" :src="bot.avatar" alt="">
  </div>
</template>

<script>
  export default {
    name: 'BotItem',
    props: {
      bot: Object
    },
    mounted() {
      console.log(this.bot);
    }
  }
</script>

<style lang="scss">
  @import "../assets/styles/scss-variables";

  .bot-item {
    color: $white;
    width: 100%;
    padding: 10% 5%;
    box-sizing: border-box;
    background-color: $blue;

    &__avatar {
      height: 150px;
    }

    &__name {
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      margin-bottom: 10px;
    }
  }
</style>
