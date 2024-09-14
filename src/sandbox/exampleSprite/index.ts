import AuroraBatcher from "../../core/aurora/urp/batcher";
import DogmaCore from "../../core/dogma/core";
import boySprite from "../../assets/suit3.png";
import city from "../../assets/city.png";
import bridge from "../../assets/bridge.png";
import EntityManager from "../../core/dogma/entityManager";
import Boy from "./entities/boy";
import Sceen from "./entities/sceen";
import GlobalStore from "../../core/modules/globalStore/globalStore";

export async function exampleSpritePreload() {
  await AuroraBatcher.createBatcher({
    backgroundColor: [255, 255, 0, 255],
    maxQuadPerSceen: 200,
    customCamera: false,
    bloom: { active: false, str: 0 },
    loadTextures: [
      { name: "boooy", url: boySprite },
      { name: "city", url: city },
      { name: "bridge", url: bridge },
    ],
  });
}

export function exampleSpriteSetup() {
  GlobalStore.addToStore(
    "colors",
    [255, 0, 0],
    [0, 255, 0],
    [0, 0, 255],
    [255, 255, 0],
    [255, 0, 255]
  );
  DogmaCore.createWorld("main");
  EntityManager.addEntityOnStart(new Sceen("city"));
  EntityManager.addEntityOnStart(new Boy());
  EntityManager.addEntityOnStart(new Sceen("bridge"));
  DogmaCore.addSystem("GenerateGUI", true);
  DogmaCore.addSystem("SpriteAnimator");
  DogmaCore.addSystem("SpriteRendering");
}
