<template>
  <Modal @close="close">
    <h3 class="modal__headline">Create</h3>
    <BotForm
      :isBotCreating="true"
      @submitHandler="submitHandler"
    />
  </Modal>
</template>

<script>
  import Modal from '@/components/HOCs/Modal.vue';
  import BotForm from '@/components/BotForm.vue';

  export default {
    name: 'CreateBot',
    methods: {
      submitHandler(bot) {
        this.$store.commit('CREATE_BOT', bot);
        this.close();
      },
      close() {
        this.$emit('close');
      }
    },
    components: {
      Modal,
      BotForm
    }
  }
</script>

<style lang="scss">
  @import "../../assets/styles/scss-variables";

  .modal {
    .modal-form {
      &__input {
        margin: 30px 0;
      }

      &__btn--submit {
        background-color: $blue;
        border-radius: 2px;
        border: none;
        color: $white;
        font-weight: bold;
        font-size: 15px;
        padding: 9px 0;
        width: 100%;
        cursor: pointer;
        margin-top: 10px;
      }
    }
  }
</style>
