<template>
    <header class="c-header">
        <div class="c-header__wrapper-logo">
            <h2 class="c-header__logo">Telegram Bots</h2>
            <svg class="c-header__logo-icon" width="30px" height="30px" x="0px" y="0px" viewBox="0 0 512 512"
                 xml:space="preserve">
            <circle style="fill:#41B4E6;" cx="255.997" cy="256" r="255.997"/>
                <path style="fill:#0091C8;"
                      d="M512,256.003c0-6.238-0.235-12.419-0.673-18.546L405.228,131.36L106.772,248.759l114.191,114.192  l1.498,5.392l1.939-1.955l0.008,0.008l-1.947,1.947L348.778,494.66C444.298,457.5,512,364.663,512,256.003z"/>
                <polygon style="fill:#FFFFFF;"
                         points="231.138,293.3 346.829,380.647 405.228,131.36 106.771,248.759 197.588,278.84   363.331,167.664 "/>
                <polygon style="fill:#D2D2D7;" points="197.588,278.84 222.461,368.344 231.138,293.3 363.331,167.664 "/>
                <polygon style="fill:#B9B9BE;" points="268.738,321.688 222.461,368.344 231.138,293.3 "/>
        </svg>
        </div>
        <div>
            <button
                    class="c-header__create-button"
                    @click="openCreateModal"
            >
                Create
            </button>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
      methods: {
        openCreateModal() {
          this.$store.commit('OPEN_CREATE_MODAL');
        }
      }
    }
</script>

<style lang="scss">
    @import "../assets/styles/scss-variables.scss";

    .c-header {
        width: 100%;
        height: 10%;
        position: fixed;
        top: 0;
        background-color: $blue;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 5%;

      &__wrapper-logo {
        display: flex;
        align-content: center;
      }

        &__logo {
            color: $white;
            text-transform: uppercase;
            letter-spacing: 5px;

            &-icon {
                width: 30px;
                height: 30px;
                margin-left: 20px;
            }
        }

      &__create-button {
        border-radius: 4px;
        color: $white;
        font-size: 20px;
        padding: 8px 16px;
        cursor: pointer;
        border: 1px solid $white;
        transition: all .3s;
        background: inherit;

        &:hover {
          background-color: $white;
          color: $blue;
        }
      }
    }
</style>
