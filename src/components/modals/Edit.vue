<template>
  <Modal @close="close">
    <h3 class="modal__headline">Edit</h3>
    <BotForm
      :activeBot="activeBot"
      @submitHandler="submitHandler"
    />
  </Modal>
</template>

<script>
import Modal from '@/components/HOCs/Modal.vue';
import BotForm from '@/components/BotForm.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Edit',
  props: {
    bots: Array
  },
  computed: {
    ...mapGetters(['activeBot']),
  },
  methods: {
    submitHandler(updatedActiveBot) {
      this.$store.commit('EDIT_BOT', updatedActiveBot);
      this.$store.commit('UPDATE_ACTIVE_BOT', updatedActiveBot);
      this.close();
    },
    close() {
      this.$emit('close', this.activeBot);
    }
  },
  components: {
    Modal,
    BotForm
  }
}
</script>
