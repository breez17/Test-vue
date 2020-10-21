<template>
  <div class="modal">
    <div class="modal__content">
      <button class="modal__close btn btn--close" @click="close">
        X
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/styles/scss-variables";

  .modal {
    width: 100%;
    height: 100%;
    background-color: $dark-blue;
    z-index: 1;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    &__headline {
      width: 85%;
      word-break: break-all;
    }

    &__calendar-view {
      width: 100%;
      border: none;
      border-bottom: 1px solid #949494;
      outline: none;
      font-size: 16px;
      color: #949494;
    }

    &__bot-date {
      display: block;
      margin-top: 15px;
    }

    &__bot-description {
      font-size: 18px;
      margin: 15px 0;
    }

    &__bot-avatar .info {
      width: 100%;
    }
    &__bot-avatar {
      width: 100%;
      height: 150px;
      font-size: 34px;
      border: 1px solid $blue;
      font-weight: bold;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 15px;
      position: relative;

      .bot-avatar__btn--delete {
        background-color: $dark-blue;
        border: none;
        color: $white;
        position: absolute;
        top: 0;
        right: 0;
        padding: 4px 7.5px;
        text-transform: uppercase;
        cursor: pointer;
      }
    }

    &__content {
      background-color: $white;
      width: 40%;
      height: auto;
      padding: 20px;
      position: relative;
      border-radius: 2px;

      .btn {
        background-color: $blue;
        color: $white;
        border: none;
        border-radius: 0 0 0 2px;
        padding: 10px 15px;
        text-transform: uppercase;
        font-weight: bold;
        position: absolute;
        cursor: pointer;

        &--close {
          top: 0;
          right: 0;
          transition: opacity .3s;

          &:hover {
            opacity: .8;
          }
        }

        &--edit {
          border-radius: 2px 0 0 2px;
          top: 0;
          right: 40px;
          transition: opacity .3s;

          &:hover {
            opacity: .8;
          }

          svg {
            width: 10px;
            height: 10px;
            fill: white;
          }
        }
      }
    }
  }

  @media screen and (max-width: 992px) {
    .modal {
      &__content {
        width: 65%;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .modal {
      &__content {
        width: 73%;
      }
    }
  }
  @media screen and (max-width: 520px) {
    .modal {
      &__content {
        width: 90%;
      }
    }
  }
</style>
