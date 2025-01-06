import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'John Doe',
    isAuthenticated: false,
  }),
  actions: {
    login() {
      this.isAuthenticated = true;
    },
    logout() {
      this.isAuthenticated = false;
    },
  },
  getters: {
    fullName: (state) => `Mr. ${state.name}`,
  },
});