import Vuex from 'vuex'
import quiz from './quiz'
import highscore from './highscore'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
    }),
    modules: {
        quiz: quiz,
        highscore: highscore
    },
    mutations: {
      increment (state) {
        state.counter++
      }
    }
  })
}

export default createStore