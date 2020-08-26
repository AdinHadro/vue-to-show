import Cookies from "js-cookie";

export const state = () => {
  return { user: {} };
};

export const mutations = {
  async setUser(state, payload) {
    if (payload.user) {
      state.user = payload.user;
      if (payload.rememberMe) {
        Cookies.set("user", {
          username: payload.user.username,
          id: payload.user.id,
          email: payload.user.email,
          image: { url: payload.user.image && payload.user.image.url }
        });
      }
      if (payload.$apolloHelpers) {
        await this.$apolloHelpers.onLogin(payload.jwt);
      }
    }
  },
  async logout(state, payload) {
    state.user = {};
    Cookies.set("user", null);
    if (payload.$apolloHelpers) {
      await this.$apolloHelpers.onLogout();
    }
  }
};

export const getters = {
  username: state => {
    return state.user && state.user.username;
  },
  user: state => {
    return state.user;
  }
};
