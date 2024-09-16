import Engine from "../core/engine";
import { exampleSpritePreload, exampleSpriteSetup } from "./exampleSprite";
import { examplePhysicsPreload, examplePhysicsSetup } from "./examplePhysics";
import { exampleLightsPreload, exampleLightsSetup } from "./exampleLights";
import { getErrorPage } from "../exampleStuff/loading";

const params = new URLSearchParams(window.location.search);
let name: string = "undefined";
if (params.has("demo")) name = params.get("demo")!;
console.log("currently on: ", name);
switch (name) {
  case "sprite": {
    Engine.Initialize({
      preload: exampleSpritePreload,
      setup: exampleSpriteSetup,
    });
    break;
  }
  case "physics": {
    Engine.Initialize({
      preload: examplePhysicsPreload,
      setup: examplePhysicsSetup,
    });
    break;
  }
  case "lights": {
    Engine.Initialize({
      preload: exampleLightsPreload,
      setup: exampleLightsSetup,
    });
    break;
  }
  default:
    getErrorPage();
    break;
}
