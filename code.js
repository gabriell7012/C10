var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5650c194-7041-4d6c-abf2-bcc1bb8c8d44"],"propsByKey":{"5650c194-7041-4d6c-abf2-bcc1bb8c8d44":{"name":"volei","sourceUrl":null,"frameSize":{"x":393,"y":394},"frameCount":4,"looping":true,"frameDelay":3,"version":"DSJ7w2ZmTLpq.llQdJlQQXcNGk40ZZiH","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":786,"y":788},"rootRelativePath":"assets/5650c194-7041-4d6c-abf2-bcc1bb8c8d44.png"}}};
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


var playerPaddle= createSprite(390,200,10,100);
    playerPaddle.shapeColor="blue";
    var computerPaddle= createSprite(10,200,10,100);
    computerPaddle.shapeColor="red";
    var ball= createSprite(200,200,10,10);
   // ball.shapeColor="yellow";
   ball.setAnimation("volei");
   ball.scale = 0.09;

function draw() {
  background(220);
 if (keyDown("space")) {
     ball.velocityX=2;
        ball.velocityY=4;
  }
   
  if (keyDown("w")) {
    playerPaddle.y= playerPaddle.y-8;
    
  }
  if (keyDown("s")) {
 playerPaddle.y = playerPaddle.y+8;
      
    } 
    computerPaddle.y=ball.y;
  createEdgeSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(computerPaddle);
  ball.bounceOff(playerPaddle);
  drawSprites();
  
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
