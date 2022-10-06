import * as THREE from "three";
import GameObject from "../GameObject";

class GameSystems {
  canvas: HTMLCanvasElement;
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  clock: THREE.Clock;
  entities: GameObject[];

  constructor() {
    this.renderer = new THREE.WebGLRenderer();
    this.canvas = this.renderer.domElement;
    this.scene = new THREE.Scene();
    this.clock = new THREE.Clock();

    this.camera = this.setupCamera();

    this.entities = [];

    document.body.append(this.canvas);
    requestAnimationFrame(this.render.bind(this));
  }

  setupCamera() {
    const fov = 75;
    const aspect = 2; // the canvas default
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    return camera;
  }

  public addToScene(object: GameObject): void {
    this.entities.push(object);
    this.scene.add(object);
  }

  resize() {
    this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
    this.camera.updateProjectionMatrix();
  }

  render(time: number) {
    time *= 0.001;
    this.renderer.render(this.scene, this.camera);
    this.entities.forEach((entity) => entity.update());

    requestAnimationFrame(this.render.bind(this));
  }
}

export default GameSystems;
