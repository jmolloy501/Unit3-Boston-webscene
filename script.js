
    require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Home) {

    
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"8046207c1c214b5587230f5e5f8efc77" 
        }
      });
      
      var camera = new Camera({
        position: [
           -71.05911757497098,
          42.36072946658332,
          10000// elevation in meters
        ],
        tilt:0,
        heading: 0
      });
      
      var camera1 = new Camera({
        position: [
           -71.060,
          42.365,
          5000// elevation in meters
        ],
        tilt:0,
        heading: 0
      });
      
      var camera2 = new Camera({
						position: [
							 -71.060,
							42.370,
							2000// elevation in meters
						],
						tilt:30,
						heading: 180
					});
      
      var camera3 = new Camera({
        position: [
							 -70.98,
							42.34,
							1750// elevation in meters
						],
						tilt: 70,
						heading: 280
					});

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"global",
        camera: camera,
        environment: {
            lighting: {
              date: new Date(),
              directShadowsEnabled: true,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: false
            }
        },
    });
    
    var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");
    
    [bos, down, ocean].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });
    
    bos.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera1
      });
    });
    
    down.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera2
      });
    });
      
   ocean.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera3
					});
				});
			});
