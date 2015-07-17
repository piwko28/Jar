# Jar
Jarallax extension


Requires: Jarallax 0.2.4b


Date: December 23, 2013

License: The MIT License (http://opensource.org/licenses/MIT)

Put in head: Jarallax and this file.


Example of using:

```js
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
  ```
  
  Check other simple example running index.html
