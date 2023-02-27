import { Line, LineConfig } from './Line.js';
import { GetSet } from '../types.js';
export interface ArrowConfig extends LineConfig {
    points: number[];
    tension?: number;
    closed?: boolean;
    pointerLength?: number;
    pointerWidth?: number;
    pointerAtBeginning?: boolean;
    pointerAtEnding?: boolean;
}
export declare class Arrow extends Line<ArrowConfig> {
    _sceneFunc(ctx: any): void;
    __fillStroke(ctx: any): void;
    getSelfRect(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    pointerLength: GetSet<number, this>;
    pointerWidth: GetSet<number, this>;
    pointerAtEnding: GetSet<boolean, this>;
    pointerAtBeginning: GetSet<boolean, this>;
}
