windowVar = window.addEventListener("scroll", showFunction());

function showFunction(){
    x = document.scrollTop;
    if (x > 10) {
        document.getElementById("toptexts2").style.display = "block";
    }else{
    }
}

var hover = 0;
var eventOne = document.getElementById("eventOne");
var events = [null];
var tempLeft = false;
var varTop = 0;
var lagHover = 0;
var timelineTime = [null];
var lagImgCss, lagPCss;
var buffer;

function setup(){
    events.push(document.getElementById("eventOne"));
    events.push(document.getElementById("eventTwo"));
    events.push(document.getElementById("eventThree"));
    events.push(document.getElementById("eventFour"));
    events.push(document.getElementById("eventFive"));
    events.push(document.getElementById("eventSix"));

    timelineTime.push(document.getElementById("firstTime"));
    timelineTime.push(document.getElementById("secondTime"));
    timelineTime.push(document.getElementById("thirdTime"));
    timelineTime.push(document.getElementById("fourthTime"));
    timelineTime.push(document.getElementById("fifthTime"));
    timelineTime.push(document.getElementById("sixthTime"));

    document.getElementById("popOut").style.opacity = "0";

    buffer=Date.now();
    document.getElementById("left").style.top = getPos(document.getElementById("memberPictureDiv")).y + 160;
    document.getElementById("right").style.top = getPos(document.getElementById("memberPictureDiv")).y + 160;
    document.getElementById("timelineTime").style.top = getPos(document.getElementById("timeline")).y + 215;
    console.log(document.getElementById("right").style.top);
}

function getPos(el) {
    // yay readability
    for (var lx=0, ly=0;
         el != null;
         lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return {x: lx,y: ly};
}

function light(){
    document.getElementById("left").style.top = getPos(document.getElementById("memberPictureDiv")).y + 160;
    document.getElementById("right").style.top = getPos(document.getElementById("memberPictureDiv")).y + 160;
    document.getElementById("timelineTime").style.top = getPos(document.getElementById("timeline")).y + 215;
    window.requestAnimationFrame(light);
}
window.requestAnimationFrame(light);


var onMouseOver = function(type){
    hover = type;
    update();
}
var onMouseOut = function(){
    hover = 0;
    temp = true;
    update();
}

var update = function(){
    if(hover == 0){
        for(i=0; i < events.length; i++){
            if(i != 0){
                events[i].style.width = "16.5%";
                events[i].style.height = "350px";
            }
        }
        
        if(lagHover != 0){
            events[lagHover].style.top = varTop;
            events[lagHover].getElementsByTagName("img")[0].style.paddingTop = lagImgCss;        
            events[lagHover].getElementsByTagName("p")[0].style.paddingTop = lagPmargin;
            events[lagHover].getElementsByTagName("p")[0].style.fontSize = lagPsize;
            switch(lagHover){
                case 1:
                    break;
                case 2:
                    timelineTime[lagHover].style.top = "90px"; 
                    break;
                case 3:
                    timelineTime[lagHover].style.top = "170px";
                    break;
                case 4:
                    timelineTime[lagHover].style.top = "110px";
                    break;
                case 5:
                    timelineTime[lagHover].style.top = "180px";
                    break;
                case 6:
                    timelineTime[lagHover].style.top = "150px";
                    break;
            }
        }
    }else{
        for(i=0; i < events.length; i++){
            if(i != 0){
                events[i].style.width = "13.8%";
                events[i].style.height = "350px";
            }
        }
        if(lagHover != 0){
            events[lagHover].style.top = varTop;
            events[lagHover].getElementsByTagName("img")[0].style.paddingTop = lagImgCss;        
            events[lagHover].getElementsByTagName("p")[0].style.paddingTop = lagPmargin;
            events[lagHover].getElementsByTagName("p")[0].style.fontSize = lagPsize;
            switch(lagHover){
                case 1:
                    break;
                case 2:
                    timelineTime[lagHover].style.top = "90px"; 
                    break;
                case 3:
                    timelineTime[lagHover].style.top = "170px";
                    break;
                case 4:
                    timelineTime[lagHover].style.top = "110px";
                    break;
                case 5:
                    timelineTime[lagHover].style.top = "180px";
                    break;
                case 6:
                    timelineTime[lagHover].style.top = "150px";
                    break;
            }
        }
        timelineTime[hover].style.top = "230px";
        lagImgCss = events[hover].getElementsByTagName("img")[0].style.paddingTop;        
        lagPmargin = events[hover].getElementsByTagName("p")[0].style.paddingTop;
        lagPsize = events[hover].getElementsByTagName("p")[0].style.fontSize;
        varTop = events[hover].style.top;
        events[hover].getElementsByTagName("img")[0].style.paddingTop = "10px";        
        events[hover].getElementsByTagName("p")[0].style.paddingTop = "100px";
        events[hover].getElementsByTagName("p")[0].style.fontSize = "30px";
        events[hover].style.top = "0";
        events[hover].style.width = "30%";
        events[hover].style.height = "500px";
        lagHover = hover;
    }
}


buffer1 = 0;
function popOut(){
    menu = document.getElementById("popOut");
    if(buffer1 == "0"){
        menu.style.left = "0px";
        menu.style.opacity = "1";
        document.getElementById("space").style.display = "none";
        document.getElementsByTagName("footer")[0].style.display = "none";
        buffer1 = 1;
    }else{
        buffer1 = 0;
        menu.style.left = "100%";
        menu.style.opacity = "0";
        document.getElementById("space").style.display = "block";
        document.getElementsByTagName("footer")[0].style.display = "block";
    }
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

function blank(){
    tempLeft = tempLeft;
}


function memberButton(x){
    if(Date.now() - buffer > 400){
        buffer = Date.now();
        document.getElementById("memberPictureDiv").scrollBy(x*490,0);
    }
}