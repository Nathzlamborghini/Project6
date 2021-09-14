var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6dec9a34-9fd5-4077-81c4-4285f0685403","fb16ebb9-f880-43f2-9d1b-9a442cae0b18","ce0ea2b6-2aaa-425b-a564-19b16b4bdfec","5e01252c-6960-4d4b-bc38-e996ac07da08","c25455c7-5315-4626-a1f8-cb9a1a477f3e","9535807b-78b2-4183-92a7-3809e5cbe931","407c8a81-0bbc-4031-8280-c03d63ef6ee1","c5e047fd-ee95-4bb9-acb5-b59d80bf59c9","8254c553-cd4d-4bca-b339-953acacf6947","c519a09a-0f5d-40eb-aa86-ab6df3b60aaa","7325ee9f-89eb-4a34-a802-44b2e4dd51e9"],"propsByKey":{"6dec9a34-9fd5-4077-81c4-4285f0685403":{"name":"b1","sourceUrl":"assets/api/v1/animation-library/gamelab/CjvVLLlokYZEBz_KBd.S.4ObmTBwIi7d/category_buildings/commercial_12.png","frameSize":{"x":336,"y":247},"frameCount":1,"looping":true,"frameDelay":2,"version":"CjvVLLlokYZEBz_KBd.S.4ObmTBwIi7d","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":336,"y":247},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CjvVLLlokYZEBz_KBd.S.4ObmTBwIi7d/category_buildings/commercial_12.png"},"fb16ebb9-f880-43f2-9d1b-9a442cae0b18":{"name":"sun","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":2,"looping":true,"frameDelay":12,"version":"_zoupuC2IVEi43aJ4SQgLLco.WD0rqV2","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":100},"rootRelativePath":"assets/fb16ebb9-f880-43f2-9d1b-9a442cae0b18.png"},"ce0ea2b6-2aaa-425b-a564-19b16b4bdfec":{"name":"robber","sourceUrl":null,"frameSize":{"x":40,"y":106},"frameCount":1,"looping":true,"frameDelay":12,"version":"9AU4rxAf5OyiXuFI.yUSvjMBAIo.VINC","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":106},"rootRelativePath":"assets/ce0ea2b6-2aaa-425b-a564-19b16b4bdfec.png"},"5e01252c-6960-4d4b-bc38-e996ac07da08":{"name":"diamond","sourceUrl":null,"frameSize":{"x":50,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZDnXzAU873iqkP8KJGExAESBRYfEBCsE","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":48},"rootRelativePath":"assets/5e01252c-6960-4d4b-bc38-e996ac07da08.png"},"c25455c7-5315-4626-a1f8-cb9a1a477f3e":{"name":"gold","sourceUrl":null,"frameSize":{"x":70,"y":59},"frameCount":1,"looping":true,"frameDelay":12,"version":"2ZPFjTgQzAd9eb48J8J647xSUslh5x.d","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":59},"rootRelativePath":"assets/c25455c7-5315-4626-a1f8-cb9a1a477f3e.png"},"9535807b-78b2-4183-92a7-3809e5cbe931":{"name":"heart","sourceUrl":null,"frameSize":{"x":30,"y":26},"frameCount":1,"looping":true,"frameDelay":12,"version":"Gj9sot7ncXNNKiKczl6TVbZ9e1ItDUxA","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":26},"rootRelativePath":"assets/9535807b-78b2-4183-92a7-3809e5cbe931.png"},"407c8a81-0bbc-4031-8280-c03d63ef6ee1":{"name":"bheart","sourceUrl":null,"frameSize":{"x":30,"y":26},"frameCount":1,"looping":true,"frameDelay":12,"version":"4y2sfPhEvG3rcGdgdNjAZfzuLziJTsBD","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":26},"rootRelativePath":"assets/407c8a81-0bbc-4031-8280-c03d63ef6ee1.png"},"c5e047fd-ee95-4bb9-acb5-b59d80bf59c9":{"name":"door","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"TiCo7Ym_nVi3nvwwt87JplwuORbQafes","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/c5e047fd-ee95-4bb9-acb5-b59d80bf59c9.png"},"8254c553-cd4d-4bca-b339-953acacf6947":{"name":"dooropen","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"CipQXf1V0tVrzWX.QyRMQUkgkjBKbyb9","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/8254c553-cd4d-4bca-b339-953acacf6947.png"},"c519a09a-0f5d-40eb-aa86-ab6df3b60aaa":{"name":"L - credit","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":false,"frameDelay":12,"version":"yZ0F5_0rHzsDzNNUj9UihHWwZH8a6VDg","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/c519a09a-0f5d-40eb-aa86-ab6df3b60aaa.png"},"7325ee9f-89eb-4a34-a802-44b2e4dd51e9":{"name":"credit","sourceUrl":null,"frameSize":{"x":30,"y":36},"frameCount":1,"looping":true,"frameDelay":12,"version":"vndO71BJKvp8LhQL5J7MgatQy1YF4Uu8","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":36},"rootRelativePath":"assets/7325ee9f-89eb-4a34-a802-44b2e4dd51e9.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bac = createSprite(200,200,400,400);
bac.shapeColor = ("cyan");
var b1 = createSprite(200,200,1,1);
b1.setAnimation("b1");
var b2 = createSprite(200,70,150,20);
b2.shapeColor = ("white");
var sun = createSprite(40,40,1,1);
sun.setAnimation("sun");
var c1 = createSprite(200,200,400,400);
c1.shapeColor = "grey";
var st1 = createSprite(56,340,10,130);
st1.visible = false;
var st2 = createSprite(27,280,50,10);
st2.visible = false;
var st3 = createSprite(4,340,10,130);
st3.visible = false;
var st4 = createSprite(27,400,50,10);
st4.visible = false;
var robber = createSprite(30,340,1,1);
robber.setAnimation("robber");
var bar1 = createSprite(175,260,350,10);
bar1.visible = false;
bar1.shapeColor = "green";
var bar2 = createSprite(225,120,350,10);
bar2.visible = false;
bar2.shapeColor = "green";
var laser1 = createSprite(100,330,10,100);
laser1.shapeColor = "red";
laser1.visible = false;
var laser2 = createSprite(215,70,10,70);
laser2.shapeColor = "red";
laser2.visible = false;
var laser3 = createSprite(345,330,10,80);
laser3.shapeColor = "red";
laser3.visible = false;
c1.visible = false;
var gold = createSprite(335,40,1,1);
gold.setAnimation("gold");
var diamond = createSprite(360,40,1,1);
diamond.setAnimation("diamond");
diamond.visible = false;
gold.visible = false;
var safe1 = createSprite(335,50,100,100);
safe1.shapeColor = "blue";
safe1.visible = false;
var safe2 = createSprite(350,50,40,40);
safe2.shapeColor = "black";
safe2.visible = false;
var safe3 = createSprite(355,50,10,10);
safe3.shapeColor = "red";
safe3.visible = false;
var c2 = createSprite(207,195,75,25);
c2.shapeColor = "yellow";
c2.visible = false;
var c3 = createSprite(200,200,400,400);
c3.shapeColor = "white";
c3.visible = false;
var heart = createSprite(30,30);
heart.setAnimation("heart");
heart.visible = false;
var heart2 = createSprite(375,325);
heart2.setAnimation("heart");
heart2.visible = false;
var credits = createSprite(100,25);
credits.setAnimation("credit");
credits.visible = false;
var door = createSprite(50,350);
door.setAnimation("door");
door.visible = false;
var gs = "s";
var life = 1;
var credits1 = 0;
var h;
function draw() {
  drawSprites();
  if(gs === "s"){
    t1();
    if (keyDown("1")) {
      c1.visible = true;
      diamond.visible = true;
      gold.visible = true;
      safe1.visible = true;
      safe2.visible = true;
      safe3.visible = true;
      bar1.visible = true;
      bar2.visible = true;
      laser1.visible = true;
      laser1.velocityY = -25;
      laser2.visible = true;
      laser2.velocityY = 25;
      laser3.visible = true;
      laser3.velocityY = -17;
      st1.destroy();
      st2.destroy();
      st3.destroy();
      st4.destroy();
      gs = "t";
    }
  }
  if(gs === "t"){
    lifetext();
    creditstext();
    heart.visible = true;
    heart2.visible = true;
    credits.visible = true;
    robber.visible = true;
    heart.setAnimation("heart");
    if (life == 0){
      life = 1;
    }
    if (robber.isTouching(heart2)){
    life = life + 1;
    gs = "t2";
    }
  }
  if(gs === "t2"){
    lifetext();
    creditstext();
    heart.visible = true;
    heart2.visible = true;
    credits.visible = true;
    robber.visible = true;
    heart.setAnimation("heart");
    if (life == 0){
      life = 1;
    }
    heart2.visible = false;
  }
  if(gs === "p"){
    fill("white");
    textSize(30);
    text("You lose",145,200);
    robber.visible = false;
    robber.x = 30;
    robber.y = 340;
    life = 0;
    lifetext();
    creditstext();
    heart.visible = true;
    heart.setAnimation("bheart");
    heart2.visible = true;
    credits.visible = true;
    resettext();
    if(keyDown("R") || keyDown("R")){
      gs = "t";
    }
    h = 0;
  }
  if(gs === "end") {
    safe1.destroy();
    safe2.destroy();
    safe3.destroy();
    laser1.destroy();
    laser2.destroy();
    laser3.destroy();
    lifetext();
    creditstext();
    heart.visible = true;
    heart2.visible = true;
    credits.visible = true;
  }
  if(gs === "end1") {
    fill("white");
    textSize(40);
    text("You win!",130,200);
    lifetext();
    creditstext();
    heart.visible = true;
    heart2.visible = true;
    credits.visible = true;
    if(life === 2){
      credits1 = 50;
    }
    if(life === 1){
      credits1 = 25;
    }
  }
  if (robber.isTouching(safe1)) {
    gs = "end";
  }
  if(robber.isTouching(laser1)){
    if(life === 2){
      if(robber.y>=120){
        robber.x = robber.x - 50;
      }
      if(robber.y<=120){
        robber.x = robber.x + 50;
      }
      life = life - 1;
    }  
  }
  if(robber.isTouching(laser2)){
    if(life === 2){
      if(robber.y>=120){
        robber.x = robber.x - 50;
      }
      if(robber.y<=120){
        robber.x = robber.x + 50;
      }
      life = life - 1;
    }  
  }
  if(robber.isTouching(laser3)){
    if(life === 2){
      if(robber.y>=120){
        robber.x = robber.x - 50;
      }
      if(robber.y<=120){
        robber.x = robber.x + 50;
      }
      life = life - 1;
    }  
  }
  if(life === 1){
    if(robber.isTouching(laser1)){
      gs = "p";
    }
    if(robber.isTouching(laser2)){
      gs = "p";
    }
    if(robber.isTouching(laser3)){
      gs = "p";
    }
  }
  if (keyDown("UP_ARROW")) {
    robber.y = robber.y - 15;
  }
  if (keyDown("DOWN_ARROW")) {
    robber.y = robber.y + 15;
  }
   if (keyDown("LEFT_ARROW")) {
    robber.x = robber.x - 15;
  }
  if (keyDown("RIGHT_ARROW")) {
    robber.x = robber.x + 15;
  }
  if (robber.isTouching(safe1)) {
    gs = "end";
  }
  if (robber.isTouching(diamond)) {
    gs = "end1";
  }
  if (robber.isTouching(gold)) {
    gs = "end1";
  }
  createEdgeSprites();
  robber.bounceOff(topEdge);
  robber.bounceOff(bottomEdge);
  robber.bounceOff(leftEdge);
  robber.bounceOff(rightEdge);
  robber.bounceOff(st1);
  robber.bounceOff(st2);
  robber.bounceOff(st3);
  robber.bounceOff(st4);
  robber.bounceOff(bar1);
  robber.bounceOff(bar2);
  laser1.bounceOff(topEdge);
  laser1.bounceOff(bottomEdge);
  laser2.bounceOff(topEdge);
  laser2.bounceOff(bottomEdge);
  laser3.bounceOff(safe1);
  laser3.bounceOff(bottomEdge);
  laser3.bounceOff(topEdge);
}
function lifetext(){
  fill("red");
  textSize(20);
  text("= " + life,50,35);
}
function creditstext(){
  fill("red");
  textSize(20);
  text("= " + credits1,120,35);
}
function t1() {
  fill("green");
  textSize(20);
  text("level 1",170,355);
  textSize(15);
  text("Click 1 to start",155,375);
  textSize(15);
  text("DIAMOND MUSEUM",130,75);
}
function resettext(){
  text("Click r to reset",140,220);
}
function lvl2door() {
  
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
