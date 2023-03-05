<template>
  <nav class="flex-grow hidden md:flex menu-container relative overflow-hidden" id="container">
    <div class="fixed left-[500px] -bottom-[150px]">
      <div class="ml-[50px] relative">
        <div class="menu-inner-hexagon rotate-counter-40 menu-bg"></div>
        <div class="menu-inner-star rotate-counter-40 menu-bg"></div>
        <div class="menu-center-vortex rotate-30 menu-bg"> </div>


        <div class="flex flex-col justify-center w-full h-full">

          <div class="w-[800px] h-[800px] relative flex-none" id="rotate" ref="rotator">
            <div class="absolute w-[644px] h-[644px] left-[78px] top-[78px] border-4 box-border rounded-full"></div>
            <div class="menu-bg menu-outer-hexagon"></div>
            <div class="menu-outer-star menu-bg"></div>
            <div v-for="(section, index) in menuSections" class="absolute rounded-full bg-black w-44 border h-44 text-white flex flex-col justify-center items-center text-center menu-item" :class="menuSectionClasses(section, index)" :data-index="index" :data-section="section.key" :style="{'transform': 'rotate('+iconAngle+'deg)'}">
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

  var R2D = 180 / Math.PI

  export default {
    props: {
      startValue: {
        type: String
      }
    },
    data: function(){
      return {
        beingDragged: false, 
        angle: 0, 
        animationClass: false, 
        active: false, 
        hasClicked: false, 
        startAngle: 0, 
        center: {
          x: 0,
          y: 0
        }, 
        rotation: 0, 
        iconAngle: 0
      }
    }, 
    computed: {
      ...mapState(['menuSections'])
    }, 
    mounted: function(){
      this.$refs.rotator.addEventListener('transitionend', () => {
        this.$refs.rotator.classList.remove(this.animationClass);
      });

      this.$refs.rotator.addEventListener((this.$store.getters.isTouchScreen ? "touchstart" : "mousedown"), this.start, false)

      document.addEventListener((this.$store.getters.isTouchScreen ? "touchmove" : "mousemove"), (event) => {       
        if (this.active === true) {
          this.beingDragged = true
          event.preventDefault();
          this.rotate(event);
        }else if(this.hasClicked){
          this.active = true
        }
      })

      document.addEventListener((this.$store.getters.isTouchScreen ? "touchend" : "mouseup"), (event) => {
        event.preventDefault();            
        this.stop(event);            
      })

      if(this.startValue){
        var d = 0;
        switch(this.startValue){
          case "bases": 
            d = this.closestEquivalentAngle(0, 60)  
            break   
          case "mixtures":
            d = this.closestEquivalentAngle(0, 0)
            break
          case "decoctions":
            d = this.closestEquivalentAngle(0, 120)
            break
        }

        this.$refs.rotator.style.webkitTransform = "rotate(" + (d) + "deg)";      
        this.angle = d
        this.iconAngle = -this.angle    
      }
    },   
    methods: {
      menuSectionClasses: function(section, idx){
        var klazz = {}
        klazz['menu-'+(idx+1)] = true
        return klazz
      }, 
      start: function(ev){
        ev.preventDefault();
        var bb = this.$refs.rotator.getBoundingClientRect(),
          t = bb.top,
          l = bb.left,
          h = bb.height,
          w = bb.width,
          x, y;
        this.center = {
          x: l + (w / 2),
          y: t + (h / 2)
        };
        if(ev.clientX){
          x = ev.clientX - this.center.x;
          y = ev.clientY - this.center.y;        
        }else{
          x = ev.touches[0].clientX - this.center.x
          y = ev.touches[0].clientY - this.center.y      
        }
        this.startAngle = R2D * Math.atan2(y, x);
        this.hasClicked = true
        return;
      }, 
      rotate: function(ev){
        ev.preventDefault();
        if(this.hasCommited){return}

        var x,y;
        if(ev.clientX){
          x = ev.clientX - this.center.x
            y = ev.clientY - this.center.y      
        }else{
          x = ev.touches[0].clientX - this.center.x
          y = ev.touches[0].clientY - this.center.y      
        }
        
        var d = R2D * Math.atan2(y, x);
        this.rotation = d - this.startAngle;
        this.iconAngle = -(this.angle + this.rotation)
        return this.$refs.rotator.style.webkitTransform = "rotate(" + (this.angle + this.rotation) + "deg)";
      }, 
      stop: function(ev){
        this.hasClicked = false
        this.angle += this.rotation;
        this.hasCommited = true
        if(this.active){
          this.defineSection(this.angle)
          this.iconAngle = -this.angle     
          setTimeout(() => {
            this.active = false
            this.hasCommited = false
          }, 25)
        }
        return
      }, 
      defineSection: function(baseAngle){
        let _angle = ((baseAngle) % 360)
        this.animationClass = 'transition-transform'
        this.$refs.rotator.classList.add(this.animationClass);
        let target = 0
        let component = null
        if(_angle < 0){
          _angle = Math.abs(_angle)
          if((_angle >= 0 && _angle <= 30) || (_angle >= 330 && _angle <= 360)){
            target = 0
            component = 1
          }else if((_angle >= 30 && _angle <= 90)){
            target = -60
            component = 2
          }else if(_angle >= 90 && _angle <= 150){
            target = -120
            component = 3
          }else if(_angle >= 150 && _angle <= 210){
            target = -180
            component = 4
          }else if(_angle >= 210 && _angle <= 270){
            target = -240
            component = 5
          }else if(_angle >= 270 && _angle <= 330){
            target = -300
            component = 6
          }
        }else{
          if((_angle >= 0 && _angle <= 30) || (_angle >= 330 && _angle <= 360)){
            target = 0
            component = 1
          }else if((_angle >= 30 && _angle <= 90)){
            target = 60
            component = 2
          }else if(_angle >= 90 && _angle <= 150){
            target = 120
            component = 3
          }else if(_angle >= 150 && _angle <= 210){
            target = 180
            component = 4
          }else if(_angle >= 210 && _angle <= 270){
            target = 240
            component = 5
          }else if(_angle >= 270 && _angle <= 330){
            target = 300
            component = 6
          }
        }

        if(component){
          if(component == 1 || component == 4){
            this.$router.push("/mixtures")
          }else if(component == 2 || component == 6){
            this.$router.push("/bases")
          }else if(component == 5 || component == 3){
            this.$router.push("/decoctions")
          }
        }

          let d = this.closestEquivalentAngle(baseAngle, target)     
          this.$refs.rotator.style.webkitTransform = "rotate(" + (d) + "deg)";      
          this.angle = d

          this.beingDragged = false
          this.iconAngle = -this.angle        
      }, 
      closestEquivalentAngle: function(from, to){
        var delta = ((((to - from) % 360) + 540) % 360) - 180;
        return from + delta;
      }
    }
  }

</script>