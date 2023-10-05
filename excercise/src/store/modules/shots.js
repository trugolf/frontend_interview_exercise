import API from '@/api';

const GET_SHOTS = 'GET_SHOTS';
const GET_SHOTS_SUCCESS = 'GET_SHOTS_SUCCESS';
const GET_SHOTS_FAILED = 'GET_SHOTS_FAILED';

const namespaced = true;

const state = {
  all: [],
  loading: false,
};

const getters = {
  shotList: (state) => {
    return state.all;
  },

  loading: (state) => {
    return state.loading;
  },
};

const actions = {
  //* allShots fetches the shot list from the API
  async allShots({ commit }) {
    let response = {};

    commit(GET_SHOTS);

    try {
      response = await API.shots.shots();
    } catch (err) {
      response = err;
    }

    return new Promise((resolve, reject) => {
      if (response?.status >= 400) {
        commit(GET_SHOTS_FAILED);
        reject(response);
      } else {
        commit(GET_SHOTS_SUCCESS, response);
        resolve(response);
      }
    });
  },
};

const mutations = {
  [GET_SHOTS](state) {
    state.loading = true;
  },

  [GET_SHOTS_SUCCESS](state, shots) {
    state.all = shots;
    state.loading = false;
  },

  [GET_SHOTS_FAILED](state) {
    state.loading = false;
  },
};

export default {
  namespaced,
  state,
  actions,
  getters,
  mutations,
};
