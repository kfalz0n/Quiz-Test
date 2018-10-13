
export default {
    namespaced: true,
    state: {
      scores: [
        {
          name: 'James',
          correctAnswers: 2,
          score: 40,
        },
        {
          name: 'Max',
          correctAnswers: 1,
          score: 20,
        },
        {
          name: 'David',
          correctAnswers: 3,
          score: 60,
        },
      ],
    },
    mutations: {
      scoreAdded(state, payload) {
        state.scores.push(payload.score);
      },
    },
    actions: {
      addScore(state, score) {
        setTimeout(() => state.commit('scoreAdded', { score }), 200);
      },
    },
    getters: {
      getScores: state => state.scores,
    },
  };
  