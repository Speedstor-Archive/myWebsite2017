var MouseHandler = (function() {
    var x = 0;
    var y = 0;
    var mouseIn = false;
    var mouseClicked = false;

    var init = function(eventSrc){
        eventSrc.addEventListener('mousemove', onMouseMove);
        eventSrc.addEventListener('mouseout', onMouseOut);
        eventSrc.addEventListener('mouseover', onMouseOver);
        eventSrc.addEventListener('click', onMouseClick);
        
        console.log("hello, this is working");
    };

    var onMouseClick = function(){
        if(isInside(getPos(), rec)){
            Handler.push(new Enemy(getPos().x, getPos().y, Math.floor(Math.random()*4 + 2), Math.floor(Math.random()*4 + 2)));
        }
    }

    var onMouseOut = function() {
        mouseIn = false;
    };

    var onMouseOver = function(){
        mouseIn = true;
    };

    var onMouseMove = function(e){
        x = e.clientX - width *12/100;
        y = e.clientY - 58;
        if(isInside(getPos(), rec)){
            hover = true;
        }else hover = false;
    };

    var getPos = function(){
        return{
            x: x,
            y: y
        };
    };

    var isMouseIn = function(){
        return mouseIn;
    }

    var tick = function(){
        mouseClicked = false;
    }

    var isClicked = function(){
        return mouseClicked;
    }

    return{
        init: init,
        getPos: getPos,
        isMouseIn: isMouseIn,
        isClicked: isClicked,
        tick: tick
    }
}());

var store = 0;
var runClock = 0;
width = window.innerWidth *80/100;
height = window.innerHeight * 80 / 100;
var fps = 0;
var Handler = [];
radius = 28.2;
var rec = {
    x: 0,
    y: 0,
    width: 100,
    height: 200
}
var hover = false;


var init = function(){
    MouseHandler.init(document);
    Handler.push(new Enemy(Math.floor(Math.random()*width), Math.floor(Math.random()*height), Math.floor(Math.random()*4 + 2), Math.floor(Math.random()*4 + 2)));
    Handler.push(new Button(10, 10, 70, 50));
    update();
}


var update = function(timestamp){
    c = document.getElementById('canvas1');
    c.width = window.innerWidth * 80/100;
    c.height= window.innerHeight* 80/100;
    width = window.innerWidth * 80/100;
    height = window.innerHeight * 80 / 100;

    tick();
    runClock++;
    if(runClock > 20){ //after one second
        runClock = 0;
    }

    g = c.getContext('2d');

    //background
    g.fillStyle = '#2d2d2d';
    g.fillRect(0, 0, c.width, c.height);

    render(g);
    fps++;
    
    window.requestAnimationFrame(update);
};
window.requestAnimationFrame(update);


var Player = (function(){
    var x;
    var y;

    var tick = function(){
        x = MouseHandler.getPos().x;
        y = MouseHandler.getPos().y;
    }
    var render = function(g){
        fillCircle(g, x, y, 39, 3, 'red');
    }
    var getPos = function(){
        return{
            x: x,
            y: y
        }
    }

    return{
        tick: tick,
        render: render,
        getPos: getPos
    }
}());


function Enemy(x, y, xSpeed, ySpeed){
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.render = function(g){
        centerX = this.x + 20;
        centerY = this.y + 20;
        x1 = centerX - Player.getPos().x;
        y1 = centerY - Player.getPos().y;
        
        if(39 + radius > Math.sqrt((x1*x1) + (y1* y1))){
            this.xSpeed =  (-(this.xSpeed));
            this.ySpeed =  (-(this.ySpeed));
            if(x1 > 0) this.x += 10;
            else if(x1 < 0) this.x -= 10;
        }

        if(this.xSpeed == 0){
            this.xSpeed = 3;
        }
        
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x > width - 40){
            this.xSpeed =  (-(this.xSpeed));   
            this.x -= 10;
        }else if(this.x < 0){
            this.xSpeed =  (-(this.xSpeed));   
            this.x += 10;
        }
        if(this.y > height - 40){
            this.ySpeed = 0 - this.ySpeed;
            this.y -= 10;
        }else if(this.y < 0){
            this.ySpeed = 0 - this.ySpeed;
            this.y += 10;
        }

        g.fillStyle = '#d19e14';
        g.fillRect(this.x, this.y, 40, 40);
    };
}

function Button(x, y, width, height){
    this.x  = x;
    this.y  = y;
    this.width = width;
    this.height = height;
    rec = {
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height
    }
    this.render = function(g){
        if(hover){
            g.strokeStyle = '#848484'
        }else g.strokeStyle = 'white';
        roundRect(g, x, y, width, height, 20, false, true);

        g.font = "19px Comic Sans MS";
        g.fillStyle = 'white';
        g.fillText("More", this.x + 10, this.y + 30);
    }
}

var render = function(g){

    for(i = 0; i < Handler.length; i++){
        Handler[i].render(g);
    }
    Player.render(g);

    MouseHandler.tick();
}

var tick = function(){
    Player.tick();
}


function fillCircle(cc1, locX, locY, radius, width, color){
    cc = cc1;
    cc.beginPath();
    cc.arc(locX, locY, radius, 0, 2 *Math.PI, true);
    cc.lineWidth = width;
    cc.strokeStyle = color;
    cc.stroke();
}

function fillRect(g, x, y, width, height, color){
    g.fillStyle = color;
    g.fillRect(x, y, width, height);
}

function isInside(pos, rect){
    return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
}

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
    if (typeof stroke == 'undefined') {
      stroke = true;
    }
    if (typeof radius === 'undefined') {
      radius = 5;
    }
    if (typeof radius === 'number') {
      radius = {tl: radius, tr: radius, br: radius, bl: radius};
    } else {
      var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
      for (var side in defaultRadius) {
        radius[side] = radius[side] || defaultRadius[side];
      }
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    if (fill) {
      ctx.fill();
    }
    if (stroke) {
      ctx.stroke();
    }
  
  }