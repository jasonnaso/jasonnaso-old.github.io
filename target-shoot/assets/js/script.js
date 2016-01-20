var gameObj = {
    
    init: function(){

            //Hide preload gif and intitial text
            // $('.preloader-gif, .preloader-text').fadeOut('slow');
            $('.initial-overlay').fadeOut('slow');


            //Fade In Overlay and start button/directions-text
            $('.btn-start, .instructions-text, .instructions-overlay').fadeIn('slow');
        
        //Click to start game
        $('.btn-start').on('click', function(e){
            
            $('.btn-start').off('click');
            $(document).off('keydown');
            gameObj.gptGame();
            $('.instructions-overlay, .instructions-text').fadeOut(500);
        });

        //  Keydown to start game
        $(document).keydown(function(e) {

            if (e.keyCode == 32) {

                $(document).off('keydown');
                $('.btn-start').off( 'click');
                gameObj.gptGame();
                $('.instructions-overlay, .instructions-text').fadeOut(500);
            }
        });
    },

    gptGame: function (){
        
        var timedOutTimer = 30;
        var endGameTimer = 5;
        var endMusicTimer = 3000;
        var sitePlacementX = 50;  
        var sitePlacementY = 350; // Max Is 388 (Otherwise it disregaurds the first bounce())
        var siteVelocity = 300;
        var siteMaxSpeed = 1200;
        var gameTries = 0;
        var score = 0;
        var scoreText;

        //Added Animation And Sound
        var gunCockingSound;
        var gunShotSound;
        var birdPlacementY = 450;

        var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'gptGame', { preload: preload, create: create, update: update});
        
        //PHASERs Preload: Preload all images sprites and sounds
        function preload() {

            //Images
            game.load.image('gamePlayBackground', 'assets/images/game-background.jpg');
            game.load.image('crate', 'assets/images/crate.png');
    	    game.load.image('target', 'assets/images/target.png');
    	    game.load.image('gunSite', 'assets/images/gunSite.png');
    	    game.load.image('ground', 'assets/images/platform.png');
            game.load.image('transparentSite', 'assets/images/transparentSite.png');
    	    game.load.image('btn-start', 'assets/images/btn-start.png', 193, 71);
    	    game.load.image('btnSetAim', 'assets/images/btnSetAim.png', 193, 71);
    	   	game.load.image('btnFire', 'assets/images/btnFire.png', 193, 71);
            game.load.spritesheet('target-sprite', 'assets/images/target-sprite.png',103, 131,8);
            game.load.spritesheet('hit', 'assets/images/hit-new.png',263, 199,8);

            //Spritesheet
            game.load.spritesheet('bird', 'assets/images/bird.png', 70, 70);
            //Audio
            //game.load.audio('musicForGame', ['assets/audio/musicForGame.mp3']);
            game.load.audio('gunShot', ['assets/audio/gunShot.mp3']);
            game.load.audio('guncocking', ['assets/audio/gunCocking.mp3']);

            function loadStart(){

                $(".game-loading-gif, .overlay, .preloader-text").show();
                
            }
                game.load.onLoadStart.add(loadStart, this);

            function loadComplete(){

                $('.game-loading-gif').hide();
                $(".overlay, .preloader-text").fadeOut(300);
    
                btnSetAim = game.add.button(game.world.centerX - 95, 525, 'btnSetAim', setAim, this, 2, 1, 0);

            }
            game.load.onLoadComplete.add(loadComplete, this);
        }

        //PHASERs create function
        function create() {
            
            // add music if wanted
            // themeMusic = game.add.audio('themeMusic');
            // themeMusic.loopFull = true;
            // themeMusic.onDecoded.add(startThemeMusic, this);

            //Unbind keydown and click
            $(document).off('keydown');
            $('.btn-start').off( 'click');

            //  Enable the Arcade Physics system
            game.physics.startSystem(Phaser.Physics.ARCADE);
            
            //  Background for game
            game.add.sprite(0, 0, 'gamePlayBackground');

            //  Create Bird
            bird = game.add.sprite(800, randomize(birdPlacementY), 'bird');
            bird.animations.add('fly');
            bird.animations.play('fly', 20, true);
            game.add.tween(bird).to({ x: -55, y: randomize(400) }, 18000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

            //  Create Crates
            crates = game.add.group();
            crates.enableBody = true;
            
            crate = crates.create(100, 376, 'crate');
            crate = crates.create(350, 376, 'crate');
            crate = crates.create(360, 255, 'crate');

            //  Create target
            targets = game.add.group();
            targets.enableBody = true;

            target = targets.create(110, 250, 'target');
            target = targets.create(375, 127, 'target');
            target = targets.create(610, 370, 'target');
            
            //  Create Gun Site 
            createGunSite();
            
            //  Create Ground/Platform
            platform = game.add.group();
            platform.enableBody = true;
            platform.visible = false;

            ground = platform.create(0, game.world.height - 95, 'ground');
            ground.scale.setTo(2, 2);
            ground.body.immovable = true;

            //  Game Timed Out
            game.time.events.add(Phaser.Timer.SECOND * timedOutTimer, timedOut, this);
            
            //  Show Score 
            scoreText = game.add.text(16, 16, 'Score: '+ score, { fontSize: '32px', fill: '#000' });

            //  Key press and click for setAim
            $(document).keydown(function(e) {
                if (e.keyCode == 32) {
                    setAim();
                }
            });
        }

        // //Start Music
        // function startThemeMusic(){
        // themeMusic.fadeIn(3000);
        // }

        // Create Gun Site and Transparent Site
        function createGunSite(){

            gunSite = game.add.sprite(sitePlacementX, randomize(sitePlacementY), 'gunSite');
            transparentSite = gunSite.addChild(game.make.sprite(50, 50,'transparentSite'));
            
            game.physics.enable( gunSite , Phaser.Physics.ARCADE);
            // Give site movement and speed
            gunSite.body.velocity.x = siteVelocity;
            // Holds Site within the 'world Bounds'
            gunSite.body.collideWorldBounds = true;
            // Gives bounce off of walls
            gunSite.body.bounce.set(1.15);

            $(document).off('keydown');
            $('.btn-start').off( 'click');
            $(document).keydown(function(e) {
                if (e.keyCode == 32) {
                    setAim();
                }
            });
            // Create Set Aim Button
            btnSetAim = game.add.button(game.world.centerX - 95, 525, 'btnSetAim', setAim, this, 2, 1, 0);
        }

        //Randomize  bird and site
        function randomize(randomPlacement){
            
            var placement = (Math.floor(Math.random() * randomPlacement));

            return placement;
        }

        //Create sites vertical movement
        function setAim(){

            $(".instructions-text").addClass("hide");
            //Hide set aim btn
            btnSetAim.kill();

            //Gun cocking audio
            gunCocking = game.add.audio('guncocking');
            gunCocking.play();


            game.time.events.events = [];
            game.time.events.add(Phaser.Timer.SECOND * timedOutTimer, timedOut, this);

            $(document).off('keydown');
            gunSite.destroy();
            
            gunSite = game.add.sprite(gunSite.x, gunSite.y, 'gunSite');
            transparentSite = gunSite.addChild(game.make.sprite(50, 50,'transparentSite'));

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
                
            if (bird.x < -50){

                bird.kill();
            }
        }

        //Add audio for gun shot and cocking// Check if site and target "collide" for a hit after fired// score
        function fireFunction(){

            gunShot = game.add.audio('gunShot');
            gunShot.play();

            gameTries++;
            gunSite.kill();

            if (game.physics.arcade.overlap(transparentSite, targets, hitTarget, null, this)){
                
                score++;
                scoreText.text = 'Score: ' + score;
                
                hit = targets.create(550, 50, "hit");
                
                game.time.events.add(200, function() {

                    game.add.tween(hit).to({alpha: 0}, 200, Phaser.Easing.Linear.None, true);

                }, this);
            }
                // score check and add correct overlay
                if(gameTries === 3){

                    $(document).off('keydown');
                    $('.btn-start').off( 'click');

                    if(score === 3){

                        $(".overlay").delay(500).fadeIn(500);
                        $(".winner").fadeIn(500);
                        $(".banner").fadeIn();

                    }else{

                        gunShot = game.add.audio('gunShot');
                        gunShot.play();

                        switch (score) {
                            case 0:
                                $(".overlay").fadeIn(500);
                                 $(".zero-hits").fadeIn(500);
                                 $(".banner").fadeIn();
                                break; 
                            case 1:
                                $(".overlay").fadeIn(500);
                                $(".one-hit").fadeIn(500);
                                $(".banner").fadeIn();
                                break;
                            case 2:
                                $(".overlay").fadeIn(500);
                                $(".two-hits").fadeIn(500);
                                $(".banner").fadeIn();
                                break;
                        }
                    }

                }createGunSite(); hitTarget();
            }
        
        // Check score
        function hitTarget(transparentSite, target){

             if (gameTries === 3){

                gunSite.kill();

                $(document).off('keydown');
                // themeMusic.fadeOut(endMusicTimer);
                game.time.events.add(Phaser.Timer.SECOND * endGameTimer, endGame, this);
            }

            var targetFalls = game.add.sprite(target.x, target.y, 'target-sprite');
            var falling = targetFalls.animations.add('falling');
            targetFalls.animations.play('falling', 15, false);

            target.kill();
        }
        //Destroy game when needed
        function endGame(){
            
            game.destroy();
        }
         //Time the game out if idle for 30 secs
        function timedOut(){

            $(document).off('keydown');
            $('.btn-start').off( 'click');

            $('.gptGame').fadeOut();
            $('.overlay').fadeIn();
            $('.timed-out').fadeIn();
            // themeMusic.fadeOut(endMusicTimer);
            game.time.events.add(Phaser.Timer.SECOND * endGameTimer, endGame, this);
        }
     }
};

$(window).load (function(){console.log("Loaded"); gameObj.init(); });

