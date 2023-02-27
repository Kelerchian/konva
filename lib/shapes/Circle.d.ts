import { Shape, ShapeConfig } from '../Shape.js';
import { GetSet } from '../types.js';
export interface CircleConfig extends ShapeConfig {
    radius?: number;
}
export declare class Circle extends Shape<CircleConfig> {
    _sceneFunc(context: any): void;
    getWidth(): number;
    getHeight(): number;
    setWidth(width: any): void;
    setHeight(height: any): void;
    radius: GetSet<number, this>;
}
