<template>
  <nav class="flex-grow hidden md:flex menu-container relative overflow-hidden" id="container">
    <div class="fixed left-[500px] -bottom-[150px]">
      <div class="ml-[50px] relative">
        <div class="menu-inner-hexagon rotate-counter-40 menu-bg"></div>
        <div class="menu-inner-star rotate-counter-40 menu-bg"></div>
        <div class="menu-center-vortex rotate-30 menu-bg"> </div>


        <div class="w-full h-full">

          <div class="w-[800px] h-[800px] relative flex-none" id="menu-canvas-container">
            <canvas id="canvas" width="100%" height="100%" class="w-full h-full"></canvas>
          </div>

        </div>
      </div>
      <div class="looking-glass left-[44px] rounded-full absolute z-10 pointer-events-none"></div>
      <div class="looking-glass-outer left-[36px] rounded-full absolute z-10 pointer-events-none"></div>
      <div class="absolute w-[52px] top-1/2 h-1 border bg-white pointer-events-none z-10"></div>
    </div>
  </nav>
</template>

<script>
  import {mapState} from 'vuex'

  var R2D = 180 / Math.PI
  var D2R = Math.PI / 180

// this.$store.getters.isTouchScreen

  export default {
    props: {
      startValue: {
        type: String
      }
    },
    data: function(){
      return {

      }
    }, 
    computed: {

    }, 
    mounted: async function(){
      if(this.startValue){
        this._initialAngle = 0;
        switch(this.startValue){
          case "bases": 
            this._initialAngle = this.closestEquivalentAngle(0, 60)  
            break   
          case "mixtures":
            this._initialAngle = this.closestEquivalentAngle(0, 0)
            break
          case "decoctions":
            this._initialAngle = this.closestEquivalentAngle(0, 120)
            break
        }
      }

      let images = [{path: '/assets/images/icons/icon-mixturer.svg', w: 0.066, h: 0.076, label: 'Mixturer'}, {path: '/assets/images/icons/icon-dekokter.svg', w: 0.095, h: 0.095, label: 'Dekokter'}, {path: '/assets/images/icons/icon-baser.svg', w: 0.082, h: 0.078, label: 'Baser'}]
      let icons = await Promise.all(images.map(function(img_path){
        return new Promise(function(resolve, reject){
          let img = new Image()
          img.onload = function(){
            resolve(img_path)
          }
          img.src = img_path.path
          img_path.icon = img
        })
      }))
      setTimeout(() => {
        this.setup(icons)    
      }, 100)
    },   
    methods: {
      setup: function(icons){
        var _t = this
        let container = document.getElementById('menu-canvas-container')
        let canvas = document.getElementById('canvas')

        var cX, cY;
        var offX, offY;
        var dragging = false;
        var targetAngle;
        var elapsed = 0;

        offX = canvas.offsetLeft;
        offY = canvas.offsetTop;

        let draggedAngle = (this._initialAngle || 0)

        let width = container.offsetWidth
        let height = container.offsetHeight

        let rect = canvas.getBoundingClientRect()

        cX = rect.left + (width/2)
        cY = rect.top + (height/2)

        let centerX = width/2
        let centerY = height/2

        var scale = window.devicePixelRatio; 
                    
        canvas.width = Math.floor(width * scale);
        canvas.height = Math.floor(height * scale);

        const ctx = canvas.getContext("2d");
        ctx.scale(scale, scale);


        let angleSteps = 60*D2R
        let dist = width*0.388

        let focusPoints = []
        let sections = ['mixtures', 'decoctions', 'bases']
        for(var i = 0; i < 6; i++){
          focusPoints.push([(centerX + (dist*Math.cos(i*angleSteps))), (centerY + (dist*Math.sin(i*angleSteps))), sections[i % 3], i])
        }

        function draw(time){
          ctx.clearRect(0, 0, width, height)        
          ctx.save()

          if(!dragging && targetAngle && !(targetAngle == 0)){
            var normalisedAngle = Math.atan2(Math.sin((draggedAngle - targetAngle)), Math.cos((draggedAngle - targetAngle)))
            if(normalisedAngle == 0){
              targetAngle = null
            }else{
              draggedAngle -= normalisedAngle/10
            }
          }
          ctx.translate(width/2, height/2)
          ctx.rotate(draggedAngle);
          ctx.translate(-(width/2), -(height/2))            

          ctx.strokeStyle = "#ffffff"


          ctx.lineWidth = 1
          ctx.beginPath()
          for(var i = 0; i < focusPoints.length; i++){
            let point = focusPoints[i]
            if(i == 0){
              ctx.moveTo(point[0], point[1])
            }
            ctx.lineTo(point[0], point[1])       
          }
          ctx.lineTo(focusPoints[0][0], focusPoints[0][1])
          ctx.stroke()
          ctx.closePath()

          ctx.beginPath()
          ctx.arc(centerX, centerY, (width/2)*0.82, 0, 2 * Math.PI)
          ctx.stroke()
          ctx.closePath()

          ctx.setLineDash([1,4])
          ctx.beginPath()
          ctx.moveTo(focusPoints[0][0], focusPoints[0][1])
          ctx.lineTo(focusPoints[2][0], focusPoints[2][1])
          ctx.lineTo(focusPoints[4][0], focusPoints[4][1])
          ctx.lineTo(focusPoints[0][0], focusPoints[0][1])
          ctx.stroke()
          ctx.closePath()

          ctx.beginPath()
          ctx.moveTo(focusPoints[1][0], focusPoints[1][1])
          ctx.lineTo(focusPoints[3][0], focusPoints[3][1])
          ctx.lineTo(focusPoints[5][0], focusPoints[5][1])
          ctx.lineTo(focusPoints[1][0], focusPoints[1][1])
          ctx.stroke()
          ctx.closePath()
          ctx.setLineDash([])

          ctx.lineWidth = 2
          ctx.fillStyle = '#000000'
          for(var i = 0; i < 6; i++){
            let point = focusPoints[i]
            ctx.beginPath();
            ctx.lineCap = 'round';
            ctx.arc(point[0], point[1], (width*0.22)/2, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fill()
            ctx.closePath()
          }

          ctx.font = `${width*0.0275}px louvette-banner, serif`
          ctx.fillStyle = '#ffffff'
          ctx.textAlign = 'center'
          for(var i = 0; i < 6; i++){
            let point = focusPoints[i]
            var icon = icons[i % 3]    
            var iconWidth = width*icon.w
            var iconHeight = height*icon.h

            ctx.save()
            ctx.translate(point[0], point[1])
            ctx.rotate(-draggedAngle)
            ctx.drawImage(icon.icon, 0 - iconWidth/2, 0 - (iconHeight/2 + (width*0.03)), iconWidth, iconHeight)
            ctx.fillText(icon.label, 0, (width*0.05))
            ctx.restore()
          }

          ctx.restore()

          elapsed = time

          window.requestAnimationFrame(draw);
        }

        canvas.addEventListener((_t.$store.getters.isTouchScreen ? "touchstart" : "mousedown"), function(event){
          var clickAngle = _t.getAngle(cX + offX, cY + offY, event.clientX, event.clientY) - draggedAngle;
          var list = function(ev){

            dragging = true      
            draggedAngle = (_t.getAngle(cX + offX, cY + offY, ev.clientX, ev.clientY) - clickAngle)
          }
          canvas.addEventListener((_t.$store.getters.isTouchScreen ? "touchmove" : "mousemove"), list)

          var complete = function(event){
            canvas.removeEventListener((_t.$store.getters.isTouchScreen ? "touchmove" : "mousemove"), list)
            canvas.removeEventListener((_t.$store.getters.isTouchScreen ? "touchend" : "mouseup"), complete)
            if(dragging){
              dragging = false
              let _angle = (((draggedAngle*R2D) % 360) + 360) % 360
              if(_angle > 180){
                _angle -= 360
              }
              var section;
              var target;
              switch(true){
              case (_angle > -30 && _angle < 30):
                target = 0
                section = "mixtures"        
                break
              case (_angle > 145 && _angle < 180):
                target = 180
                section = "mixtures"    
                break    
              case (_angle > -180 && _angle < -145):
                target = -180
                section = "mixtures"        
                break;
              case (_angle > 30 && _angle < 90):
                target = 60
                section = "bases"
                break
              case (_angle > -145 && _angle < -90):
                target = -120
                section = "bases"
                break;
              case (_angle > 90 && _angle < 150):
                target = 120
                section = "decoctions"
                break
              case (_angle > -90 && _angle < -30):
                target = -60
                section = "decoctions"
                break;
              }
              targetAngle = _t.closestEquivalentAngle(_angle, target)
              _t.$router.push("/"+section)

            }else{
              let mousePos = _t.getMouse(event, canvas)
              let angle = _t.getAngle(width/2, height/2, mousePos.x, mousePos.y)
              var clickTarget;
              for(var i = 0; i < focusPoints.length; i++){
                var x1 = focusPoints[i][0] - centerX
                var y1 = focusPoints[i][1] - centerY

                var x2 = x1 * Math.cos(draggedAngle) - y1 * Math.sin(draggedAngle)
                var y2 = x1 * Math.sin(draggedAngle) + y1 * Math.cos(draggedAngle)

                var rotatedPoint = [x2 + centerX, y2 + centerY]

                var xDist = mousePos.x - rotatedPoint[0];
                var yDist = mousePos.y - rotatedPoint[1];
                var distance = Math.sqrt(xDist * xDist + yDist * yDist);
                if(distance < 75){
                  clickTarget = focusPoints[i]
                  break;
                }
              }
              if(clickTarget){
                let comparisonAngle = angle * R2D
                var diff = 0
                let roundedAngle = _t.roundNearest((angle * R2D), 60)
                diff = ((roundedAngle >= 0) ? (180 - roundedAngle) : (180 - roundedAngle))*D2R
                targetAngle = draggedAngle + diff
                _t.$router.push("/"+clickTarget[2])
                clickTarget = null
              }              
            }
          }
          canvas.addEventListener((_t.$store.getters.isTouchScreen ? "touchend" : "mouseup"), complete)
        })

        window.requestAnimationFrame(draw);
      }, 
      getAngle( cX, cY, mX, mY ){
        var angle = Math.atan2(mY - cY, mX - cX);
        return angle;
      }, 
      closestEquivalentAngle(from, to){
        var delta = ((((to - from) % 360) + 540) % 360) - 180;
        let angle = (from + delta)*D2R
        return (angle == 0 ? angle += 0.01 : angle);
      },
      roundNearest: function(value, nearest){
        return Math.round(value / nearest) * nearest
      },
      getMouse(e, canvas) {
        var element = canvas, offsetX = 0, offsetY = 0, mx, my;
        if (element.offsetParent !== undefined) {
          do {
            offsetX += element.offsetLeft;
            offsetY += element.offsetTop;
          } while ((element = element.offsetParent));
        }
        mx = e.pageX - offsetX;
        my = e.pageY - offsetY;
        return {x: mx, y: my};
      }
    }
  }

</script>