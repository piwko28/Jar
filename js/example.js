$(document).ready(function() {

    $("body").height(window.innerHeight * $(".slide").length);

    jarallax = new Jarallax(new ControllerScroll(true));
    jarallax.setDefault('.slide',{opacity:0, display:'none'});
    jarallax.setDefault('.slide.starting',{opacity:1, display:'block'});

    var green = new Container('.green', 1);
    green.addAnimation([
        { progress : 0,  display:'block' , opacity:'1', top:'0%'},
        { progress : 0.5, display:'block' , opacity:'1', top:'0%'},
        { progress : 1, display:'none' , opacity:'1', top:'-100%' }
    ]);

    var red = new Container('.red', 3);
    red.addAnimation([
        { progress : -0.5,  display:'block' , opacity:'1', top:'100%'},
        { progress : 0,  display:'block' , opacity:'1', top:'0%'},
        { progress : 2.5, display:'block' , opacity:'1', top:'0%'},
        { progress : 3, display:'none' , opacity:'1', top:'-100%' }
    ]);

    var blue = new Container('.blue', 1);
    blue.addAnimation([
        { progress : -0.5,  display:'block' , opacity:'1', top:'100%'},
        { progress : 0,  display:'block' , opacity:'1', top:'0%'},
        { progress : 0.5, display:'block' , opacity:'1', top:'0%'},
        { progress : 1, display:'none' , opacity:'1', top:'-100%' }
    ]);

    var orange = new Container('.orange', 1);
    orange.addAnimation([
        { progress : -0.5,  display:'block' , opacity:'1', top:'100%'},
        { progress : 0,  display:'block' , opacity:'1', top:'0%'},
        { progress : 0.5, display:'block' , opacity:'1', top:'0%'},
        { progress : 1, display:'none' , opacity:'1', top:'-100%' }
    ]);

    var purple = new Container('.purple', 1);
    purple.addAnimation([
        { progress : -0.5,  display:'block' , opacity:'1', top:'100%'},
        { progress : 0,  display:'block' , opacity:'1', top:'0%'},
        { progress : 1.01, display:'block' , opacity:'1', top:'0%'}
    ]);

    createJar([
        green,
        red,
        blue,
        orange,
        purple
    ]);

});