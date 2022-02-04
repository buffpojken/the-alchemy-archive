function setupMenu(win){
  (function() {
    var init, rotate, start, stop,
      active = false,
      hasClicked = false,
      hasCommited = false,
      animationClass = null,
      hasMoved = false,
      angle = 0,
      rotation = 0,
      startAngle = 0,
      center = {
        x: 0,
        y: 0
      },
      R2D = 180 / Math.PI,
      rot = document.getElementById('rotate');
      rot.addEventListener('transitionend', () => {
        rot.classList.remove(animationClass);
      });
    init = function() {
      rot.addEventListener("mousedown", start, false);
      document.addEventListener('mousemove', function(event){        
        if (active === true) {
          Alpine.store('nav').beingDragged = true
          event.preventDefault();
          rotate(event);
        }else if(hasClicked){
          active = true
        }
      })

      document.addEventListener('mouseup', function(event){
        event.preventDefault();            
        stop(event);            
      })
    };

    start = function(e) {
      e.preventDefault();
      var bb = this.getBoundingClientRect(),
        t = bb.top,
        l = bb.left,
        h = bb.height,
        w = bb.width,
        x, y;
      center = {
        x: l + (w / 2),
        y: t + (h / 2)
      };
      x = e.clientX - center.x;
      y = e.clientY - center.y;
      startAngle = R2D * Math.atan2(y, x);
      hasClicked = true
      return;
    };

    rotate = function(e) {
      e.preventDefault();
      if(hasCommited){return}
      var x = e.clientX - center.x,
        y = e.clientY - center.y,
        d = R2D * Math.atan2(y, x);
      rotation = d - startAngle;
      Alpine.store('nav').angle = -(angle + rotation)
      return rot.style.webkitTransform = "rotate(" + (angle + rotation) + "deg)";
    };

    stop = function(ev) {
      hasClicked = false
      angle += rotation;
      hasCommited = true
      if(active){
        defineSection(angle)
        Alpine.store('nav').angle = -angle     
        setTimeout(function(){
          active = false
          hasCommited = false
        }, 25)
      }
      return
    };

    closestEquivalentAngle = function(from, to) {
        var delta = ((((to - from) % 360) + 540) % 360) - 180;
        return from + delta;
    }

    defineSection = function(baseAngle){
      let _angle = ((baseAngle) % 360)
      animationClass = 'transition-transform'
      rot.classList.add(animationClass);
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
        Alpine.store('nav').component = component            
      }

        let d = closestEquivalentAngle(baseAngle, target)     
        rot.style.webkitTransform = "rotate(" + (d) + "deg)";      
        angle = d

        Alpine.store('nav').beingDragged = false
        Alpine.store('nav').angle = -angle        
    }

    goToSection = function(el){
      let index = el.getAttribute('data-index')
      let target = 0
      if(index == "1"){
        target = 0
      }else if(index == "2"){
        target = -60
      }else if(index == "3"){
        target = -120
      }else if(index == "4"){
        target = 180
      }else if(index == "5"){
        target = 120
      }else if(index == "6"){
        target = 60
      }      

      if(index){
        Alpine.store('nav').component = index
      }
      let d = closestEquivalentAngle(angle, target)        
      let diff = Math.abs(d) - Math.abs(Alpine.store('nav').angle) 
      if(diff == 60){
        animationClass = 'animation-fast'
      }else if(diff == 120){
        animationClass = 'animation-medium'        
      }else if(diff == 180){
        animationClass = 'animation-slow'                
      }

      rot.classList.add(animationClass);
      console.log("conflict")
      rot.style.webkitTransform = "rotate(" + (d) + "deg)";      
      angle = d
      Alpine.store('nav').angle = -angle
    }

    let items = document.querySelectorAll('.menu-item')
    for(var i = 0; i < items.length; i++){
      var j = i
      let item = items[i]
      items[i].addEventListener('click', function(ev){
        if(!active){
          goToSection(ev.target)          
        }
      })
    }

    init();
  }).call(win)
}