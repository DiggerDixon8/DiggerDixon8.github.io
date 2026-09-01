$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid

    //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(200, 300, 200, 20, "purple");
    createPlatform(200, 500, 200, 20, "green");
    createPlatform(600, 620, 200, -20, "blue");
    createPlatform(900, 300, 200, 20,  "yellow");
    createPlatform(600, 400, 100, 20, "pink");
    // TODO 3 - Create Collectables

    createCollectable("steve", 1200, 50);
    createCollectable("diamond", 200, 370, 0, 0.7);
    createCollectable("database", 500, 300, 0, 0.7);
    createCollectable("kennedi", 400, 500, 0, 0.7, 100, 800, 2);
    createCollectable("max", 900, 170, 0, 0.7);
    createCollectable("grace", 200, 100, 0, 1, 100, 300, 2);
    // TODO 4 - Create Cannons

    createCannon("bottom", 200, 1000, 20, 10, 100, 1200, 3);
    createCannon("right", 300, 2000);
    createCannon("left", 200, 2000, 20, 10, 100, 580, 3);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
