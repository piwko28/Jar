/**
 * Jar (Jarallax Extension)
 *
 * @version     1.0
 * @author      Szymon Piwowarczyk (piwowarczyk.net)
 * @requires Jarallax 0.2.4b
 *
 * @description
 * Date: December 23, 2013
 * License: The MIT License (http://opensource.org/licenses/MIT)
 * Put in head: Jarallax and this file.
 *
 * @example
 * Use:
 *
  var numSlides = 8;
  $("body").height(window.innerHeight * numSlides);
  jarallax = new Jarallax(new ControllerScroll(true));
  jarallax.setDefault('#content section',{position:'fixed', opacity:0, display:'none'});
  var intro = new Container('section#intro', 1);
  intro.addAnimation([
      { progress : 0,  display:'block' , opacity:'1', top:'0%'},
      { progress : 1, display:'none' , opacity:'1', top:'-100%' }
  ]);
  intro.addAnimation([
    { progress : 0, top : '0px', opacity : 1 },
    { progress : 0.5, top : '100px', opacity : 0 },
    { progress : 1, top : '100px', opacity : 0 }
  ], 'section#intro article');
 */
var Container = function(selector, duration) {
    var that = this;
    var Animation = function(steps, selector) {
        this.steps = steps;
        this.selector = selector;
        return this;
    };
    that.selector = selector;
    that.duration = (duration? duration : 1);
    this.startpoint = 0;
    this.percentage = 0;
    this.endpoint = 0;
    that.animations = new Array();
    that.children = new Array();
    that.addAnimation = function(steps, selector) {
        that.animations.push(new Animation(steps, selector));
    };
    that.addContainer = function(selector, duration) {
        that.children.push(new Container(selector, duration));
    };
    that.scrollHere = function(percent) {
        jarallax.jumpToProgress(that.startpoint + (percent? percent : 0) * that.percentage, 1000, 25);
    };
    return that;
};

var createJar = function(containers) {
    var generateAnimations = function(children, percentage, startpoint) {
        var max = 0;
        for(var i in children) {
            max += children[i].duration;
        }
        var progress = 0;
        for(var i in children) {
            var child = children[i];
            child.startpoint = startpoint + percentage * progress;
            if(child.children.length > 0) {
                generateAnimations(child.children, percentage * child.duration / max, progress);
            }
            progress += child.duration / max;
            child.percentage = percentage * child.duration / max;
            child.endpoint = child.startpoint + child.percentage;
            for(var j in child.animations) {
                var animation = child.animations[j];
                var selector = (animation.selector? animation.selector : child.selector);
                for(var k = 0; k < animation.steps.length; k++) {
                    var step = animation.steps[k];
                    step.progress = ((step.progress? child.startpoint + step.progress * percentage / max : child.startpoint) * 100) + '%';
                }
                jarallax.addAnimation(selector, animation.steps);
            }
        }
    };
    generateAnimations(containers, 1, 0);
};