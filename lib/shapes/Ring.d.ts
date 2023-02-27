import { Shape, ShapeConfig } from '../Shape.js';
import { GetSet } from '../types.js';
export interface RingConfig extends ShapeConfig {
    innerRadius: number;
    outerRadius: number;
}
export declare class Ring extends Shape<RingConfig> {
    _sceneFunc(context: any): void;
    getWidth(): number;
    getHeight(): number;
    setWidth(width: any): void;
    setHeight(height: any): void;
    outerRadius: GetSet<number, this>;
    innerRadius: GetSet<number, this>;
}
