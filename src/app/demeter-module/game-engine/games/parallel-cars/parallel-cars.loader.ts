import { Sprite } from '../../drawing/sprite.drawing';
import { TextureLoader } from '../../loader/texture-map';
import { ImageTexture } from '../../drawing/textures.drawing';
import { Car } from './game-objects/car.gameobject';
import { Package } from './game-objects/package.gameobject';

export let textureLoader = new TextureLoader();


export function LoadCar(
    id: number, x: number, y: number, speed: number) {
    const carSprite = new Sprite(0, 0, [
        new ImageTexture(0, 0, textureLoader.GetTexture('car_left')),
        new ImageTexture(0, 0, textureLoader.GetTexture('car_right'))
    ]);
    return new Car(id, x, y, carSprite, speed);
}

export function LoadPackage(
    id: number, x: number, y: number) {
    const packageSprite = new Sprite(0, 0, [
        new ImageTexture(0, 0, textureLoader.GetTexture('package'))
    ]);
    return new Package(id, x, y, packageSprite, 0);
}