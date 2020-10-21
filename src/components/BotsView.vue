<template>
  <ul class="bots-list">
    <li
      class="bots-list__bot"
      v-for="bot in bots"
      :key="bot.id"
      @click="e => openBot(e, bot)"
    >
      <button class="bots-list__bot-delete" @click="deleteBot(bot)">
        x
      </button>
      <BotItem :bot="bot" />
    </li>
  </ul>
</template>

<script>
  import BotItem from '@/components/BotItem';

  export default {
    name: 'BotsList',
    props: {
      bots: Array
    },
    methods: {
      openBot(e, bot) {
        if (!e.target.classList.contains('bots-list__bot-delete')) {
          this.$emit('openBot', bot);
        }
      },
      deleteBot(bot) {
        this.$store.commit('DELETE_BOT', bot)
      }
    },
    components: {
      BotItem
    }
  }
</script>

<style lang="scss">
  @import "../assets/styles/scss-variables";

  .bots-list {
    width: 90%;
    height: auto;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding: .5%;
    margin-bottom: 40px;

    &__bot {
      padding: .5%;
      box-sizing: border-box;
      width: 25%;
      cursor: pointer;
      position: relative;

      &-delete {
        background-color: $dark-blue;
        border: none;
        color: $white;
        font-size: 18px;
        position: absolute;
        top: 6px;
        right: 6px;
        padding: .5px 6px;
        cursor: pointer;
      }
    }
  }


  @media screen and (max-width: 992px) {
    .bots-list {
      &__bot {
        width: 33.3%;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .bots-list {
      &__bot {
        width: 50%;
      }
    }
  }

  @media screen and (max-width: 520px) {
    .bots-list {
      &__bot {
        width: 100%;
      }
    }
  }
</style>
