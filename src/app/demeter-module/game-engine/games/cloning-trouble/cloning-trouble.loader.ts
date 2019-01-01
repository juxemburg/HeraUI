import { Sprite } from '../../drawing/sprite.drawing';
import { ImageTexture } from '../../drawing/textures.drawing';
import { textureLoader } from '../parallel-cars/parallel-cars.loader';
import { Actor } from './game-objects/actor.gameobject';
import { ActorSpot } from './game-objects/actor-spot.gameobject';

export function LoadActor(id: number, x: number, y: number, type = 1) {
  let actorSprite: Sprite;
  switch (type) {
    case 1: // Mouse 1
      actorSprite = new Sprite(0, 0, [
        new ImageTexture(
          0,
          0,
          2,
          2,
          96,
          96,
          textureLoader.GetTexture('mouses_spritesheet'),
          100,
          100,
          2,
          90
        )
      ]);
      break;
    case 2: // Mouse 2
      actorSprite = new Sprite(0, 0, [
        new ImageTexture(
          0,
          0,
          2,
          102,
          96,
          96,
          textureLoader.GetTexture('mouses_spritesheet'),
          100,
          100,
          2,
          1,
          90
        )
      ]);
      break;
    case 3: // Zombie
      actorSprite = new Sprite(0, 0, [
        new ImageTexture(
          0,
          0,
          2,
          202,
          95,
          95,
          textureLoader.GetTexture('mouses_spritesheet'),
          100,
          100,
          1,
          1,
          12
        )
      ]);
      break;
    default:
      actorSprite = new Sprite(0, 0, [
        new ImageTexture(
          0,
          0,
          2,
          202,
          95,
          95,
          textureLoader.GetTexture('mouses_spritesheet'),
          100,
          100,
          2,
          1,
          12
        )
      ]);
      break;
  }
  const baseSpeed = 40 + Math.random() * 40;
  return new Actor(id, x, y, actorSprite, baseSpeed);
}

export function LoadActorSpot(id: number, x: number, y: number) {
  const spotSprite = new Sprite(0, 0, [
    new ImageTexture(
      0,
      0,
      2,
      202,
      95,
      95,
      textureLoader.GetTexture('cars_spritesheet'),
      100,
      100
    )
  ]);
  const lightSprite = new Sprite(0, 0, [
    new ImageTexture(
      0,
      0,
      2,
      202,
      95,
      95,
      textureLoader.GetTexture('cars_spritesheet'),
      100,
      100
    )
  ]);
  return new ActorSpot(id, x, y, lightSprite, spotSprite);
}
