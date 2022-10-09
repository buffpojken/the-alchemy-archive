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
      menuSections: [
        {
          key: 'mixtures', 
          label: 'Mixturer', 
          icon: 'icon-mixturer'
        }, 
        {
          key: 'bases', 
          label: 'Baser', 
          icon: 'icon-baser'
        }, 
        {
          key: 'substantia', 
          label: 'Substantia', 
          icon: 'icon-substantia'
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
    }
  }, 
  actions: { 
   
  }, 
  getters: {
    isTouchScreen: function(){
      return window.matchMedia('(hover: none)').matches
    }, 
    getBreakpoint: function(ctx){
//      const mq = useMq();
      return function(){
        console.log(store)
  //      console.log(mq)        
      }
    }   
  }, 
  plugins: [

  ]
})

window._store = store

export{
  store
}