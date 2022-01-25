function setupMenu(win){
  (function() {
    var init, rotate, start, stop,
      active = false,
      angle = 0,
      rotation = 0,
      startAngle = 0,
      center = {
        x: 0,
        y: 0
      },
      R2D = 180 / Math.PI,
      rot = document.getElementById('rotate');

    init = function() {
      rot.addEventListener("mousedown", start, false);
      document.addEventListener('mousemove', function(event){
        if (active === true) {
          event.preventDefault();
          rotate(event);
        }            
      })

      document.addEventListener('mouseup', function(event){
        event.preventDefault();            
        stop(event);            
      })

    };

    start = function(e) {
      rot.classList.remove('transition-transform');
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
      return active = true;
    };

    rotate = function(e) {
      e.preventDefault();
      var x = e.clientX - center.x,
        y = e.clientY - center.y,
        d = R2D * Math.atan2(y, x);
      rotation = d - startAngle;
      Alpine.store('nav').angle = -(angle + rotation)
      return rot.style.webkitTransform = "rotate(" + (angle + rotation) + "deg)";
    };

    stop = function() {
      angle += rotation;
      defineSection(angle)
      Alpine.store('nav').angle = -angle
      return active = false;
    };

    closestEquivalentAngle = function(from, to) {
        var delta = ((((to - from) % 360) + 540) % 360) - 180;
        return from + delta;
    }

    defineSection = function(baseAngle){
      let _angle = ((baseAngle) % 360)
      rot.classList.add('transition-transform');
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
          component = 6
        }else if(_angle >= 90 && _angle <= 150){
          target = 120
          component = 5
        }else if(_angle >= 150 && _angle <= 210){
          target = 180
          component = 4
        }else if(_angle >= 210 && _angle <= 270){
          target = 240
          component = 3
        }else if(_angle >= 270 && _angle <= 330){
          target = 300
          component = 2
        }
      }
      if(component){
        Alpine.store('nav').component = component            
      }
      let d = closestEquivalentAngle(baseAngle, target)        
      rot.style.webkitTransform = "rotate(" + (d) + "deg)";
      angle = d
      Alpine.store('nav').angle = -angle
    }

    let items = document.querySelectorAll('.menu-item')
    for(var i = 0; i < items.length; i++){
      items[i].addEventListener('click', function(){
        
      })
    }

    init();
  }).call(win)
}