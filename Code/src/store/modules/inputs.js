export default {
  state: {
    activeComponent: 'intro' 
  },
  mutations: {
    setActiveComponent(state, componentName) {
      state.activeComponent = componentName;
    }
  },
  getters: {
    activeComponent: state => state.activeComponent
  }
};
