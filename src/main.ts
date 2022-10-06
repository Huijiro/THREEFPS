import GameSystems from "./GameSystems";
import * as THREE from "three";
import "./style.css";
import GameObject from "./GameObject";

const GameSystem = new GameSystems();

const cube = new GameObject(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x44aa88 })
);

GameSystem.addToScene(cube);
GameSystem.camera.position.z = 2;

cube.update = () => {
  cube.rotation.y += 0.01;
};
