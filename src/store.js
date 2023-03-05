import {createStore} from 'vuex'
import { useMq } from "vue3-mq";

const store = createStore({
  state(){
    return {
      mixtures: [], 
      bases: [],
      decoctions: [], 
      substantia: [], 
      currentCocktail: null, 
      currentItem: null,
      menuSections: [
        {
          key: 'mixtures', 
          label: 'Mixturer', 
          icon: 'icon-mixturer'
        }, 
        {
          key: 'decoctions', 
          label: 'Dekokter', 
          icon: 'icon-dekokter'
        },
         {
          key: 'bases', 
          label: 'Baser', 
          icon: 'icon-baser'
        }, 
        {
          key: 'mixtures', 
          label: 'Mixturer', 
          icon: 'icon-mixturer'
        }, 
        {
          key: 'decoctions', 
          label: 'Dekokter', 
          icon: 'icon-dekokter'
        }, 
        {
          key: 'bases', 
          label: 'Baser', 
          icon: 'icon-baser'
        }
      ]
    }
  },
  mutations: {
    SET_INITIAL: function(ctx, data){
      ctx.mixtures    = data.drinks
      ctx.bases       = data.bases
      ctx.decoctions  = data.decoctions
      ctx.substantia  = data.substantia
    }, 
    CURRENT_MIXTURE: function(ctx, slug){
      let idx = ctx.mixtures.findIndex((m) => {return m.slug == slug})
      ctx.currentCocktail = ctx.mixtures[idx]
    }, 
    CURRENT_ITEM: function(ctx, {slug, type}){
      switch(type){
        case 'mixtures': 
          var idx = ctx.mixtures.findIndex((m) => {return m.slug == slug})
          ctx.currentItem = ctx.mixtures[idx]
          break;
        case 'decoctions': 
          var idx = ctx.decoctions.findIndex((m) => {return m.slug == slug})
          ctx.currentItem = ctx.decoctions[idx]
          break;
        case 'bases': 
          var idx = ctx.bases.findIndex((m) => {return m.key == slug})
          ctx.currentItem = ctx.bases[idx]
          break;
        case 'substantia':
          var idx = ctx.substantia.findIndex((m) => {return m.slug == slug})
          ctx.currentItem = ctx.substantia[idx]
          break;
      }
    }
  }, 
  actions: { 
   
  }, 
  getters: {
    isTouchScreen: function(){
      return window.matchMedia('(hover: none)').matches
    } 
  }, 
  plugins: [

  ]
})

window._store = store

export{
  store
}