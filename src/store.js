import {createStore} from 'vuex'

const store = createStore({
  state(){
    return {
      mixtures: [], 
      bases: [],
      decoctions: [], 
      substantia: []
    }
  },
  mutations: {
    SET_INITIAL: function(ctx, data){
      ctx.mixtures    = data.drinks
      ctx.bases       = data.bases
      ctx.decoctions  = data.decoctions
      ctx.substantia  = data.substantia
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