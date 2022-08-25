import {createStore} from 'vuex'

const store = createStore({
  state(){
    return {
      mixtures: [], 
      bases: [],
      decoctions: [], 
      substantia: [], 
      currentCocktail: null
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

  }, 
  plugins: [

  ]
})

window._store = store

export{
  store
}