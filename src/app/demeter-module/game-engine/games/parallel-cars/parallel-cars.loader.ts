import { Sprite } from '../../drawing/sprite.drawing';
import { TextureLoader } from '../../loader/texture-map';
import { ImageTexture } from '../../drawing/textures.drawing';
import { Car } from './game-objects/car.gameobject';
import { Package } from './game-objects/package.gameobject';

export let textureLoader = new TextureLoader();

export function LoadCar(id: number, x: number, y: number, speed: number) {
  const carSprite = new Sprite(0, 0, [
    new ImageTexture(
      0,
      0,
      2,
      2,
      95,
      95,
      textureLoader.GetTexture('cars_spritesheet'),
      100,
      100,
      2
    ),
    new ImageTexture(
      0,
      0,
      2,
      2,
      95,
      95,
      textureLoader.GetTexture('cars_spritesheet'),
      100,
      100,
      2
    )
  ]);
  return new Car(id, x, y, carSprite, speed);
}

export function LoadPackage(id: number, x: number, y: number) {
  const packageSprite = new Sprite(0, 0, [
    new ImageTexture(
      0,
      0,
      2,
      102,
      95,
      95,
      textureLoader.GetTexture('cars_spritesheet'),
      100,
      100
    )
  ]);
  return new Package(id, x, y, packageSprite, 0);
}
