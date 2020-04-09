function Constructeur()
{
    var container; 
            
    var camera, scene, renderer;
    var dax=0.002;
    var light;
    var mouse = new THREE.Vector2(), INTERSECTED;


    function onWindowResize()
    {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
    }

    function onDocumentMouseMove( event ) {

        event.preventDefault();

        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    }

   
    

    function Init()
    {
        container = document.createElement( 'div' );
        document.body.appendChild( container );

        camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 1, 2000 );
        camera.rotation.z=0; //rotation sur elle meme (hauteur,inclinaison)
        camera.rotation.x=Math.PI/2; //rotation vers le haut, 90deg
        camera.rotation.y=2*Math.PI; // rotation gauche/droite
        camera.position.z=-21; //position haut/bas
		camera.position.x=0;//position gauche/droite
        camera.position.y=2;//position avancer/reculer


        //couleur
        var color = new THREE.Color();

        //objets
        var objects = [];

        // scene
        scene = new THREE.Scene();

        var ambient = new THREE.AmbientLight( 0x0A0A09 );  //base:0x656565
        scene.add( ambient );

        // texture

        var manager = new THREE.LoadingManager();
        manager.onProgress = function ( item, loaded, total )
        {
            console.log( item, loaded, total );
        };

        var texture = new THREE.Texture();

        var loader = new THREE.ImageLoader( manager );
        loader.load( 'TranseptSud/TranseptTexture4096.jpg', function ( image )
        {
            texture.image = image;
            texture.needsUpdate = true;
        } );

        // Chargement du modèle
        var loader = new THREE.OBJLoader( manager );
        loader.load( 'TranseptSud/transeptSudBox.obj', function ( object )
        {
            object.traverse( function ( child )
            {
                if ( child instanceof THREE.Mesh )
                {
                    child.material.map = texture;
                }
            } );
            scene.add( object );
        } );



        var boxGeometry = new THREE.BoxBufferGeometry( 0.1, 0.1, 0.1 );
        
        
        
        
        //carré

       
        
        var object = new THREE.Mesh( boxGeometry, new THREE.MeshLambertMaterial( { color: 0xffffff } ) );

		object.position.x = 6;
		object.position.y = -1.7;
        object.position.z = -19.75;
        scene.add( object );       






        var sphere = new THREE.SphereBufferGeometry( 0.25, 16, 8 );
        light = new THREE.PointLight( 0xE5A836, 1.5, 10, 2.0 );
		light.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xE5A836 } ) ) );
        scene.add( light );

        var textureimg1 = [];
		textureimg1.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'programmes/images/Controles.png' ), transparent: true, opacity: 0, color: 0x4BB30B }));
		textureimg1.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'programmes/images/Controles.png' ), transparent: true, opacity: 0, color: 0x4BB30B }));
		textureimg1.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'programmes/images/Controles.png' ), transparent: true, opacity: 0, color: 0x4BB30B }));//
		textureimg1.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'programmes/images/Controles.png' ), transparent: true, opacity: 1, color: 0x4BB30B }));//
		textureimg1.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'programmes/images/Controles.png' ), transparent: true, opacity: 0, color: 0x4BB30B }));
		textureimg1.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'programmes/images/Controles.png' ), transparent: true, opacity: 0, color: 0x4BB30B }));
		var facemat = new THREE.MeshFaceMaterial(textureimg1);
		var geometry = new THREE.CubeGeometry( 2, 0, 2, 1, 1, 1, textureimg1 );
		canvas = new THREE.Mesh( geometry, facemat );
		canvas.position.set(0, 4,-21);
        scene.add( canvas );
        
        var textureimg2 = [];
		textureimg2.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'programmes/images/Part2.png' ), transparent: true, opacity: 0, color: 0x4BB30B }));
		textureimg2.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'programmes/images/Part2.png' ), transparent: true, opacity: 1, color: 0x4BB30B }));//
		textureimg2.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'programmes/images/Part2.png' ), transparent: true, opacity: 0, color: 0x4BB30B }));
		textureimg2.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'programmes/images/Part2.png' ), transparent: true, opacity: 0, color: 0x4BB30B }));
		textureimg2.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'programmes/images/Part2.png' ), transparent: true, opacity: 0, color: 0x4BB30B }));
		textureimg2.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'programmes/images/Part2.png' ), transparent: true, opacity: 0, color: 0x4BB30B }));
		var facemat2 = new THREE.MeshFaceMaterial(textureimg2);
		var geometry2 = new THREE.CubeGeometry( 2, 0, 2, 1, 1, 1, textureimg2 );
		canvas2 = new THREE.Mesh( geometry2, facemat2 );
        canvas2.position.set(6.75, -3,-21);
        canvas2.rotation.set(canvas.rotation.x+(Math.PI/2),canvas.rotation.y,canvas.rotation.z);
        //scene.add( canvas2 );  
        

        var textureimg3 = [];
		textureimg3.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'programmes/images/Part3.png' ), transparent: true, opacity: 1, color: 0xFF7B00 }));
		textureimg3.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'programmes/images/Part3.png' ), transparent: true, opacity: 0, color: 0xFF7B00 }));//
		textureimg3.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'programmes/images/Part3.png' ), transparent: true, opacity: 0, color: 0xFF7B00 }));
		textureimg3.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'programmes/images/Part3.png' ), transparent: true, opacity: 0, color: 0xFF7B00 }));
		textureimg3.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'programmes/images/Part3.png' ), transparent: true, opacity: 0, color: 0xFF7B00 }));
		textureimg3.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'programmes/images/Part3.png' ), transparent: true, opacity: 0, color: 0xFF7B00 }));
		var facemat3 = new THREE.MeshFaceMaterial(textureimg3);
		var geometry3 = new THREE.CubeGeometry( 2, 0, 2, 1, 1, 1, textureimg3 );
		canvas3 = new THREE.Mesh( geometry3, facemat3 );
        canvas3.position.set(-5.75, -5,-21);
        canvas3.rotation.set(canvas.rotation.x+(Math.PI/2),canvas.rotation.y,canvas.rotation.z);
		//scene.add( canvas3 );  




        
        raycaster = new THREE.Raycaster();

        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( renderer.domElement );

        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        window.addEventListener( 'resize', onWindowResize, false );
        

    }
    
    function render() {

        
        light.position.x =  camera.position.x
        light.position.z =  camera.position.z
        light.position.y= camera.position.y

        if((camera.position.x>=4) && (camera.position.y<=0 &&camera.position.y>=-2)){
            scene.add( canvas2 ); 
        }

        if((camera.position.x<=-3) && (camera.position.y<=-4 &&camera.position.y>=-6)){
            scene.add( canvas3 ); 
        }

        

        var intersects = raycaster.intersectObjects( scene.children );

				if ( intersects.length > 0 ) {

					if ( INTERSECTED != intersects[ 0 ].object ) {

						if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

						INTERSECTED = intersects[ 0 ].object;
						INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
						INTERSECTED.material.emissive.setHex( 0xff0000 );

					}

				} else {

					if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

					INTERSECTED = null;

				}


        

        renderer.render( scene, camera );

    }


    function Afficher()
    {
        renderer.render(scene,camera);
    }

    function Animer()
    {
        requestAnimationFrame(Animer);

        render();
        Afficher();
    }






    var incr = Math.PI/16;
    var mod_gd=0; //modularité


    window.addEventListener("keydown", function(event)
    {
        if (event.defaultPrevented)
        {
            return;
		}
		
		switch(event.key){
            case "KeyW":  //z
                camera.rotation.x +=0.20;
                break;
            case "KeyS":  //q
                camera.rotation.x -=0.20;
                break;
			case "ArrowDown":  //flache bas
				camera.position.x -= Math.sin(-camera.rotation.y) * incr;
				camera.position.y -= Math.cos(-camera.rotation.y) * incr;
      			break;
    		case "ArrowUp":  //fleche haut
                if(camera.position.x <5 && camera.position.x >-5 && camera.position.y<10 && camera.position.y>-10){
                    camera.position.x += Math.sin(-camera.rotation.y) * incr;
				    camera.position.y += Math.cos(-camera.rotation.y) * incr;
                }
      			break;
    		case "ArrowLeft": //fleche gauche
                mod_gd+=1;  
                
                if(mod_gd%30==0)
                {
                    camera.rotation.y= 2*Math.PI
                }else
                {
                    camera.rotation.y += incr
                }
                break;
                  
    		case "ArrowRight":  //fleche droite
                mod_gd-=1;
                if(mod_gd%30==0)
                {
                    camera.rotation.y= 2*Math.PI
                }else
                {
                    camera.rotation.y -= incr
                }
                break;
            

		}
        this.console.log("Position : { x : " + camera.position.x + ", y : " + camera.position.y + ", z : " + camera.position.z + "}");
        //this.console.log("Rotation : { x : " + camera.rotation.z + ", y : " + camera.rotation.y + ", z : " + camera.rotation.x + "}");
        Animer();
        event.preventDefault();
        
    }, true);

    Init();
    Animer();
}
