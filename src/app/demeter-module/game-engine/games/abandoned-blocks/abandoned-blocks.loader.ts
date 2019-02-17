import { Sprite } from '../../drawing/sprite.drawing';
import { ImageTexture } from '../../drawing/textures.drawing';
import { textureLoader } from '../parallel-cars/parallel-cars.loader';
import { House } from './game-objects/house.gameobject';
import { ZombieHorde } from './game-objects/zombie-horde.gameobject';

export function LoadHouse(id: number, x: number, y: number): House {
  const sprite = new Sprite(0, 0, [
    new ImageTexture(
      0,
      0,
      2,
      102,
      95,
      95,
      textureLoader.GetTexture('houses_spritesheet'),
      100,
      100
    )
  ]);
  return new House(id, x, y, sprite);
}

export function LoadSafeHouse(id: number, x: number, y: number): House {
  const sprite = new Sprite(0, 0, [
    new ImageTexture(
      0,
      0,
      2,
      2,
      95,
      95,
      textureLoader.GetTexture('houses_spritesheet'),
      100,
      100
    )
  ]);
  return new House(id, x, y, sprite);
}

export function LoadZombieHorde(id: number, x: number, y: number): ZombieHorde {
  const sprite = new Sprite(0, 0, [
    new ImageTexture(
      0,
      0,
      2,
      202,
      95,
      95,
      textureLoader.GetTexture('houses_spritesheet'),
      100,
      100
    )
  ]);
  return new ZombieHorde(id, x, y, sprite);
}
