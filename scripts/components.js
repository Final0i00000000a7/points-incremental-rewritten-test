function loadVue() {
  window.app = new Vue({
    el: "#app",
    data: {
      player: player,
      hasLoaded: hasLoaded,
      dimensions: [
        { id: 1, label: '第一维度' },
        { id: 2, label: '第二维度' },
        { id: 3, label: '第三维度' },
        { id: 4, label: '第四维度' },
        { id: 5, label: '第五维度' },
        { id: 6, label: '第六维度' },
        { id: 7, label: '第七维度' },
        { id: 8, label: '第八维度' },
      ],
      currentPopupText: ``,
      isShowingPopup: 0,
      save: "",
      hover_upg: 0,
      sq_upgs: chunkArrayIntoGroupsOfTen(sq_upgs),
      squpgs2: sq_upgs,
    },
    computed: {
      
    },  
    methods: {  
      
    },
    watch: {
    },
    nextTick() {
      app.$refs.game.style.display = "block"
    }
  })
  Vue.component("rainbow",{
    template: `<template><div :style="{color: getUndulatingColor()}"><slot></slot></div></template>`
  })
  Vue.component("main-line",{
    template: `<div class="main-line"></div>`
  })
}
openPopup = function (option) {
    app.isShowingPopup = option
}