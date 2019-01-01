import { Sprite } from '../../drawing/sprite.drawing';

import { ImageTexture } from '../../drawing/textures.drawing';

import { textureLoader } from '../parallel-cars/parallel-cars.loader';

import { Garden } from './game-objects/garden.gameobject';
import { Cloud } from './game-objects/cloud.gameobject';

export function LoadGarden(id: number, x: number, y: number) {
  const spotSprite = new Sprite(0, 0, [
    new ImageTexture(
      0,
      0,
      2,
      2,
      96,
      96,
      textureLoader.GetTexture('cicles_spritesheet'),
      100,
      100,
      3,
      2,
      12
    )
  ]);
  return new Garden(id, x, y, spotSprite);
}

export function LoadCloud(id: number, x: number, y: number) {
  const cloudSprite = new Sprite(0, 0, [
    new ImageTexture( 
      0,
      0,
      2,
      202,
      96,
      96,
      textureLoader.GetTexture('cicles_spritesheet'),
      100,
      100,
      3,
      2,
      60
    )
  ]);
  return new Cloud(id, x, y, cloudSprite);
}
