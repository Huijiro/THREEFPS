import * as THREE from "three";

class GameObject extends THREE.Object3D {
  mesh: THREE.Mesh<THREE.BufferGeometry, THREE.Material>;
  update: () => void;

  constructor(geometry: THREE.BufferGeometry, material: THREE.Material) {
    super();
    this.mesh = new THREE.Mesh(geometry, material);
    this.add(this.mesh);
    this.update = () => {};
  }
}

export default GameObject;
