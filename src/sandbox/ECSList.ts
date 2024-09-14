import CoreComponent from "../core/dogma/abstracts/coreComponent";
import CoreSystem from "../core/dogma/abstracts/coreSystem";
import NaviImg from "../core/navigpu/elements/naviImg";
import NaviText from "../core/navigpu/elements/naviText";
import Transform from "./components/transform";
import SpriteRenderer from "./components/spriteRenderer";
import Animation from "./components/animation";
import NaviDiv from "../core/navigpu/elements/div";
import IndieRigidBody from "./components/indieRigidBody";
import TextRenderer from "./components/textRenderert";
//Sprite
import SpriteAnimator from "./exampleSprite/systems/animator";
import SpriteRendering from "./exampleSprite/systems/renderer";
import GenerateGUI from "./exampleSprite/systems/generateGUI";
import TopPicker from "./exampleSprite/ui/topPicker";
import PantsPicker from "./exampleSprite/ui/pantsPicker";
import Button from "./exampleSprite/ui/button";
import ColorBox from "./exampleSprite/ui/colorBox";
import ColorPicker from "./exampleSprite/ui/colorPicker";
import ShoesPicker from "./exampleSprite/ui/shoesPicker";
//Phys
import PhysAnimator from "./examplePhysics/systems/animator";
import PhysRendering from "./examplePhysics/systems/renderer";
import indiePhysics from "./examplePhysics/systems/indiePhysics";
import PhysKeyInputs from "./examplePhysics/systems/keyInputs";
// Lights
import PointLight from "./components/pointLight";
import LightRoutine from "./components/routine";
import LightsRenderer from "./exampleLights/systems/renderer";
import DayNight from "./exampleLights/systems/dayNight";
//NOTE: required at least 1 component and system in list, after that you can remove Cores
export const avalibleComponents = {
  CoreComponent,
  Transform,
  SpriteRenderer,
  Animation,
  IndieRigidBody,
  TextRenderer,
  PointLight,
  LightRoutine,
} as const;
export const avalibleSystems = {
  CoreSystem, // required
  SpriteAnimator,
  SpriteRendering,
  PhysAnimator,
  PhysRendering,
  GenerateGUI,
  indiePhysics,
  PhysKeyInputs,
  LightsRenderer,
  DayNight,
} as const;
export const NaviUINodes = {
  NaviImg,
  NaviText,
  TopPicker,
  Button,
  ColorBox,
  ColorPicker,
  PantsPicker,
  ShoesPicker,
  NaviDiv,
};
