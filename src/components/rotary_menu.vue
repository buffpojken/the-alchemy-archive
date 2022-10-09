<template>
  <nav class="flex-grow hidden md:flex menu-container relative overflow-hidden" id="container">
    <div class="fixed left-[500px] -bottom-[150px]">
      <div class="ml-[50px] relative">
        <div class="menu-inner-hexagon rotate-counter-40 menu-bg"></div>
        <div class="menu-inner-star rotate-counter-40 menu-bg"></div>
        <div class="menu-center-vortex rotate-30 menu-bg"> </div>


        <div class="flex flex-col justify-center w-full h-full">

          <div class="w-[800px] h-[800px] relative flex-none" id="rotate">
            <div class="absolute w-[644px] h-[644px] left-[78px] top-[78px] border-4 box-border rounded-full"></div>
            <div class="menu-bg menu-outer-hexagon"></div>
            <div class="menu-outer-star menu-bg"></div>
            <div v-for="(section, index) in menuSections" class="absolute rounded-full bg-black w-44 border h-44 text-white flex flex-col justify-center items-center text-center menu-item" :class="menuSectionClasses(section, index)" :data-index="index" :data-section="section.key" :style="{'transform': 'rotate('+angle+'deg)'}">
              <div class="w-full h-full flex flex-col justify-end bg-center bg-no-repeat" :class="section.icon">
                <h4 class="louvette text-1_5xl mb-6">{{section.label}}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="looking-glass left-[44px] rounded-full absolute z-10 pointer-events-none"></div>
      <div :class="{'faded': beingDragged}" class="looking-glass-outer left-[36px] rounded-full absolute z-10 pointer-events-none"></div>
      <div class="absolute w-[52px] top-1/2 h-1 border bg-white pointer-events-none z-10"></div>
    </div>
  </nav>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data: function(){
      return {
        beingDragged: false, 
        angle: 0
      }
    }, 
    computed: {
      ...mapState(['menuSections'])
    }, 
    methods: {
      menuSectionClasses: function(section, idx){
        var klazz = {}
        klazz['menu-'+(idx+1)] = true
        return klazz
      }
    }
  }

</script>