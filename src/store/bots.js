export default {
  state: {
    botsList: []
  },
  mutations: {
    CREATE_BOT(state, bot) {
      state.botsList.push(bot);
    },
    DELETE_BOT(state, bot) {
      state.botsList = state.botsList.filter(item => item.id !== bot.id);
    },
    EDIT_BOT(state, bot) {
      state.botsList = state.botsList.map(foundBot => foundBot.id === bot.id ? bot : foundBot);
    }
  },
  getters: {
    botsList: state => state.botsList
  }
}
