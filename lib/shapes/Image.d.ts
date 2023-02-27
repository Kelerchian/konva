import { Shape, ShapeConfig } from '../Shape.js';
import { GetSet, IRect } from '../types.js';
import { Context } from '../Context.js';
export interface ImageConfig extends ShapeConfig {
    image: CanvasImageSource | undefined;
    crop?: IRect;
    cornerRadius?: number | number[];
}
export declare class Image extends Shape<ImageConfig> {
    constructor(attrs: ImageConfig);
    _setImageLoad(): void;
    _useBufferCanvas(): boolean;
    _sceneFunc(context: Context): void;
    _hitFunc(context: any): void;
    getWidth(): any;
    getHeight(): any;
    static fromURL(url: any, callback: any, onError?: any): void;
    image: GetSet<CanvasImageSource | undefined, this>;
    crop: GetSet<IRect, this>;
    cropX: GetSet<number, this>;
    cropY: GetSet<number, this>;
    cropWidth: GetSet<number, this>;
    cropHeight: GetSet<number, this>;
    cornerRadius: GetSet<number | number[], this>;
}
