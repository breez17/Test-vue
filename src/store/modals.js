export default {
  state: {
    isCreateModal: false,
    isBotDataModal: false,
    isEditBotModal: false,
    activeBot: null
  },
  mutations: {
    OPEN_CREATE_MODAL(state) {
      state.isCreateModal = true;
    },
    CLOSE_CREATE_MODAL(state) {
      state.isCreateModal = false;
    },
    OPEN_BOT_DATA_MODAL(state, bot) {
      state.activeBot = bot;
      state.isBotDataModal = true;
    },
    CLOSE_BOT_DATA_MODAL(state) {
      state.isBotDataModal = false;
    },
    OPEN_EDIT_BOT_MODAL(state) {
      state.isEditBotModal = true;
    },
    CLOSE_EDIT_BOT_MODAL(state) {
      state.isEditBotModal = false;
    },
    UPDATE_ACTIVE_BOT(state, updatedActiveBot) {
      state.activeBot = updatedActiveBot;
    }
  },
  getters: {
    isCreateModal: state => state.isCreateModal,
    isBotDataModal: state => state.isBotDataModal,
    isEditBotModal: state => state.isEditBotModal,
    activeBot: state => state.activeBot
  }
}
