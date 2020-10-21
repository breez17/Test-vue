<template>
  <div class="empty-list" v-else>
    <h3 class="empty-list__text">
      <span class="empty-list__create-bot" @click="openCreateModal">
          +
        </span>
    </h3>
  </div>
</template>

<script>
  export default {
    name: 'EmptyBotsList',
    methods: {
      openCreateModal() {
        this.$emit('openCreateModal');
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/styles/scss-variables";

  .empty-list {

    &__text {
      text-align: center;
    }

    &__create-bot {
      color: #FFFFFF;
      background: rgba(0, 0, 0, 0.66);
      opacity: .5;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      padding-bottom: 5px;
      width: 80px;
      height: 80px;
      font-size: 2rem;
      cursor: pointer;
      transition: all .3s;

      &:hover {
        background: rgba(0, 0, 0, 0.86);
      }
    }
  }
</style>
