<template>
  <div class="c-content">
    <CreateBot v-if="isCreateModal" @close="closeCreateModal" />
    <BotData v-if="isBotDataModal" @close="closeBotInfoModal" />
    <Edit v-if="isEditBotModal" :bots="botsList" @close="closeEditModal" />
    <BotsView
      v-if="botsList.length"
      :bots="botsList"
      @openBot="openBotInfoModal"
    />
    <EmptyList v-else @openCreateModal="openCreateModal" />
  </div>
</template>

<script>
import BotsView from '@/components/BotsView.vue';
import CreateBot from '@/components/modals/CreateBot.vue';
import BotData from '@/components/modals/BotData.vue';
import Edit from '@/components/modals/Edit.vue';
import EmptyList from '@/components/EmptyList.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Content',
  computed: {
    ...mapGetters([
      'isCreateModal',
      'isBotDataModal',
      'isEditBotModal',
      'activeBot',
      'botsList'
    ])
  },
  methods: {
    openCreateModal() {
      this.$store.commit('OPEN_CREATE_MODAL');
    },
    closeCreateModal() {
      this.$store.commit('CLOSE_CREATE_MODAL');
    },
    openBotInfoModal(bot) {
      this.$store.commit('OPEN_BOT_DATA_MODAL', bot);
    },
    closeBotInfoModal() {
      this.$store.commit('CLOSE_BOT_DATA_MODAL');
    },
    closeEditModal() {
      this.$store.commit('CLOSE_EDIT_BOT_MODAL');
      this.$store.commit('OPEN_BOT_DATA_MODAL', this.activeBot);
    }
  },
  components: {
    BotsView,
    CreateBot,
    BotData,
    Edit,
    EmptyList
  }
}
</script>

<style lang="scss">
@import "../assets/styles/scss-variables";

.c-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
