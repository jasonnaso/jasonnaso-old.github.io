var gameObj = {
    
    init: function(){

        $('#startGame').on('click', function(e){

            $('#startGame').off('click');
            $(document).off('keydown');
            gameObj.gptGame();
            $('.overlay').delay(200).fadeOut(200);
        });

        $(document).keydown(function(e) {

            if (e.keyCode == 32) {
                $(document).off('keydown');
                $('#startGame').off( 'click');
                gameObj.gptGame();
                $('.overlay').delay(200).fadeOut(200);
            }
        });
    
    },

    gptGame: function (){

        var gameTimer = 30;
        var sitePlacementX = 100;
        var sitePlacementY = 100;

        var trSitePlacementX = sitePlacementX;
        var trSitePlacementY = sitePlacementY;
        var siteVelocity = 300;
        var siteMaxSpeed = 1200;
        var gameTries = 0;
        var score = 0;
        var scoreText;
        var gunCockingSound;
        var gunShotSound;
        var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gptGame', { preload: preload, create: create, update: update});

        function preload() {
            

            game.load.image('gamePlayBackground', 'assets/images/gamePlayBackground.png');
            game.load.image('overlayBackground', 'assets/images/overlay.png');
            game.load.image('crate', 'assets/images/crate.png');
            game.load.image('target', 'assets/images/target.png');

            game.load.image('transparentSite', 'assets/images/test.png');
            game.load.image('gunSite', 'assets/images/gunSite.png');

            game.load.image('ground', 'assets/images/platform.png');
            game.load.image('btnStartGame', 'assets/images/btnStartGame.png', 193, 71);
            game.load.image('btnSetAim', 'assets/images/btnSetAim.png', 193, 71);
            game.load.image('btnFire', 'assets/images/btnFire.png', 193, 71);
                                    //103 width 131 height 8 amount of sprites inkl. blank
            game.load.spritesheet('target-sprite', 'assets/images/target-sprite.png',103, 131,8);

            game.load.audio('gunShot', ['assets/audio/gunShot.mp3']);
            game.load.audio('guncocking', ['assets/audio/gunCocking.mp3']);
            game.load.audio('theme', ['assets/audio/theme.mp3']);

        }

        function create() {


            console.log("create");

            theme = game.add.audio('theme');
            theme.play();

            $(document).off('keydown');
            $('#startGame').off( 'click');
            
            //  Enable the Arcade Physics system
            game.physics.startSystem(Phaser.Physics.ARCADE);
            
            //  Background for game
            game.add.sprite(0, 0, 'gamePlayBackground');

            ///////////////////Create Barrels/////////////////////////

            //  The crate group contains all crates in the game
            crate = game.add.group();

            //  Enable physics for any object that is created in the crate group
            crate.enableBody = true;
            
            newCrate = crate.create(100, 376, 'crate');

            //  Imovable stops newCrate from falling away when hit
            newCrate.body.immovable = true;

            newCrate = crate.create(350, 376, 'crate');

            newCrate.body.immovable = true;

            newCrate = crate.create(360, 255, 'crate');

            newCrate.body.immovable = true;


            ///////////////////Create target/////////////////////////
            targets = game.add.group();
            targets.enableBody = true;

            //  Create  three barrels
            target = targets.create(110, 250, 'target');
            
            // target.body.immovable = true;

            target = targets.create(375, 127, 'target');
            
            // target.body.immovable = true;

            target = targets.create(610, 370, 'target');
            
            // target.body.immovable = true;
            

            //////////// Create Site Call/////////////////
            createGunSite();
            
            //////////// Create Ground/Platform/////////////////
            //The platform group contains the ground and the 2 ledges we can jump on
            platform = game.add.group();

            //We will enable physics for any object that is created in this group
            platform.enableBody = true;
            platform.visible = false;

            //Here we create the ground.
            ground = platform.create(0, game.world.height - 95, 'ground');

            //Scale it to fit the width of the game (the original sprite is 50x32 in size)
            ground.scale.setTo(2, 2);

            //This stops it from falling away when you jump on it
            ground.body.immovable = true;

            ////////////Game Timed Out////////////////
            game.time.events.add(Phaser.Timer.SECOND * gameTimer, timedOut, this);
            
            ///////////////  Show Score  ////////////////
            scoreText = game.add.text(16, 16, 'Score: '+ score, { fontSize: '32px', fill: '#000' });

            ////////////Key press and click for setAim////////////
            $(document).keydown(function(e) {
                if (e.keyCode == 32) {
                    setAim();
                }
            });
            
            btnSetAim = game.add.button(game.world.centerX - 95, 525, 'btnSetAim', setAim, this, 2, 1, 0);
        }
        
        function createGunSite(){

            $(document).off('keydown');
            $('#startGame').off( 'click');
            //////////// Create Gun Site and Transparent Site/////////////////
            gunSite = game.add.sprite(sitePlacementX, sitePlacementY, 'gunSite');
            console.log("gunSite x and y = " + gunSite.x, gunSite.y);
            //transparentSite = game.add.sprite(sitePlacementX, sitePlacementY, 'transparentSite');
            //console.log("TR gunsite = " + transparentSite.x);
            //transparentSite.visible = true;
            test = gunSite.addChild(game.make.sprite(50, 50,'transparentSite'));
            game.physics.enable( gunSite , Phaser.Physics.ARCADE);
            gunSite.body.velocity.x = siteVelocity;
            //holds Site within the 'world Bounds'
            gunSite.body.collideWorldBounds = true;
            //Gives bounce off of walls
            gunSite.body.bounce.set(1.15);

            $(document).keydown(function(e) {
                if (e.keyCode == 32) {
                    setAim();
                }
            });
            //Set Aim Button
            btnSetAim = game.add.button(game.world.centerX - 95, 525, 'btnSetAim', setAim, this, 2, 1, 0);
        }

        function setAim(){

            btnSetAim.kill();

             gunCocking = game.add.audio('guncocking');

             gunCocking.play();

            
            game.time.events.events = [];
            game.time.events.add(Phaser.Timer.SECOND * gameTimer, timedOut, this);

            $(document).off('keydown');
            gunSite.destroy();
            
            gunSite = game.add.sprite(gunSite.x, gunSite.y, 'gunSite');
            // transparentSite = game.add.sprite(sitePlacementX + 2, sitePlacementY + 5, 'transparentSite');
            // gunSite.addChild(transparentSite);
            test = gunSite.addChild(game.make.sprite(50, 50,'transparentSite'));
            
            game.physics.enable( gunSite , Phaser.Physics.ARCADE);

            gunSite.body.velocity.y = siteVelocity;

            //holds Site within the 'world Bounds'
            gunSite.body.collideWorldBounds = true;

            //Gives bounce off of walls
            gunSite.body.bounce.set(1.15);

            $(document).keydown(function(e) {
                if (e.keyCode == 32) {
                    fireFunction();
                }
            });

            btnFire = game.add.button(game.world.centerX - 95, 525, 'btnFire', fireFunction, this, 2, 1, 0);
        }
        
        function update() {

            //Create a collision between the ground and gun site
            game.physics.arcade.collide(gunSite, ground);

            // set the max speed to the site X and Y
            gunSite.body.maxVelocity.x = siteMaxSpeed;
            gunSite.body.maxVelocity.y = siteMaxSpeed;
        }

        function fireFunction(){

            gunShot = game.add.audio('gunShot');
            gunShot.play();

            gameTries++;
            gunSite.kill();

            if (game.physics.arcade.overlap(test, targets, hitTarget, null, this)){
                
                console.log("Game Tries = " + gameTries);
                score++;
                scoreText.text = 'Score: ' + score;
                 
                // text = game.add.text(50,100, "HIT!!!", {
                //     font: "65px Arial",
                //     fill: "#ff0044",
                //     align: "center",

                // });
            }

                if(gameTries === 3){

                    if(score === 3){

                        $(".winner-overlay").delay(500).fadeIn(500);


                    }else{

                            gunShot = game.add.audio('gunShot');
                            gunShot.play();
                        $(".loser-overlay").fadeIn(500);

                        //game.destroy();
                    }

                }createGunSite(); hitTarget();
            }
        
        function hitTarget(transparentSite, target){

             if (gameTries === 3){

                gunSite.kill();
                //game.destroy();
            }


            var targetFalls = game.add.sprite(target.x, target.y, 'target-sprite');

            //  Add new animation called 'falling'
            //  Because we didn't give any other parameters it's going 
            //  to make an animation from all available frames in the 
            //  'targetFalls' sprite sheet
            var falling = targetFalls.animations.add('falling');

            //  And this starts the animation playing by using its key ("falling")
            //  30 is the frame rate (30fps)
            //  true means it will loop when it finishes
            targetFalls.animations.play('falling', 15, false);

           

            target.kill();

        }

        function timedOut(){

            $('.gptGame').fadeOut();
            $('.timed-out-overlay').fadeIn();
            game.destroy();
        }
     }
};

$(window).load (function(){gameObj.init();});
//http://www.phaser.io/examples/v2/loader/load-events
//http://phaser.io/tutorials/making-your-first-phaser-game/part2
//http://www.williammalone.com/articles/html5-animation-sprite-sheet-photoshop/
//http://www.owensouthwood.com/mrgoggles/
// var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

// function preload() {

//     // game.load.image('pig', 'assets/images/pig.png');

//     //  Firefox doesn't support mp3 files, so use ogg
//     game.load.audio('boden', ['assets/audio/gunShot.mp3']);

// }

// var s;
// var music;

// function create() {

//     //game.stage.backgroundColor = 'red';
//     //game.input.touch.preventDefault = false;

//     music = game.add.audio('boden');

//     music.play();

//     // s = game.add.sprite(game.world.centerX, game.world.centerY, 'pig');
//     // s.anchor.setTo(0.5, 0.5);

//     //game.input.onDown.add(changeVolume, this);

// }

// function changeVolume(pointer) {

//     // if (pointer.y < 100)
//     // {
//     //     music.mute = false;
//     // }
//     // else if (pointer.y < 300)
//     // {
//     //     music.volume += 0.1;
//     // }
//     // else
//     // {
//     //     music.volume -= 0.1;
//     // }

// }

// function update() {
//     //s.rotation += 0.01;
// }

// function render() {
//     //game.debug.soundInfo(music, 20, 32);
// }


// ////////////////////////////////////////////////////////////////
// // var gameObj = {
    
// //     init: function(){

// //         $('#startGame').on('click', function(e){

// //             $('#startGame').off('click');
// //             $(document).off('keydown');
// //             gameObj.gptGame();
// //             $('.overlay').delay(200).fadeOut(200);
// //         });

// //         $(document).keydown(function(e) {

// //             if (e.keyCode == 32) {
// //                 $(document).off('keydown');
// //                 $('#startGame').off( 'click');
// //                 gameObj.gptGame();
// //                 $('.overlay').delay(200).fadeOut(200);
// //             }
// //         });
    
// //     },
// // //http://www.williammalone.com/articles/html5-animation-sprite-sheet-photoshop/
// //     gptGame: function (){

// //         var gameTimer = 30;
// //         var sitePlacementX = 50;
// //         var sitePlacementY = 45;
// //         var siteVelocity = 300;
// //         var siteMaxSpeed = 1200;
// //         var gameTries = 0;
// //         var score = 0;
// //         var scoreText;
// //         var alpha;
// //         var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gptGame', { preload: preload, create: create, update: update});

// //         function preload() {
            

// //             game.load.image('gamePlayBackground', 'assets/gamePlayBackground.png');
// //             game.load.image('overlayBackground', 'assets/overlay.png');
// //             game.load.image('crate', 'assets/crate.png');
// //     	    game.load.image('target', 'assets/target.png');
// //     	    game.load.image('gunSite', 'assets/gunSite.png');
// //     	    game.load.image('ground', 'assets/platform.png');
// //             game.load.image('transparentSite', 'assets/transparentSite.png');
// //     	    game.load.image('btnStartGame', 'assets/btnStartGame.png', 193, 71);
// //     	    game.load.image('btnSetAim', 'assets/btnSetAim.png', 193, 71);
// //     	   	game.load.image('btnFire', 'assets/btnFire.png', 193, 71);
// //                                     //103 width 131 height 8 amount of sprites inkl. blank
// //             game.load.spritesheet('target-sprite', 'assets/target-sprite.png',103, 131,8);

// //         }

// //         function create() {
// //             console.log("create");

// //             $(document).off('keydown');
// //             $('#startGame').off( 'click');
            
// //             //  Enable the Arcade Physics system
// //             game.physics.startSystem(Phaser.Physics.ARCADE);
            
// //             //  Background for game
// //             game.add.sprite(0, 0, 'gamePlayBackground');

// //             ///////////////////Create Barrels/////////////////////////

// //             //  The crate group contains all crates in the game
// //             crate = game.add.group();

// //             //  Enable physics for any object that is created in the crate group
// //             crate.enableBody = true;
            
// //             newCrate = crate.create(100, 376, 'crate');

// //             //  Imovable stops newCrate from falling away when hit
// //             newCrate.body.immovable = true;

// //             newCrate = crate.create(350, 376, 'crate');

// //             newCrate.body.immovable = true;

// //             newCrate = crate.create(360, 255, 'crate');

// //             newCrate.body.immovable = true;


// //             ///////////////////Create target/////////////////////////
// //             targets = game.add.group();
// //             targets.enableBody = true;

// //             //  Create  three barrels
// //             target = targets.create(110, 250, 'target');
            
// //             // target.body.immovable = true;

// //             target = targets.create(375, 127, 'target');
            
// //             // target.body.immovable = true;

// //             target = targets.create(610, 370, 'target');
            
// //             // target.body.immovable = true;
            

// //             //////////// Create Site Call/////////////////
// //             createGunSite();
            
// //             //////////// Create Ground/Platform/////////////////
// //             //The platform group contains the ground and the 2 ledges we can jump on
// //             platform = game.add.group();

// //             //We will enable physics for any object that is created in this group
// //             platform.enableBody = true;
// //             platform.visible = false;

// //             //Here we create the ground.
// //             ground = platform.create(0, game.world.height - 95, 'ground');

// //             //Scale it to fit the width of the game (the original sprite is 50x32 in size)
// //             ground.scale.setTo(2, 2);

// //             //This stops it from falling away when you jump on it
// //             ground.body.immovable = true;

// //             ////////////Game Timed Out////////////////
// //             game.time.events.add(Phaser.Timer.SECOND * gameTimer, timedOut, this);
            
// //             ///////////////  Show Score  ////////////////
// //             scoreText = game.add.text(16, 16, 'Score: '+ score, { fontSize: '32px', fill: '#000' });

// //             ////////////Key press and click for setAim////////////
// //             $(document).keydown(function(e) {
// //                 if (e.keyCode == 32) {
// //                     setAim();
// //                 }
// //             });
            
// //             btnSetAim = game.add.button(game.world.centerX - 95, 525, 'btnSetAim', setAim, this, 2, 1, 0);
// //         }
        
// //         function createGunSite(){

// //             $(document).off('keydown');
// //             $('#startGame').off( 'click');
// //             //////////// Create Gun Site and Transparent Site/////////////////
// //             gunSite = game.add.sprite(sitePlacementX, sitePlacementY, 'gunSite');
// //             transparentSite = game.add.sprite(sitePlacementX + 2, sitePlacementY + 5, 'transparentSite');
// //             transparentSite.visible = false;
// //             gunSite.addChild(transparentSite);
// //             game.physics.enable( gunSite , Phaser.Physics.ARCADE);
// //             gunSite.body.velocity.x = siteVelocity;
// //             //holds Site within the 'world Bounds'
// //             gunSite.body.collideWorldBounds = true;
// //             //Gives bounce off of walls
// //             gunSite.body.bounce.set(1.15);

// //             $(document).keydown(function(e) {
// //                 if (e.keyCode == 32) {
// //                     setAim();
// //                 }
// //             });
// //             //Set Aim Button
// //             btnSetAim = game.add.button(game.world.centerX - 95, 525, 'btnSetAim', setAim, this, 2, 1, 0);
// //         }

// //         function setAim(){

// //             btnSetAim.kill();
// //             game.time.events.events = [];
// //             game.time.events.add(Phaser.Timer.SECOND * gameTimer, timedOut, this);

// //             $(document).off('keydown');
// //             gunSite.destroy();
            
// //             gunSite = game.add.sprite(gunSite.x, gunSite.y, 'gunSite');
// //             transparentSite = game.add.sprite(sitePlacementX + 2, sitePlacementY + 5, 'transparentSite');
// //             gunSite.addChild(transparentSite);
            
// //             game.physics.enable( gunSite , Phaser.Physics.ARCADE);

// //             gunSite.body.velocity.y = siteVelocity;

// //             //holds Site within the 'world Bounds'
// //             gunSite.body.collideWorldBounds = true;

// //             //Gives bounce off of walls
// //             gunSite.body.bounce.set(1.15);

// //             $(document).keydown(function(e) {
// //                 if (e.keyCode == 32) {
// //                     fireFunction();
// //                 }
// //             });

// //             btnFire = game.add.button(game.world.centerX - 95, 525, 'btnFire', fireFunction, this, 2, 1, 0);
// //         }
        
// //         function update() {

// //             //Create a collision between the ground and gun site
// //             game.physics.arcade.collide(gunSite, ground);

// //             // set the max speed to the site X and Y
// //             gunSite.body.maxVelocity.x = siteMaxSpeed;
// //             gunSite.body.maxVelocity.y = siteMaxSpeed;
// //         }

// //         function fireFunction(){

// //             gameTries++;
// //             gunSite.kill();

// //             if (game.physics.arcade.overlap(transparentSite, targets, hitTarget, null, this)){
                
// //                 console.log("Game Tries = " + gameTries);
// //                 score++;
// //                 scoreText.text = 'Score: ' + score;
// //                 }

// //                 if(gameTries === 3){



// //                     console.log("THAT Was THREE TRIES");

// //                     game.destroy();     
                    
// //                     if(score === 3){
                        
// //                         $(".winner-overlay").fadeIn(500);

// //                     }else{

// //                         $(".loser-overlay").fadeIn(500);

// //                         game.destroy();
// //                     }

// //                 }createGunSite(); hitTarget();
// //             }
        
// //         function hitTarget(transparentSite, target){

// //             // target.alpha = 1;
// //             // game.add.tween(target).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true, 0, 3000, true);
            

// //             var targetFalls = game.add.sprite(target.x, target.y, 'target-sprite');
// // // 
// //             //  Here we add a new animation called 'walk'
// //             //  Because we didn't give any other parameters it's going to make an animation from all available frames in the 'targetFalls' sprite sheet
// //             var falling = targetFalls.animations.add('falling');

// //             //  And this starts the animation playing by using its key ("falling")
// //             //  30 is the frame rate (30fps)
// //             //  true means it will loop when it finishes
// //             targetFalls.animations.play('falling', 15, false);

// //             target.kill();
// //         }

// //         function timedOut(){

// //             $('.gptGame').fadeOut();
// //             $('.timed-out-overlay').fadeIn();
// //             game.destroy();
// //         }
// //      }
// // };

// // $(window).load (function(){gameObj.init();});
// // //http://www.phaser.io/examples/v2/loader/load-events
// // //http://phaser.io/tutorials/making-your-first-phaser-game/part2